
import React, { useState, useRef, useEffect } from 'react';

interface Log {
  text: string;
  type: 'info' | 'success' | 'request' | 'response';
  time: string;
}


// ==================== 1. PURE UI COMPONENT ====================
interface TerminalUIProps {
  title: string;
  logs: Log[];
  isServerRunning: boolean;
  onStartServer: () => void;
  onTestGet: () => void;
  onTestPost: () => void;
}

const TerminalUI: React.FC<TerminalUIProps> = ({
  title,
  logs,
  isServerRunning,
  onStartServer,
  onTestGet,
  onTestPost
}) => {
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="w-full h-[320px] sm:h-[400px] md:h-[500px] bg-[#0c1117] rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-mono text-left">
      {/* Terminal Header */}
      <div className="bg-[#161b22] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-1.5 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50"></div>
        </div>
        <div className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-widest font-black truncate max-w-[150px] sm:max-w-none">
          {title} • Backend Console
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2 sm:space-y-3 no-scrollbar text-[9px] sm:text-xs">
        {logs.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center opacity-30 italic">
            <span className="text-2xl sm:text-3xl mb-2 sm:mb-4">⌨️</span>
            <p className="text-[10px] sm:text-xs">Ready to boot...</p>
          </div>
        ) : (
          logs.map((log, i) => (
            <div key={i} className="animate-in slide-in-from-left-2 duration-200">
              <span className="text-white/20 mr-2 sm:mr-3">[{log.time}]</span>
              <span className={`font-black uppercase mr-1 sm:mr-2 tracking-tighter ${
                log.type === 'info' ? 'text-slate-400' :
                log.type === 'success' ? 'text-green-400' :
                log.type === 'request' ? 'text-blue-400' :
                'text-purple-400'
              }`}>
                {log.type === 'request' ? '>>' : log.type === 'response' ? '<<' : '::'}
              </span>
              <span className="text-white/90 break-all">{log.text}</span>
            </div>
          ))
        )}
        <div ref={logEndRef} />
      </div>

      {/* Control Panel */}
      <div className="bg-[#0d1117] p-4 sm:p-6 border-t border-white/5 flex gap-2 sm:gap-3">
        {!isServerRunning ? (
          <button 
            onClick={onStartServer}
            className="flex-1 py-3 sm:py-4 bg-sky-500 text-white font-black text-[9px] sm:text-[10px] uppercase tracking-widest rounded-xl shadow-lg shadow-sky-500/20 active:scale-95 transition-all hover:bg-sky-600"
          >
            npm start server
          </button>
        ) : (
          <>
            <button 
              onClick={onTestGet}
              className="flex-1 py-3 bg-white/5 border border-white/10 text-white font-black text-[8px] sm:text-[9px] uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all active:scale-95"
            >
              Test GET
            </button>
            <button 
              onClick={onTestPost}
              className="flex-1 py-3 bg-white/5 border border-white/10 text-white font-black text-[8px] sm:text-[9px] uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all active:scale-95"
            >
              Test POST
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TerminalUI;