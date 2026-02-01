
import React, { useState, useEffect, useRef, useCallback } from 'react';

type GameType = 'snake' | 'jump' | 'none';

const GameSimulator: React.FC = () => {
  const [activeGame, setActiveGame] = useState<GameType>('none');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('arcade_high_score');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);

  // --- REFS FOR STABLE GAME DATA ---
  const activeGameRef = useRef<GameType>('none');
  const gameStateRef = useRef<'idle' | 'playing' | 'gameover'>('idle');
  
  useEffect(() => { activeGameRef.current = activeGame; }, [activeGame]);
  useEffect(() => { gameStateRef.current = gameState; }, [gameState]);

  // --- SNAKE DATA (Optimized Grid) ---
  const snakeRef = useRef({
    body: [{ x: 10, y: 7 }, { x: 10, y: 8 }, { x: 10, y: 9 }],
    dir: { x: 0, y: -1 },
    nextDir: { x: 0, y: -1 },
    food: { x: 5, y: 5, isMega: false },
    dotsEaten: 0,
    gridW: 24, 
    gridH: 18, 
    cellSize: 20,
    lastUpdate: 0,
    speed: 130
  });

  // --- JUMP DATA ---
  const jumpRef = useRef({
    playerY: 0,
    velocity: 0,
    obstacles: [] as { x: number, width: number }[],
    frame: 0,
    isJumping: false
  });

  const doSpawnFood = useCallback(() => {
    const { gridW, gridH, body, dotsEaten } = snakeRef.current;
    const occupied = new Set(body.map(p => `${p.x},${p.y}`));
    let newFoodPos = { x: -1, y: -1 };
    
    for (let i = 0; i < 200; i++) {
      const rx = Math.floor(Math.random() * gridW);
      const ry = Math.floor(Math.random() * gridH);
      if (!occupied.has(`${rx},${ry}`)) {
        newFoodPos = { x: rx, y: ry };
        break;
      }
    }

    if (newFoodPos.x === -1) {
      const available: {x: number, y: number}[] = [];
      for (let x = 0; x < gridW; x++) {
        for (let y = 0; y < gridH; y++) {
          if (!occupied.has(`${x},${y}`)) available.push({ x, y });
        }
      }
      if (available.length > 0) {
        newFoodPos = available[Math.floor(Math.random() * available.length)];
      }
    }

    if (newFoodPos.x !== -1) {
      const isMega = (dotsEaten + 1) % 6 === 0;
      snakeRef.current.food = { ...newFoodPos, isMega };
    } else {
      setGameState('gameover');
      gameStateRef.current = 'gameover';
    }
  }, []);

  const resetGame = (game: GameType) => {
    setScore(0);
    setGameState('playing');
    gameStateRef.current = 'playing';
    
    if (game === 'snake') {
      snakeRef.current = {
        ...snakeRef.current,
        body: [{ x: 12, y: 9 }, { x: 12, y: 10 }, { x: 12, y: 11 }],
        dir: { x: 0, y: -1 },
        nextDir: { x: 0, y: -1 },
        dotsEaten: 0,
        lastUpdate: 0,
        speed: 130
      };
      doSpawnFood();
    } else if (game === 'jump') {
      jumpRef.current = {
        playerY: 0,
        velocity: 0,
        obstacles: [{ x: 480, width: 20 }],
        frame: 0,
        isJumping: false
      };
    }
  };

  const handleJump = useCallback(() => {
    if (activeGameRef.current === 'jump' && !jumpRef.current.isJumping) {
      jumpRef.current.velocity = -12;
      jumpRef.current.isJumping = true;
    }
  }, []);

  const handleSnakeDir = useCallback((dir: { x: number, y: number }) => {
    const current = snakeRef.current.dir;
    if (dir.x !== -current.x || dir.y !== -current.y) {
      snakeRef.current.nextDir = dir;
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameStateRef.current !== 'playing') return;

      const keysToBlock = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '];
      if (keysToBlock.includes(e.key)) {
        e.preventDefault(); // FIX: Prevent page scroll
      }

      if (activeGameRef.current === 'snake') {
        switch(e.key) {
          case 'ArrowUp': case 'w': case 'W': handleSnakeDir({x: 0, y: -1}); break;
          case 'ArrowDown': case 's': case 'S': handleSnakeDir({x: 0, y: 1}); break;
          case 'ArrowLeft': case 'a': case 'A': handleSnakeDir({x: -1, y: 0}); break;
          case 'ArrowRight': case 'd': case 'D': handleSnakeDir({x: 1, y: 0}); break;
        }
      } else if (activeGameRef.current === 'jump') {
        if (e.key === ' ' || e.key === 'ArrowUp') handleJump();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSnakeDir, handleJump]);

  const loop = useCallback((time: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) {
        requestRef.current = requestAnimationFrame(loop);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (activeGameRef.current === 'snake' && gameStateRef.current === 'playing') {
      const { gridW, gridH, cellSize, food } = snakeRef.current;
      
      if (time - snakeRef.current.lastUpdate > snakeRef.current.speed) {
        snakeRef.current.dir = snakeRef.current.nextDir;
        const head = snakeRef.current.body[0];
        const newHead = {
          x: (head.x + snakeRef.current.dir.x + gridW) % gridW,
          y: (head.y + snakeRef.current.dir.y + gridH) % gridH,
        };

        if (snakeRef.current.body.some(b => b.x === newHead.x && b.y === newHead.y)) {
          setGameState('gameover');
          gameStateRef.current = 'gameover';
        } else {
          const isEating = newHead.x === food.x && newHead.y === food.y;
          const newBody = [newHead, ...snakeRef.current.body];
          
          if (isEating) {
            const points = food.isMega ? 50 : 10;
            setScore(s => s + points);
            snakeRef.current.dotsEaten += 1;
            snakeRef.current.speed = Math.max(40, snakeRef.current.speed - (food.isMega ? 2 : 0.6));
            snakeRef.current.body = newBody;
            doSpawnFood();
          } else {
            newBody.pop();
            snakeRef.current.body = newBody;
          }
        }
        snakeRef.current.lastUpdate = time;
      }

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      for(let i=0; i<=gridW; i++) { ctx.beginPath(); ctx.moveTo(i*cellSize, 0); ctx.lineTo(i*cellSize, gridH*cellSize); ctx.stroke(); }
      for(let i=0; i<=gridH; i++) { ctx.beginPath(); ctx.moveTo(0, i*cellSize); ctx.lineTo(gridW*cellSize, i*cellSize); ctx.stroke(); }

      const pulse = Math.sin(time / 150) * 3;
      if (food.isMega) {
        ctx.shadowBlur = 25 + pulse * 2;
        ctx.shadowColor = '#fbbf24';
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(food.x * cellSize + cellSize/2, food.y * cellSize + cellSize/2, 11 + pulse/2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(food.x * cellSize + cellSize/2 - 2, food.y * cellSize + cellSize/2 - 2, 3, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.shadowBlur = 15 + pulse;
        ctx.shadowColor = '#ef4444';
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(food.x * cellSize + cellSize/2, food.y * cellSize + cellSize/2, 7 + pulse/3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      snakeRef.current.body.forEach((b, i) => {
        const isHead = i === 0;
        ctx.fillStyle = isHead ? '#4ade80' : `rgba(74, 222, 128, ${0.8 - (i / (snakeRef.current.body.length + 15)) * 0.7})`;
        const size = isHead ? 19 : 17;
        const padding = (cellSize - size) / 2;
        const rx = b.x * cellSize + padding;
        const ry = b.y * cellSize + padding;
        
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(rx, ry, size, size, isHead ? 7 : 5);
        else ctx.rect(rx, ry, size, size);
        ctx.fill();

        if (isHead) {
          ctx.fillStyle = '#064e3b';
          const ex = rx + size/2;
          const ey = ry + size/2;
          const offset = 4;
          if (snakeRef.current.dir.x !== 0) {
            ctx.fillRect(ex + (snakeRef.current.dir.x * 4), ey - offset, 3, 3);
            ctx.fillRect(ex + (snakeRef.current.dir.x * 4), ey + offset, 3, 3);
          } else {
            ctx.fillRect(ex - offset, ey + (snakeRef.current.dir.y * 4), 3, 3);
            ctx.fillRect(ex + offset, ey + (snakeRef.current.dir.y * 4), 3, 3);
          }
        }
      });
    }

    if (activeGameRef.current === 'jump' && gameStateRef.current === 'playing') {
       jumpRef.current.velocity += 0.6;
       jumpRef.current.playerY += jumpRef.current.velocity;
       if (jumpRef.current.playerY > 0) { jumpRef.current.playerY = 0; jumpRef.current.velocity = 0; jumpRef.current.isJumping = false; }
       jumpRef.current.frame++;
       if (jumpRef.current.frame % 100 === 0) jumpRef.current.obstacles.push({ x: 480, width: 15 + Math.random() * 25 });
       jumpRef.current.obstacles = jumpRef.current.obstacles.map(o => ({ ...o, x: o.x - 5 })).filter(o => o.x > -60);
       
       ctx.strokeStyle = 'rgba(255,255,255,0.15)';
       ctx.beginPath(); ctx.moveTo(0, 310); ctx.lineTo(480, 310); ctx.stroke();
       ctx.fillStyle = '#38bdf8';
       ctx.shadowBlur = 15; ctx.shadowColor = '#38bdf8';
       ctx.fillRect(60, 280 + jumpRef.current.playerY, 30, 30);
       ctx.shadowBlur = 0;
       ctx.fillStyle = '#f43f5e';
       jumpRef.current.obstacles.forEach(o => {
         ctx.fillRect(o.x, 285, o.width, 25);
         if (o.x < 90 && o.x + o.width > 60 && jumpRef.current.playerY > -25) { setGameState('gameover'); gameStateRef.current = 'gameover'; }
       });
       setScore(s => s + 1);
    }

    requestRef.current = requestAnimationFrame(loop);
  }, [doSpawnFood]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(loop);
    return () => { if (requestRef.current !== null) cancelAnimationFrame(requestRef.current); };
  }, [loop]);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('arcade_high_score', score.toString());
    }
  }, [score, highScore]);

  return (
    <div className="w-full max-w-5xl mx-auto py-8 sm:py-12 px-2 sm:px-4">
      <div className="glass p-4 sm:p-6 md:p-12 rounded-[2rem] sm:rounded-[3.5rem] border-white/5 bg-slate-900/40 shadow-3xl flex flex-col items-center">
        
        {/* Header Information */}
        <div className="flex flex-col sm:flex-row justify-between w-full mb-6 sm:mb-10 items-start sm:items-center gap-4">
          <div className="text-left">
            <h3 className="text-xl sm:text-3xl font-black text-white italic uppercase tracking-tighter">Arena <span className="text-sky-400">Prime.</span></h3>
            <p className="text-[8px] sm:text-[10px] text-white/40 font-black uppercase tracking-widest">Enhanced Simulation Engine</p>
          </div>
          <div className="flex gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
             <div className="text-right">
                <div className="text-[8px] sm:text-[9px] font-black text-sky-400 uppercase tracking-widest">Score</div>
                <div className="text-xl sm:text-3xl font-black text-white leading-none">{score}</div>
             </div>
             <div className="text-right">
                <div className="text-[8px] sm:text-[9px] font-black text-white/30 uppercase tracking-widest">Best</div>
                <div className="text-xl sm:text-3xl font-black text-white/30 leading-none">{highScore}</div>
             </div>
          </div>
        </div>

        {/* Console Viewport - Responsively Sized */}
        <div className="relative w-full max-w-[480px] bg-slate-950 rounded-[1.5rem] sm:rounded-[2.5rem] border-[6px] sm:border-[12px] border-slate-800 shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden mx-auto transition-all duration-500 hover:border-slate-700 aspect-[4/3]">
          {activeGame === 'none' ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-10 p-4 sm:p-8">
               <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full">
                  <button onClick={() => { setActiveGame('snake'); resetGame('snake'); }} className="group relative glass p-4 sm:p-8 rounded-2xl sm:rounded-3xl border-white/10 hover:border-green-500/50 transition-all text-center bg-white/5">
                     <div className="text-3xl sm:text-5xl mb-2 sm:mb-4 group-hover:scale-125 transition-transform duration-500">🐍</div>
                     <div className="text-[9px] sm:text-[11px] font-black text-white uppercase tracking-[0.2em]">Mega Snake</div>
                  </button>
                  <button onClick={() => { setActiveGame('jump'); resetGame('jump'); }} className="group relative glass p-4 sm:p-8 rounded-2xl sm:rounded-3xl border-white/10 hover:border-sky-500/50 transition-all text-center bg-white/5">
                     <div className="text-3xl sm:text-5xl mb-2 sm:mb-4 group-hover:scale-125 transition-transform duration-500">🏃‍♂️</div>
                     <div className="text-[9px] sm:text-[11px] font-black text-white uppercase tracking-[0.2em]">Neon Rush</div>
                  </button>
               </div>
               <div className="space-y-1 sm:space-y-2 text-center">
                 <p className="text-[8px] sm:text-[10px] text-white/40 font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">Initialize Connection</p>
                 <div className="flex gap-1.5 sm:gap-2 justify-center">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-sky-500 rounded-full animate-ping"></div>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-sky-500/50 rounded-full"></div>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-sky-500/20 rounded-full"></div>
                 </div>
               </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <canvas 
                ref={canvasRef} 
                width={480} 
                height={360} 
                className="w-full h-full object-contain cursor-none touch-none"
                onClick={activeGame === 'jump' ? handleJump : undefined}
              />
              
              {gameState === 'gameover' && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 text-center animate-in zoom-in duration-500 z-50">
                   <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 border border-red-500/50">
                      <span className="text-2xl sm:text-3xl">⚠️</span>
                   </div>
                   <h4 className="text-3xl sm:text-5xl font-black text-red-500 italic uppercase mb-1 sm:mb-2 tracking-tighter">System Error</h4>
                   <p className="text-white/40 font-black uppercase text-[8px] sm:text-[10px] tracking-widest mb-6 sm:mb-10">Data Integrity Corrupted | Score: {score}</p>
                   <button onClick={() => resetGame(activeGame)} className="w-full max-w-[180px] sm:max-w-[200px] py-4 sm:py-5 bg-sky-500 text-white rounded-xl sm:rounded-2xl font-black uppercase text-[10px] sm:text-xs tracking-[0.2em] shadow-[0_15px_30px_rgba(56,189,248,0.3)] active:scale-95 transition-all">Reboot Core</button>
                   <button onClick={() => setActiveGame('none')} className="mt-4 sm:mt-6 text-white/20 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] hover:text-white transition-colors">Terminate Process</button>
                </div>
              )}

              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex items-center gap-2 sm:gap-4 z-40">
                 <button onClick={() => setActiveGame('none')} className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors hover:bg-red-500/20 group">
                    <span className="group-hover:rotate-90 transition-transform">✕</span>
                 </button>
                 {(score > 0 && (score / 10) % 6 === 5) && (
                   <div className="px-2 py-0.5 sm:px-3 sm:py-1 bg-amber-500 text-black text-[7px] sm:text-[9px] font-black rounded-md sm:rounded-lg animate-pulse uppercase">Mega Signal</div>
                 )}
              </div>
            </div>
          )}
        </div>

        {/* Tactical Controls - Responsive Grid */}
        {activeGame !== 'none' && (
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 w-full max-w-[480px] gap-8 sm:gap-16 items-center">
            {/* DPAD */}
            <div className="flex flex-col items-center order-2 sm:order-1">
              <div className="grid grid-cols-3 gap-2">
                <div />
                <button 
                  onMouseDown={(e) => { e.preventDefault(); handleSnakeDir({x:0, y:-1}); }} 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center text-white active:bg-sky-500 shadow-xl border border-white/5 touch-none"
                >↑</button>
                <div />
                <button 
                  onMouseDown={(e) => { e.preventDefault(); handleSnakeDir({x:-1, y:0}); }} 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center text-white active:bg-sky-500 shadow-xl border border-white/5 touch-none"
                >←</button>
                <button 
                  onMouseDown={(e) => { e.preventDefault(); handleSnakeDir({x:0, y:1}); }} 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center text-white active:bg-sky-500 shadow-xl border border-white/5 touch-none"
                >↓</button>
                <button 
                  onMouseDown={(e) => { e.preventDefault(); handleSnakeDir({x:1, y:0}); }} 
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center text-white active:bg-sky-500 shadow-xl border border-white/5 touch-none"
                >→</button>
              </div>
              <p className="mt-3 text-[8px] sm:text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Vector Control</p>
            </div>

            {/* ACTION BUTTON */}
            <div className="flex flex-col items-center justify-center order-1 sm:order-2">
              <button 
                onMouseDown={(e) => { e.preventDefault(); handleJump(); }}
                className="w-20 h-20 sm:w-28 sm:h-28 bg-sky-500/10 border-[4px] sm:border-[6px] border-sky-500/30 rounded-full flex items-center justify-center text-sky-400 font-black text-[10px] sm:text-xs uppercase shadow-[0_0_40px_rgba(56,189,248,0.2)] active:scale-90 active:bg-sky-500 active:text-white transition-all group touch-none"
              >
                <span className="group-active:animate-ping">TRIGGER</span>
              </button>
              <p className="mt-4 text-[8px] sm:text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Main Reactor</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameSimulator;
