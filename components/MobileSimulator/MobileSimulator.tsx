
// import React, { useState, useEffect, useRef } from 'react';
// import { Project } from '../types';

// interface MobileSimulatorProps {
//   activeProject: Project;
// }

// // Sub-screens for various Demos
// type InventoryStep = 'login' | 'dashboard' | 'items';
// type TicketingStep = 'login' | 'home' | 'tickets' | 'profile';
// type DoctorStep = 'home' | 'details' | 'success';
// type TaskStep = 'list' | 'add';

// const MobileSimulator: React.FC<MobileSimulatorProps> = ({ activeProject }) => {
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });
//   const [isLive, setIsLive] = useState(false);
  
//   // Demo States
//   const [videoCallStep, setVideoCallStep] = useState<'login' | 'dashboard'>('login');
//   const [inventoryStep, setInventoryStep] = useState<InventoryStep>('login');
//   const [ticketingStep, setTicketingStep] = useState<TicketingStep>('login');
//   const [doctorStep, setDoctorStep] = useState<DoctorStep>('home');
//   const [taskStep, setTaskStep] = useState<TaskStep>('list');
  
//   // Reset live mode when project changes
//   useEffect(() => {
//     setIsLive(false);
//     setVideoCallStep('login');
//     setInventoryStep('login');
//     setTicketingStep('login');
//     setDoctorStep('home');
//     setTaskStep('list');
//   }, [activeProject.id]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
//     const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
//     setRotation({ x, y });
//   };

//   const handleMouseLeave = () => {
//     setRotation({ x: 0, y: 0 });
//   };

//   const toggleDemo = () => {
//     const interactiveIds = ['1', '2', '3', '4', '8', '9'];
//     if (interactiveIds.includes(activeProject.id) || activeProject.demoUrl === 'interactive') {
//       setIsLive(true);
//     } else if (activeProject.link) {
//       window.open(activeProject.link, '_blank');
//     }
//   };

//   // Helper Components for Demos
//   const DemoHeader = ({ title, color, onBack }: { title: string, color: string, onBack?: () => void }) => (
//     <div className="pt-10 pb-4 px-4 flex items-center gap-3 text-white shadow-lg sticky top-0 z-50" style={{ backgroundColor: color }}>
//       {onBack && (
//         <button onClick={onBack} className="p-1 hover:bg-white/10 rounded-lg">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
//         </button>
//       )}
//       <h1 className="text-xs font-black uppercase tracking-tight truncate flex-1 text-left">{title}</h1>
//     </div>
//   );

//   const renderProjectContent = () => {
//     // 1. WebRTC Video Calling (Matching Screenshots)
//     if (activeProject.id === '1') {
//       return videoCallStep === 'login' ? (
//         // Login Screen (Screenshot 2)
//         <div className="h-full flex flex-col items-center justify-center p-6 bg-slate-100 font-sans">
//            <div className="w-full bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-center">
//               <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
//                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
//                 </svg>
//               </div>
//               <h2 className="text-xl font-black text-slate-800 mb-8 tracking-tight">Welcome Back</h2>
              
//               <div className="w-full space-y-4 mb-8">
//                 <div className="relative">
//                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
//                    </span>
//                    <input type="text" value="earbaj@test.com" readOnly className="w-full bg-white border border-slate-300 rounded-lg pl-11 pr-4 py-3 text-[10px] font-bold text-slate-600 focus:outline-none" />
//                    <span className="absolute left-10 top-3 bottom-3 w-px bg-slate-300"></span>
//                 </div>
//                 <div className="relative">
//                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
//                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
//                    </span>
//                    <input type="password" value="********" readOnly className="w-full bg-white border border-slate-300 rounded-lg pl-11 pr-4 py-3 text-[10px] font-bold text-slate-600 focus:outline-none" />
//                    <span className="absolute left-10 top-3 bottom-3 w-px bg-slate-300"></span>
//                 </div>
//               </div>

//               <button onClick={() => setVideoCallStep('dashboard')} className="w-full py-4 bg-blue-500 text-white font-black rounded-lg shadow-xl shadow-blue-200 text-[11px] uppercase tracking-wide active:scale-95 transition-all">Login</button>
              
//               <div className="mt-6 text-[9px] font-bold text-blue-600 cursor-pointer">
//                 Don't have an account? Sign Up
//               </div>
//            </div>
//         </div>
//       ) : (
//         // Dashboard Screen (Screenshot 1)
//         <div className="h-full bg-white flex flex-col font-sans">
//            {/* Header Area */}
//            <div className="bg-gradient-to-r from-blue-500 to-blue-700 pt-12 pb-10 px-6 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
//               <div className="flex justify-between items-center mb-8 relative z-10">
//                 <h1 className="text-sm font-black text-white tracking-tight uppercase">VideoCall App</h1>
//                 <button onClick={() => setVideoCallStep('login')} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md">
//                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
//                 </button>
//               </div>

