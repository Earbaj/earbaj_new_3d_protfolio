import React, { useState } from 'react';

export const VideoCallDemo = ({ onExit }: { onExit: () => void }) => {
  const [step, setStep] = useState<'login' | 'dashboard'>('login');

  if (step === 'login') {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 bg-slate-100 font-sans text-left">
         <div className="w-full bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-center">
            {/* ... Login UI Code ... */}
            <button onClick={() => setStep('dashboard')} className="w-full py-4 bg-blue-500 text-white font-black rounded-lg">Login</button>
         </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white flex flex-col font-sans">
       {/* ... Dashboard UI Code ... */}
       <button onClick={onExit} className="...">Logout</button>
    </div>
  );
};