import React, { useState } from 'react';
import { DemoHeader } from '../../DemoHeader';

export const InventoryDemo = () => {
  const [step, setStep] = useState<'login' | 'dashboard'>('login');

  if (step === 'login') {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 bg-white">
        <button 
          onClick={() => setStep('dashboard')} 
          className="w-full py-4 bg-green-500 text-white rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl active:scale-95 transition-transform"
        >
          Inventory Log In
        </button>
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