//               <div className="flex items-center gap-4 relative z-10">
//                  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-white text-blue-600 font-black text-xl shadow-lg">E</div>
//                  <div className="text-left">
//                     <div className="text-[10px] font-medium text-white/70">Welcome back,</div>
//                     <div className="text-base font-black text-white leading-tight">earbaj</div>
//                     <div className="text-[9px] font-medium text-white/70">earbaj@test.com</div>
//                  </div>
//               </div>
//            </div>

//            {/* User List Area */}
//            <div className="flex-1 px-6 pt-8">
//               <div className="flex justify-between items-center mb-6">
//                  <h2 className="text-sm font-black text-slate-800 tracking-tight">Explore Users</h2>
//                  <span className="text-[10px] font-black text-blue-500">View All</span>
//               </div>

//               <div className="bg-white rounded-2xl p-4 shadow-lg shadow-slate-100 border border-slate-50 flex items-center gap-4">
//                  <div className="relative">
//                     <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-black text-lg">S</div>
//                     <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-300 rounded-full border-2 border-white"></div>
//                  </div>
//                  <div className="flex-1 text-left">
//                     <div className="text-xs font-black text-slate-800">saria</div>
//                     <div className="text-[9px] font-medium text-slate-400">saria@test.com</div>
//                  </div>
//                  <div className="flex gap-2">
//                     <button className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-500">
//                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
//                     </button>
//                     <button className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
//                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
//                     </button>
//                  </div>
//               </div>
//            </div>
//         </div>
//       );
//     }

//     // 8. Doctor Appointment App
//     if (activeProject.id === '8') {
//       if (doctorStep === 'home') return (
//         <div className="h-full bg-slate-50 flex flex-col">
//           <DemoHeader title="Find Doctor" color="#3b82f6" />
//           <div className="p-4 space-y-4">
//             <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3 cursor-pointer hover:border-blue-200 transition-colors" onClick={() => setDoctorStep('details')}>
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl">👨‍⚕️</div>
//               <div className="text-left">
//                 <div className="text-xs font-black text-slate-800">Dr. Sarah Jenkins</div>
//                 <div className="text-[9px] text-slate-400 font-bold">Cardiologist • 4.9⭐</div>
//               </div>
//             </div>
//             <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3 opacity-60">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-xl">👩‍⚕️</div>
//               <div className="text-left">
//                 <div className="text-xs font-black text-slate-800">Dr. John Doe</div>
//                 <div className="text-[9px] text-slate-400 font-bold">Neurologist • 4.8⭐</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//       if (doctorStep === 'details') return (
//         <div className="h-full bg-white flex flex-col">
//           <DemoHeader title="Book Slot" color="#3b82f6" onBack={() => setDoctorStep('home')} />
//           <div className="p-6 text-left">
//             <h2 className="text-lg font-black text-slate-800 mb-2">Select Time</h2>
//             <div className="grid grid-cols-2 gap-3 mb-8">
//               {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'].map(t => (
//                 <button key={t} className="py-2 px-3 border border-blue-100 rounded-lg text-[10px] font-black text-blue-600 hover:bg-blue-50">{t}</button>
//               ))}
//             </div>
//             <button onClick={() => setDoctorStep('success')} className="w-full py-4 bg-blue-500 text-white rounded-xl font-black uppercase text-[10px] tracking-widest shadow-lg shadow-blue-500/20">Confirm Booking</button>
//           </div>
//         </div>
//       );
//       return (
//         <div className="h-full bg-white flex flex-col items-center justify-center p-8">
//           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-4 animate-bounce">✅</div>
//           <h3 className="text-lg font-black text-slate-800 mb-2">Booked!</h3>
//           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-8">Dr. Sarah • Mon, 9:00 AM</p>
//           <button onClick={() => setDoctorStep('home')} className="text-blue-500 font-black text-[10px] uppercase">Back to Search</button>
//         </div>
//       );
//     }

//     // 2. Inventory Management
//     if (activeProject.id === '2') {
//        if (inventoryStep === 'login') return <div className="h-full flex flex-col items-center justify-center p-6 bg-white"><button onClick={() => setInventoryStep('dashboard')} className="w-full py-4 bg-green-500 text-white rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl">Inventory Log In</button></div>;
//        return (
//          <div className="h-full flex flex-col bg-slate-50">
//             <DemoHeader title="Inventory Admin" color="#22c55e" />
//             <div className="p-4 grid grid-cols-2 gap-4">
//                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-left">
//                  <div className="text-xl font-black text-green-500">124</div>
//                  <div className="text-[8px] font-black uppercase text-slate-400">Products</div>
//                </div>
//                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-left">
//                  <div className="text-xl font-black text-orange-400">12</div>
//                  <div className="text-[8px] font-black uppercase text-slate-400">Low Stock</div>
//                </div>
//             </div>
//             <button onClick={() => setInventoryStep('login')} className="mt-auto p-4 text-slate-400 text-[10px] text-center uppercase font-black">Exit Demo</button>
//          </div>
//        );
//     }

