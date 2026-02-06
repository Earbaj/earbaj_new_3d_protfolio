
// import React, { useState, useRef, useEffect } from 'react';

// interface Log {
//   text: string;
//   type: 'info' | 'success' | 'request' | 'response';
//   time: string;
// }


// // ==================== 1. PURE UI COMPONENT ====================
// interface TerminalUIProps {
//   title: string;
//   logs: Log[];
//   isServerRunning: boolean;
//   onStartServer: () => void;
//   onTestGet: () => void;
//   onTestPost: () => void;
// }

// const TerminalUI: React.FC<TerminalUIProps> = ({
//   title,
//   logs,
//   isServerRunning,
//   onStartServer,
//   onTestGet,
//   onTestPost
// }) => {
//   const logEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [logs]);

//   return (
//     <div className="w-full h-[320px] sm:h-[400px] md:h-[500px] bg-[#0c1117] rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-mono text-left">
//       {/* Terminal Header */}
//       <div className="bg-[#161b22] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-white/5">
//         <div className="flex gap-1.5 sm:gap-2">
//           <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50"></div>
//           <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50"></div>
//           <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50"></div>
//         </div>
//         <div className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-widest font-black truncate max-w-[150px] sm:max-w-none">
//           {title} • Backend Console
//         </div>
//       </div>

//       {/* Terminal Content */}
//       <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2 sm:space-y-3 no-scrollbar text-[9px] sm:text-xs">
//         {logs.length === 0 ? (
//           <div className="h-full flex flex-col items-center justify-center opacity-30 italic">
//             <span className="text-2xl sm:text-3xl mb-2 sm:mb-4">⌨️</span>
//             <p className="text-[10px] sm:text-xs">Ready to boot...</p>
//           </div>
//         ) : (
//           logs.map((log, i) => (
//             <div key={i} className="animate-in slide-in-from-left-2 duration-200">
//               <span className="text-white/20 mr-2 sm:mr-3">[{log.time}]</span>
//               <span className={`font-black uppercase mr-1 sm:mr-2 tracking-tighter ${
//                 log.type === 'info' ? 'text-slate-400' :
//                 log.type === 'success' ? 'text-green-400' :
//                 log.type === 'request' ? 'text-blue-400' :
//                 'text-purple-400'
//               }`}>
//                 {log.type === 'request' ? '>>' : log.type === 'response' ? '<<' : '::'}
//               </span>
//               <span className="text-white/90 break-all">{log.text}</span>
//             </div>
//           ))
//         )}
//         <div ref={logEndRef} />
//       </div>

//       {/* Control Panel */}
//       <div className="bg-[#0d1117] p-4 sm:p-6 border-t border-white/5 flex gap-2 sm:gap-3">
//         {!isServerRunning ? (
//           <button 
//             onClick={onStartServer}
//             className="flex-1 py-3 sm:py-4 bg-sky-500 text-white font-black text-[9px] sm:text-[10px] uppercase tracking-widest rounded-xl shadow-lg shadow-sky-500/20 active:scale-95 transition-all hover:bg-sky-600"
//           >
//             npm start server
//           </button>
//         ) : (
//           <>
//             <button 
//               onClick={onTestGet}
//               className="flex-1 py-3 bg-white/5 border border-white/10 text-white font-black text-[8px] sm:text-[9px] uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all active:scale-95"
//             >
//               Test GET
//             </button>
//             <button 
//               onClick={onTestPost}
//               className="flex-1 py-3 bg-white/5 border border-white/10 text-white font-black text-[8px] sm:text-[9px] uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all active:scale-95"
//             >
//               Test POST
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TerminalUI;

import React, { useState, useRef, useEffect } from 'react';

interface Log {
  text: string;
  type: 'command' | 'info' | 'success' | 'request' | 'response' | 'error';
  time: string;
}

type ThemeType = 'sky' | 'emerald' | 'violet';

interface TerminalUIProps {
  title: string;
  logs: Log[];
  isServerRunning: boolean;
  onStartServer: () => void;
  onTestGet: () => void;
  onTestPost: () => void;
  onTestPut?: () => void | null;
  onTestDelete?: () => void | null;
}

