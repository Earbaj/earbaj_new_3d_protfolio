
import React, { useState, useEffect } from 'react';
import { Project } from '../types';

interface WebSimulatorProps {
  activeProject: Project;
}

const WebSimulator: React.FC<WebSimulatorProps> = ({ activeProject }) => {
  const [isLive, setIsLive] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setIsLive(false);
    setStep(0);
  }, [activeProject.id]);

  const renderContent = () => {
    if (activeProject.id === '10') {
      // Doctor Appointment Web Mockup
      return (
        <div className="h-full bg-slate-50 flex flex-col font-sans">
          <nav className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-sm">
            <div className="text-blue-600 font-black text-sm tracking-tighter">DOC_DASH</div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs">👤</div>
            </div>
          </nav>
          <div className="flex-1 p-6 text-left">
            <h1 className="text-xl font-black text-slate-800 mb-6">Patient Overview</h1>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { l: 'Today Appointments', v: '24', c: 'text-blue-600' },
                { l: 'New Patients', v: '12', c: 'text-green-500' },
                { l: 'Total Consultations', v: '1,450', c: 'text-purple-500' }
              ].map(stat => (
                <div key={stat.l} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className={`text-2xl font-black ${stat.c}`}>{stat.v}</div>
                  <div className="text-[10px] font-black uppercase text-slate-400 mt-1">{stat.l}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
               <div className="p-4 border-b border-slate-100 font-black text-xs text-slate-400 uppercase tracking-widest">Upcoming Bookings</div>
               <div className="divide-y divide-slate-100">
                  {['Sarah Parker', 'James Wilson', 'Michael Scott'].map((name, i) => (
                    <div key={name} className="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                      <div>
                        <div className="text-xs font-black text-slate-700">{name}</div>
                        <div className="text-[10px] text-slate-400">Routine Checkup • {i + 1}:00 PM</div>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-[9px] font-black rounded-md">CONFIRMED</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeProject.id === '11') {
      // Task Management Web Mockup
      return (
        <div className="h-full bg-white flex flex-col font-sans">
          <div className="flex-1 flex text-left">
            <aside className="w-48 bg-slate-900 text-white p-6 space-y-6">
              <div className="text-xl font-black italic tracking-tighter">FLOW_TASK</div>
              <div className="space-y-4">
                 {['Dashboard', 'My Tasks', 'Calendar', 'Teams'].map(t => (
                   <div key={t} className="text-[10px] font-black text-slate-400 hover:text-white cursor-pointer uppercase tracking-widest">{t}</div>
                 ))}
              </div>
            </aside>
            <main className="flex-1 p-8">
               <div className="flex justify-between items-center mb-8">
                  <h1 className="text-2xl font-black text-slate-800">Sprint Backlog</h1>
                  <button className="px-4 py-2 bg-purple-600 text-white font-black text-xs rounded-lg shadow-lg shadow-purple-200">+ Create Task</button>
               </div>
               <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
                  {[
                    { l: 'TO DO', c: 'bg-slate-200', t: ['Auth Logic', 'API Mapping'] },
                    { l: 'IN PROGRESS', c: 'bg-blue-400', t: ['UI Redesign'] },
                    { l: 'DONE', c: 'bg-green-400', t: ['Landing Page'] }
                  ].map(column => (
                    <div key={column.l} className="w-64 flex-none space-y-4">
                       <div className="flex items-center gap-2 mb-4">
                          <div className={`w-2 h-2 rounded-full ${column.c}`}></div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{column.l}</span>
                       </div>
                       {column.t.map(task => (
                         <div key={task} className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-purple-300 transition-all group">
                            <div className="text-xs font-black text-slate-700 mb-2">{task}</div>
                            <div className="flex gap-2">
                               <span className="px-2 py-0.5 bg-purple-100 text-purple-600 text-[8px] font-black rounded">DEV</span>
                               <span className="px-2 py-0.5 bg-slate-200 text-slate-500 text-[8px] font-black rounded">HIGH</span>
                            </div>
                         </div>
                       ))}
                    </div>
                  ))}
               </div>
            </main>
          </div>
        </div>
      );
    }

    return (
       <div className="h-full bg-slate-950 flex flex-col items-center justify-center p-12 text-center">
          <img src={activeProject.image} className="w-full h-full object-cover opacity-10 absolute inset-0 pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <div className="w-20 h-20 bg-white/5 rounded-3xl mx-auto flex items-center justify-center text-3xl border border-white/10" style={{ color: activeProject.color }}>🌐</div>
            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">{activeProject.title}</h3>
            <p className="text-xs text-white/40 font-bold uppercase tracking-widest max-w-sm">{activeProject.mockupContent}</p>
            <button 
              onClick={() => setIsLive(true)}
              className="px-8 py-3 bg-white text-black font-black rounded-xl text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              Enter Dashboard Preview
            </button>
          </div>
       </div>
    );
  };

  return (
    <div className="w-full h-[400px] sm:h-[450px] md:h-[550px] relative animate-in fade-in slide-in-from-bottom-4 duration-1000">
       <div className="absolute -inset-10 bg-white/5 blur-[100px] -z-10 rounded-full"></div>
       <div className="w-full h-full glass rounded-2xl md:rounded-[2.5rem] border-white/10 shadow-3xl flex flex-col overflow-hidden bg-slate-950/40">
          {/* Browser Header */}
          <div className="h-10 sm:h-12 bg-slate-900/80 border-b border-white/5 px-4 sm:px-6 flex items-center gap-4 sm:gap-6 shrink-0">
             <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50"></div>
             </div>
             <div className="flex-1 bg-black/40 h-6 sm:h-7 rounded-lg flex items-center px-3 sm:px-4 border border-white/5">
                <div className="text-[8px] sm:text-[10px] text-white/20 mr-2">🔒</div>
                <div className="text-[8px] sm:text-[9px] text-white/50 font-medium truncate uppercase tracking-widest italic">
                   {activeProject.link?.replace('https://', '') || 'localhost:3000'}
                </div>
             </div>
             <div className="flex gap-2 sm:gap-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/10"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/10"></div>
             </div>
          </div>

          {/* Browser Content */}
          <div className="flex-1 overflow-hidden relative">
             {isLive ? renderContent() : renderContent()}
             {!isLive && (
               <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50">
                  <div className="text-center p-8">
                     <div className="w-16 h-16 bg-white/5 rounded-2xl mb-6 mx-auto flex items-center justify-center text-2xl border border-white/10">💻</div>
                     <h4 className="text-white font-black text-lg mb-2 uppercase tracking-tight">{activeProject.title}</h4>
                     <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-8">React/Frontend Application</p>
                     <button 
                        onClick={() => setIsLive(true)}
                        className="px-8 py-3 bg-white text-black font-black rounded-xl text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
                     >
                        Launch Preview
                     </button>
                  </div>
               </div>
             )}
          </div>
       </div>
    </div>
  );
};

export default WebSimulator;