//     // 9. Task Management UI
//     if (activeProject.id === '9') {
//       return (
//         <div className="h-full bg-slate-50 flex flex-col">
//           <DemoHeader title="FlowTask" color="#8b5cf6" />
//           <div className="p-4 flex-1 overflow-y-auto space-y-3">
//              {[
//                { t: 'App Redesign', c: 'Design', d: true },
//                { t: 'Fix API Endpoints', c: 'Dev', d: false },
//                { t: 'Client Meeting', c: 'Meeting', d: false },
//                { t: 'Write Unit Tests', c: 'QA', d: true }
//              ].map((task, i) => (
//                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between group">
//                  <div className="flex items-center gap-3">
//                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${task.d ? 'bg-purple-500 border-purple-500' : 'border-slate-200'}`}>
//                      {task.d && <span className="text-white text-[10px]">✓</span>}
//                    </div>
//                    <div className="text-left">
//                      <div className={`text-xs font-black ${task.d ? 'text-slate-300 line-through' : 'text-slate-700'}`}>{task.t}</div>
//                      <div className="text-[8px] font-black text-purple-400 uppercase">{task.c}</div>
//                    </div>
//                  </div>
//                </div>
//              ))}
//           </div>
//           <div className="p-4">
//              <button className="w-full py-3 bg-purple-500 text-white rounded-xl font-black text-[10px] uppercase shadow-lg shadow-purple-500/20">+ Add New Task</button>
//           </div>
//         </div>
//       );
//     }

//     // Fallback or interactive placeholder
//     return (
//       <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-8 text-center">
//         {activeProject.demoUrl?.endsWith('.mp4') ? (
//           <video src={activeProject.demoUrl} autoPlay loop muted className="w-full h-full object-cover" />
//         ) : (
//           <div className="text-white/50 space-y-4">
//              <div className="text-4xl">🏗️</div>
//              <p className="text-[10px] font-black uppercase tracking-widest">Interactive Preview Coming Soon</p>
//              <button onClick={() => setIsLive(false)} className="text-sky-400 font-black text-[9px] uppercase border-b border-sky-400">Return to Mockup</button>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="relative flex items-center justify-center p-1 sm:p-2 md:p-4 w-full" style={{ perspective: '2000px' }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
//       <div 
//         className="relative w-full max-w-[260px] sm:max-w-[290px] aspect-[1/2.1] bg-slate-900 rounded-[2.5rem] sm:rounded-[3.5rem] border-[8px] sm:border-[12px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out overflow-hidden" 
//         style={{ transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`, boxShadow: `0 40px 80px -20px ${activeProject.color}44, 0 10px 30px -10px #000000` }}
//       >
//         {/* Notch */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-6 sm:h-8 bg-slate-800 rounded-b-[1.5rem] sm:rounded-b-[1.8rem] z-[100] flex items-center justify-center gap-2 sm:gap-3">
//             <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-900 shadow-inner"></div>
//             <div className="w-8 sm:w-12 h-1 sm:h-1.5 bg-slate-900/40 rounded-full"></div>
//         </div>

//         <div className="absolute inset-0 overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-slate-950 shadow-inner">
//           <div className="h-full flex flex-col">
//             <div className="flex-1 relative overflow-hidden bg-black">
//                 {isLive ? (
//                   <div className="h-full w-full relative">
//                     {renderProjectContent()}
//                     <button onClick={() => setIsLive(false)} className="absolute top-10 right-4 w-8 h-8 rounded-xl bg-black/40 backdrop-blur-xl flex items-center justify-center text-white border border-white/20 text-[10px] z-[110] hover:bg-black/60 transition-all shadow-2xl active:scale-90">✕</button>
//                   </div>
//                 ) : (
//                   <>
//                     <img key={activeProject.id} src={activeProject.image} className="w-full h-full object-cover opacity-20 blur-md scale-110" />
//                     <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8 text-center bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent">
//                         <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] flex items-center justify-center text-white font-black text-2xl sm:text-3xl animate-pulse" style={{ backgroundColor: activeProject.color }}>{activeProject.title[0]}</div>
//                         <h3 className="text-xl sm:text-2xl font-black mb-2 text-white tracking-tighter leading-tight uppercase italic">{activeProject.title}</h3>
//                         <p className="text-[9px] sm:text-[11px] text-white/60 leading-relaxed mb-8 sm:mb-10 px-2 sm:px-4 font-bold uppercase tracking-widest">{activeProject.mockupContent}</p>
//                         <button onClick={toggleDemo} className="w-full py-4 rounded-xl sm:rounded-2xl text-[8px] sm:text-[10px] uppercase tracking-[0.2em] font-black bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all shadow-2xl active:scale-95">Open Interactive</button>
//                     </div>
//                   </>
//                 )}
//             </div>
            