const TerminalUI: React.FC<TerminalUIProps> = ({
  title,
  logs,
  isServerRunning,
  onStartServer,
  onTestGet,
  onTestPost,
  onTestPut,
  onTestDelete
}) => {
  const logEndRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<ThemeType>('sky');

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [logs]);

  const themes = {
    sky: { accent: 'text-sky-400', border: 'border-sky-500/20', bg: 'bg-[#0a0c12]', cursor: 'bg-sky-400' },
    emerald: { accent: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-[#0a0f0a]', cursor: 'bg-emerald-400' },
    violet: { accent: 'text-violet-400', border: 'border-violet-500/20', bg: 'bg-[#0f0a14]', cursor: 'bg-violet-400' },
  };

  const current = themes[theme];

  return (
    <div className="w-full max-w-2xl mx-auto h-auto aspect-[1/1] sm:aspect-[6/5] px-4 sm:px-0 font-mono selection:bg-white/20">
      <div className={`relative z-10 ${current.bg} rounded-xl sm:rounded-[1.5rem] border ${current.border} shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl h-full`}>

        {/* --- TOP BAR (Responsive Title) --- */}
        <div className="bg-white/[0.03] border-b border-white/10 px-3 sm:px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
              <span className="text-[8px] sm:text-[10px] text-white/40 font-black uppercase tracking-tighter sm:tracking-[0.1em] truncate max-w-[120px] block">
                earbaj@N7x0WU <span className={current.accent}>~</span> console
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              const keys = Object.keys(themes) as ThemeType[];
              setTheme(keys[(keys.indexOf(theme) + 1) % keys.length]);
            }}
            className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all shrink-0"
          >
            <span className="text-[8px] text-white/50 font-bold uppercase">Color</span>
            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${current.cursor}`}></div>
          </button>
        </div>

        {/* --- TERMINAL CONTENT (Auto-Scrollable) --- */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 no-scrollbar">

          {logs.length > 0 && (
            <div className="mb-4 sm:mb-6 border-b border-white/5 pb-3 sm:pb-4 opacity-30">
              <p className="text-[8px] sm:text-[10px]">Session started: {new Date().toLocaleTimeString()}</p>
            </div>
          )}

          <div className="space-y-1.5 sm:space-y-2">
            {logs.map((log, i) => (
              <div key={i} className="flex items-start font-mono group animate-in fade-in slide-in-from-left-1">

                {/* Time (Hidden on very small devices to save space) */}
                <span className="hidden xs:inline-block text-[8px] sm:text-[9px] text-white/20 w-12 sm:w-16 shrink-0 mt-0.5 tabular-nums">
                  {log.time}
                </span>

                {/* Arrow Column */}
                <span className={`w-4 sm:w-6 shrink-0 font-black text-[10px] sm:text-xs ${log.type === 'command' ? current.accent :
                    log.type === 'request' ? 'text-blue-400' :
                      log.type === 'response' ? 'text-purple-400' :
                        log.type === 'success' ? 'text-emerald-400' : 'text-white/20'
                  }`}>
                  {log.type === 'command' ? '❯' :
                    log.type === 'request' ? '>>' :
                      log.type === 'response' ? '<<' : '::'}
                </span>

                {/* Text Content */}
                <span className={`text-[10px] sm:text-xs leading-relaxed break-words whitespace-pre-wrap flex-1 ${log.type === 'command' ? 'text-white font-bold' :
                    log.type === 'success' ? 'text-emerald-400/90' :
                      log.type === 'error' ? 'text-rose-400' :
                        log.type === 'request' ? 'text-blue-100/80' :
                          log.type === 'response' ? 'text-purple-100/80' : 'text-white/60'
                  }`}>
                  {log.text}
                </span>
              </div>
            ))}

            {/* Blinking Cursor */}
            <div className="flex items-center pt-1 sm:pt-2">
              <span className="hidden xs:inline-block w-12 sm:w-16"></span>
              <span className={`${current.accent} w-4 sm:w-6 font-black text-xs`}>❯</span>
              <div className={`w-1.5 h-3.5 sm:w-2 sm:h-4 ${current.cursor} animate-pulse shadow-lg`}></div>
            </div>
          </div>

          <div ref={logEndRef} className="h-4" />
        </div>

        {/* --- FOOTER (Responsive Grid) --- */}
        <div className="p-3 sm:p-4 bg-black/60 border-t border-white/10 flex flex-col gap-2 sm:gap-3 mt-auto">
          {!isServerRunning ? (
            <button
              onClick={onStartServer}
              className={`w-full py-3 sm:py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all active:scale-95`}
            >
              NPM START SERVER
            </button>
          ) : (
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button
                onClick={onTestGet}
                className="py-2.5 sm:py-3 bg-white/5 border border-white/10 text-white/60 font-black text-[8px] sm:text-[9px] uppercase tracking-widest rounded-xl hover:bg-white/10 hover:text-white transition-all active:scale-95"
              >
                GET API
              </button>
              <button
                onClick={onTestPost}
                className="py-2.5 sm:py-3 bg-white/5 border border-white/10 text-white/60 font-black text-[8px] sm:text-[9px] uppercase tracking-widest rounded-xl hover:bg-white/10 hover:text-white transition-all active:scale-95"
              >
                POST API
              </button>

              {onTestPut && (
                <button
                  onClick={onTestPut}
                  className="py-2.5 sm:py-3 bg-white/5 border border-white/10 text-white/60 font-black text-[8px] sm:text-[9px] uppercase tracking-widest rounded-xl hover:bg-white/10 hover:text-white transition-all active:scale-95"
                >
                  PUT API
                </button>
              )}
              {onTestDelete && (
                <button
                  onClick={onTestDelete}
                  className="py-2.5 sm:py-3 bg-white/5 border border-white/10 text-white/60 font-black text-[8px] sm:text-[9px] uppercase tracking-widest rounded-xl hover:bg-white/10 hover:text-white transition-all active:scale-95"
                >
                  Delete API
                </button>
              )}
            </div>
          )}

          {/* Status Bar */}
          <div className="flex justify-between items-center px-1">
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${isServerRunning ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
              <span className="text-[7px] sm:text-[8px] text-white/30 font-bold uppercase tracking-widest">
                {isServerRunning ? 'Online' : 'Offline'}
              </span>
            </div>
            <span className="text-[10px] sm:text-[10px] text-white font-mono">localhost:5000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalUI;