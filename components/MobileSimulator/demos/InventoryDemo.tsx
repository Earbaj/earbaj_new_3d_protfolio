import React, { useState } from 'react';
import { DemoHeader } from '../../DemoHeader';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export const InventoryDemo = () => {
  const [step, setStep] = useState<'login' | 'dashboard'>('login');

  if (step === 'login') {
    return (
      <div className="h-full w-full bg-white from-[#4A90E2] to-[#9B51E0] flex flex-col items-center justify-center p-4 font-sans relative">
        
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
          <div className="mb-2">
            <Inventory2Icon className="text-blue-500 w-40 h-40 hover:text-blue-700 transition-colors" />
          </div>

          <h2 className="text-lg font-bold text-blue-500 mb-5 tracking-tight">Inventory Management</h2>

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
  }

  return (
    <div className="h-full flex flex-col bg-slate-50">
      <DemoHeader title="Inventory Admin" color="#22c55e" />
      <div className="p-4 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-left">
          <div className="text-xl font-black text-green-500">124</div>
          <div className="text-[8px] font-black uppercase text-slate-400">Products</div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-left">
          <div className="text-xl font-black text-orange-400">12</div>
          <div className="text-[8px] font-black uppercase text-slate-400">Low Stock</div>
        </div>
      </div>
      <button 
        onClick={() => setStep('login')} 
        className="mt-auto p-4 text-slate-400 text-[10px] text-center uppercase font-black hover:text-slate-600"
      >
        Exit Demo
      </button>
    </div>
  );
};