//             {/* Home indicator bar */}
//             <div className="h-6 sm:h-8 md:h-12 flex items-center justify-center cursor-pointer group bg-inherit z-[100]" onClick={() => setIsLive(false)}>
//               <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-slate-800 rounded-full group-hover:bg-slate-600 group-hover:w-24 transition-all duration-500"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileSimulator;


import React, { useState, useEffect } from 'react';
import { Project } from '../../types';
import * as Demos from './demos'; // Ensure this path matches your folder structure

interface MobileSimulatorProps {
  activeProject: Project;
}

const MobileSimulator: React.FC<MobileSimulatorProps> = ({ activeProject }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isLive, setIsLive] = useState(false);

  // Reset live mode when project changes
  useEffect(() => {
    setIsLive(false);
  }, [activeProject.id]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const renderProjectContent = () => {
    switch (activeProject.id) {
      case '1': return <Demos.VideoCallDemo onExit={() => setIsLive(false)} />;
      case '2': return <Demos.InventoryDemo />;
      case '8': return <Demos.DoctorDemo />;
      case '9': return <Demos.TaskDemo />;
      default:
        return (
          <div className="h-full bg-slate-900 flex flex-col items-center justify-center p-8 text-center">
             <div className="text-4xl mb-4">🏗️</div>
             <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Preview Coming Soon</p>
          </div>
        );
    }
  };

  return (
    <div 
      className="relative flex items-center justify-center p-1 sm:p-2 md:p-4 w-full" 
      style={{ perspective: '2000px' }} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative w-full max-w-[260px] sm:max-w-[290px] aspect-[1/1.8] bg-slate-900 rounded-[2.5rem] sm:rounded-[3.5rem] border-[8px] sm:border-[12px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out overflow-hidden" 
        style={{ 
          transform: `rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`, 
          boxShadow: `0 40px 80px -20px ${activeProject.color}44, 0 10px 30px -10px #000000` 
        }}
      >
        {/* Hardware Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-6 sm:h-8 bg-slate-800 rounded-b-[1.5rem] sm:rounded-b-[1.8rem] z-[100] flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-900 shadow-inner"></div>
            <div className="w-8 sm:w-12 h-1 sm:h-1.5 bg-slate-900/40 rounded-full"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-slate-950 shadow-inner">
          <div className="h-full flex flex-col">
            <div className="flex-1 relative overflow-hidden bg-black">
                {isLive ? (
                  <div className="h-full w-full relative">
                    {renderProjectContent()}
                    {/* Floating Close Button */}
                    <button 
                      onClick={() => setIsLive(false)} 
                      className="absolute top-5 right-4 w-8 h-8 rounded-xl bg-black/40 backdrop-blur-xl flex items-center justify-center text-white border border-white/20 text-[10px] z-[110] hover:bg-black/60 transition-all active:scale-90"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <>
                    {/* The Background Image Mockup */}
                    <img key={activeProject.id} src={activeProject.image} className="w-full h-full object-cover opacity-20 blur-md scale-110" alt="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8 text-center bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent">
                        <div 
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 shadow-lg flex items-center justify-center text-white font-black text-2xl sm:text-3xl animate-pulse" 
                          style={{ backgroundColor: activeProject.color }}
                        >
                          {activeProject.title[0]}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black mb-2 text-white tracking-tighter leading-tight uppercase italic">
                          {activeProject.title}
                        </h3>
                        <p className="text-[9px] sm:text-[11px] text-white/60 leading-relaxed mb-8 sm:mb-10 px-2 sm:px-4 font-bold uppercase tracking-widest">
                          {activeProject.mockupContent}
                        </p>
                        <button 
                          onClick={() => setIsLive(true)} 
                          className="w-full py-4 rounded-xl sm:rounded-2xl text-[8px] sm:text-[10px] uppercase tracking-[0.2em] font-black bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all shadow-2xl active:scale-95"
                        >
                          Open Interactive
                        </button>
                    </div>
                  </>
                )}
            </div>
            
            {/* Home Indicator Bar */}
            <div className="h-6 sm:h-8 md:h-12 flex items-center justify-center cursor-pointer group bg-inherit z-[100]" onClick={() => setIsLive(false)}>
              <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-slate-800 rounded-full group-hover:bg-slate-600 group-hover:w-24 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSimulator;