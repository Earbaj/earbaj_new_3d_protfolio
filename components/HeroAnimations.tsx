
import React, { useState, useEffect } from 'react';

const HeroAnimation: React.FC = () => {
  const [animationsRunning, setAnimationsRunning] = useState(true);
  const [visibleLines, setVisibleLines] = useState<number>(0);

  const toggleAnimations = () => setAnimationsRunning(!animationsRunning);

  // Staggered line reveal for the terminal
  useEffect(() => {
    if (animationsRunning) {
      const interval = setInterval(() => {
        setVisibleLines((prev) => (prev < 12 ? prev + 1 : prev));
      }, 600);
      return () => clearInterval(interval);
    } else {
      setVisibleLines(0);
    }
  }, [animationsRunning]);

  return (
    <div 
      onClick={toggleAnimations}
      className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-xl mx-auto cursor-pointer group"
    >
      {/* Background Radiance */}
      <div className={`absolute -inset-4 sm:-inset-10 bg-sky-500/10 rounded-[3rem] blur-[60px] sm:blur-[100px] transition-all duration-1000 ${animationsRunning ? 'animate-pulse opacity-100' : 'opacity-20'}`}></div>

      {/* FLOATING ICONS - Responsive Positioning */}
      {/* Flutter Icon */}
      {/* <div className={`absolute -top-6 -left-6 sm:-top-10 sm:-left-10 z-30 w-12 h-12 sm:w-20 sm:h-20 ${animationsRunning ? 'animate-float' : ''}`}>
        <div className="w-full h-full p-2.5 sm:p-4 bg-slate-950/90 border-2 border-sky-400 rounded-2xl sm:rounded-[2rem] flex items-center justify-center shadow-xl">
          <svg className="w-full h-full text-sky-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.314 0L2.3 12L6 15.7L21.684.013h-7.357zm.014 11.072L7.857 17.53L11.483 24H18.8l-4.471-7.072l4.472-5.856h-4.473z" />
          </svg>
        </div>
      </div> */}

      {/* Node.js Icon */}
      {/* <div className={`absolute -top-8 -right-4 sm:-top-12 sm:-right-8 z-30 w-10 h-10 sm:w-16 sm:h-16 ${animationsRunning ? 'animate-float' : ''}`} style={{animationDelay: '1s'}}>
        <div className="w-full h-full p-2 sm:p-3 bg-slate-950/90 border-2 border-emerald-400 rounded-2xl sm:rounded-[1.5rem] flex items-center justify-center shadow-xl">
          <svg className="w-full h-full text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.992 0L3.132 5.122v10.237L11.992 24l8.868-5.117v-10.24L11.992 0zm5.66 17.182l-5.66 3.268l-5.656-3.268v-6.536l5.656-3.268l5.66 3.268v6.536z" />
          </svg>
        </div>
      </div> */}

      {/* Docker Icon */}
      {/* <div className={`absolute -bottom-4 -right-6 sm:-bottom-8 sm:-right-10 z-30 w-12 h-12 sm:w-20 sm:h-20 ${animationsRunning ? 'animate-float' : ''}`} style={{animationDelay: '2s'}}>
        <div className="w-full h-full p-2.5 sm:p-4 bg-slate-950/90 border-2 border-blue-400 rounded-2xl sm:rounded-[1.8rem] flex items-center justify-center shadow-xl">
          <svg className="w-full h-full text-blue-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.983 11.078h2.119c.695 0 1.259.564 1.259 1.259 0 .694-.564 1.256-1.259 1.256h-2.119a1.255 1.255 0 0 1-1.256-1.256c0-.695.564-1.259 1.256-1.259zm-2.429 0h2.117a1.256 1.256 0 0 1 1.256 1.259 1.256 1.256 0 0 1-1.256 1.256h-2.117a1.256 1.256 0 0 1-1.259-1.256c0-.695.564-1.259 1.259-1.259zm-2.429 0h2.119a1.255 1.255 0 0 1 1.256 1.259c0 .694-.564 1.256-1.256 1.256h-2.119a1.258 1.258 0 0 1-1.259-1.256c0-.695.564-1.259 1.259-1.259zm-2.429 0h2.119c.695 0 1.259.564 1.259 1.259 0 .694-.564 1.256-1.259 1.256h-2.119a1.258 1.258 0 0 1-1.259-1.256c0-.695.564-1.259 1.259-1.259zm0-2.429h2.119c.695 0 1.259.564 1.259 1.259 0 .695-.564 1.259-1.259 1.259h-2.119a1.258 1.258 0 0 1-1.259-1.259c0-.695.564-1.259 1.259-1.259zm2.429 0h2.117a1.256 1.256 0 0 1 1.256 1.259 1.256 1.256 0 0 1-1.256 1.259h-2.117a1.256 1.256 0 0 1-1.259-1.259c0-.695.564-1.259 1.259-1.259zm2.429 0h2.119c.695 0 1.259.564 1.259 1.259 0 .695-.564 1.259-1.259 1.259h-2.119a1.255 1.255 0 0 1-1.256-1.259c0-.695.564-1.259 1.256-1.259zm-2.429-2.427h2.117a1.256 1.256 0 0 1 1.256 1.259 1.256 1.256 0 0 1-1.256 1.259h-2.117a1.256 1.256 0 0 1-1.259-1.259c0-.695.564-1.259 1.259-1.259zm0-2.429h2.117a1.256 1.256 0 0 1 1.256 1.259 1.256 1.256 0 0 1-1.256 1.259h-2.117a1.256 1.256 0 0 1-1.259-1.259c0-.695.564-1.259 1.259-1.259zM23.988 12.03c.006.182.012.364.012.546 0 4.274-2.522 7.846-6.141 9.413-.48.203-1.011.314-1.571.314-1.59 0-2.993-.91-3.692-2.254-.065-.123-.122-.249-.172-.379l-1.042-2.731c-.131-.341-.444-.56-.788-.56H6.126c-.722 0-1.306-.583-1.306-1.306V7.086c0-.723.584-1.306 1.306-1.306h6.612c.722 0 1.306.583 1.306 1.306v3.993c0 .723.584 1.306 1.306 1.306h2.721c1.339 0 2.593.535 3.518 1.48a4.912 4.912 0 0 1 1.257 3.328c0 .285-.024.564-.07.838z" />
          </svg>
        </div>
      </div> */}

      {/* TERMINAL SHELL */}
      <div className="relative z-10 p-3 sm:p-6 bg-slate-900/90 rounded-[2rem] sm:rounded-[3rem] border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 px-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          <div className="ml-2 text-[9px] sm:text-[11px] font-mono text-white/30 uppercase tracking-widest font-black">
            earbaj_saria@dev-workstation
          </div>
        </div>

        {/* Console Content */}
        <div className="bg-black/80 rounded-2xl p-4 sm:p-6 font-mono text-[9px] sm:text-xs leading-relaxed min-h-[250px] sm:min-h-[350px]">
          {visibleLines >= 1 && (
            <div className="flex gap-2 mb-1">
              <span className="text-sky-400">❯</span>
              <span className="text-white">flutter doctor</span>
            </div>
          )}
          {visibleLines >= 2 && (
            <div className="text-white/60 mb-3 animate-in fade-in slide-in-from-left-2 duration-300">
              [✓] Flutter (Channel stable, 3.16.0)<br/>
              [✓] Android toolchain - develop for Android devices<br/>
              [✓] Xcode - develop for iOS and macOS<br/>
              [✓] VS Code (version 1.84.2)
            </div>
          )}

          {visibleLines >= 3 && (
            <div className="flex gap-2 mb-1">
              <span className="text-sky-400">❯</span>
              <span className="text-white">docker ps</span>
            </div>
          )}
          {visibleLines >= 4 && (
            <div className="text-blue-400 font-bold mb-3 animate-in fade-in slide-in-from-left-2 duration-300">
              <div className="grid grid-cols-3 gap-2 border-b border-white/10 pb-1 mb-1 opacity-40">
                <span>CONTAINER</span>
                <span>IMAGE</span>
                <span>STATUS</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span>e1b2c3d4f5</span>
                <span>node:20</span>
                <span className="text-emerald-400">Up 2h</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span>f9a8b7c6d5</span>
                <span>mongo:6</span>
                <span className="text-emerald-400">Up 2h</span>
              </div>
            </div>
          )}

          {visibleLines >= 5 && (
            <div className="flex gap-2 mb-1">
              <span className="text-sky-400">❯</span>
              <span className="text-white">node --version</span>
            </div>
          )}
          {visibleLines >= 6 && (
            <div className="text-emerald-400 mb-3 animate-in fade-in slide-in-from-left-2 duration-300">
              v20.10.0
            </div>
          )}

          {visibleLines >= 7 && (
            <div className="flex gap-2 mb-1">
              <span className="text-sky-400">❯</span>
              <span className="text-white">flutter build apk --release</span>
            </div>
          )}
          {visibleLines >= 8 && (
            <div className="text-white/60 mb-1 animate-in fade-in duration-300">
              Building with sound null safety...<br/>
              Running Gradle task 'assembleRelease'...
            </div>
          )}
          {visibleLines >= 9 && (
            <div className="text-emerald-400 font-black mb-3 animate-in fade-in duration-300">
              ✓ Built build/app/outputs/flutter-apk/app-release.apk (15.4MB).
            </div>
          )}

          {animationsRunning && (
            <span className="inline-block w-2 h-4 bg-sky-400 animate-pulse ml-1 align-middle"></span>
          )}
        </div>
        
        {/* Status Bar */}
        <div className="mt-4 flex justify-between items-center px-2">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${animationsRunning ? 'bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]' : 'bg-rose-500'}`}></div>
            <span className={`text-[8px] sm:text-[10px] font-black uppercase tracking-widest ${animationsRunning ? 'text-emerald-400' : 'text-rose-400'}`}>
              {animationsRunning ? 'Production Live' : 'Engine Idle'}
            </span>
          </div>
          <div className="text-[8px] sm:text-[10px] text-white/20 font-mono italic">
            UTF-8 | 400.0 MB
          </div>
        </div>
      </div>

      {/* Mobile Interaction Hint */}
      <div className="mt-6 flex justify-center lg:hidden">
        <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-white/40 font-black uppercase tracking-widest">
          Tap to {animationsRunning ? 'Pause' : 'Start'} Console
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
