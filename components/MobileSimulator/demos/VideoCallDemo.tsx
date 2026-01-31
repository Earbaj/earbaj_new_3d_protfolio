import React, { useState } from 'react';

export const VideoCallDemo = ({ onExit }: { onExit: () => void }) => {
  const [step, setStep] = useState<'login' | 'dashboard'>('login');

  if (step === 'login') {
    return (
      <div className="h-full w-full bg-gradient-to-b from-[#4A90E2] to-[#9B51E0] flex flex-col items-center justify-center p-4 font-sans relative">
        
        {/* Android-style Status Bar */}
        <div className="absolute top-2 left-0 w-full px-4 flex justify-between items-center text-white/90 text-[10px]">
          <span className="font-medium">4:52 PM</span>
          <div className="flex gap-1.5 items-center">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21L1 10h22L12 21z"/></svg>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2.3L5 20h16l-8-17.7z"/></svg>
            <div className="border border-white/50 px-0.5 rounded-sm text-[7px] leading-none">89</div>
          </div>
        </div>

        {/* Compact Login Card */}
        <div 
          className="bg-[#F5F5F7] rounded-[24px] shadow-2xl flex flex-col items-center overflow-hidden"
          style={{ width: '230px', padding: '24px 20px' }} // Fixed width for better fit
        >
          {/* Logo Icon - Smaller */}
          <div className="mb-4">
            <svg className="w-12 h-12 text-[#2196F3]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
            </svg>
          </div>

          <h2 className="text-lg font-bold text-[#2D2D2D] mb-5 tracking-tight">Welcome Back</h2>

          <div className="w-full space-y-3 mb-6">
            {/* Email Input - Compact */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Email" 
                className="block w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white text-[11px] focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400"
              />
            </div>

            {/* Password Input - Compact */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <input 
                type="password" 
                placeholder="Password" 
                className="block w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white text-[11px] focus:outline-none focus:ring-1 focus:ring-blue-400 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Login Button - Adjusted size */}
          <button 
            onClick={() => setStep('dashboard')}
            className="w-full bg-[#1E88E5] text-white py-2.5 rounded-lg font-bold text-xs shadow-md active:scale-95 transition-all mb-5"
          >
            Login
          </button>

          <p className="text-[#6D54A5] text-[9px] font-bold">
            Don't have an account? <span className="text-[#1E88E5] cursor-pointer hover:underline">Sign Up</span>
          </p>
        </div>

        {/* Android Navigation Bar */}
        <div className="absolute bottom-4 left-0 w-full flex justify-center gap-12 text-white/40">
           <div className="w-3.5 h-3.5 rounded-sm border-[1.5px] border-current"></div>
           <div className="w-4 h-4 rounded-full border-[1.5px] border-current"></div>
           <div className="w-0 h-0 border-y-[7px] border-y-transparent border-r-[11px] border-r-current"></div>
        </div>
      </div>
    );
  } else if(step === 'dashboard') {
    return (
        // Dashboard Screen (Screenshot 1)
        <div className="h-full bg-white flex flex-col font-sans">
           {/* Header Area */}
           <div className="bg-gradient-to-r from-blue-500 to-blue-700 pt-12 pb-10 px-6 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
              <div className="flex justify-between items-center mb-8 relative z-10">
                <h1 className="text-sm font-black text-white tracking-tight uppercase">VideoCall App</h1>
                <button onClick={() => setStep('login')} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                </button>
              </div>

              <div className="flex items-center gap-4 relative z-10">
                 <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-white text-blue-600 font-black text-xl shadow-lg">E</div>
                 <div className="text-left">
                    <div className="text-[10px] font-medium text-white/70">Welcome back,</div>
                    <div className="text-base font-black text-white leading-tight">earbaj</div>
                    <div className="text-[9px] font-medium text-white/70">earbaj@test.com</div>
                 </div>
              </div>
           </div>

           {/* User List Area */}
           <div className="flex-1 px-6 pt-8">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-sm font-black text-slate-800 tracking-tight">Explore Users</h2>
                 <span className="text-[10px] font-black text-blue-500">View All</span>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg shadow-slate-100 border border-slate-50 flex items-center gap-4">
                 <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-black text-lg">S</div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-300 rounded-full border-2 border-white"></div>
                 </div>
                 <div className="flex-1 text-left">
                    <div className="text-xs font-black text-slate-800">saria</div>
                    <div className="text-[9px] font-medium text-slate-400">saria@test.com</div>
                 </div>
                 <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-500">
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                    </button>
                 </div>
              </div>
           </div>
        </div>
      );
  }

  return (
    <div className="h-full bg-white flex items-center justify-center">
       <p className="text-xs font-bold text-gray-400">Dashboard Loaded</p>
       <button onClick={onExit} className="ml-2 text-blue-500 text-[10px]">Exit</button>
    </div>
  );
};