import React from 'react';
import { DemoHeader } from '../../DemoHeader';

export const TaskDemo = () => {
  const tasks = [
    { t: 'App Redesign', c: 'Design', d: true },
    { t: 'Fix API Endpoints', c: 'Dev', d: false },
    { t: 'Client Meeting', c: 'Meeting', d: false },
    { t: 'Write Unit Tests', c: 'QA', d: true }
  ];

  return (
    <div className="h-full bg-slate-50 flex flex-col">
      <DemoHeader title="FlowTask" color="#8b5cf6" />
      <div className="p-4 flex-1 overflow-y-auto space-y-3">
        {tasks.map((task, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${task.d ? 'bg-purple-500 border-purple-500' : 'border-slate-200'}`}>
                {task.d && <span className="text-white text-[10px]">✓</span>}
              </div>
              <div className="text-left">
                <div className={`text-xs font-black ${task.d ? 'text-slate-300 line-through' : 'text-slate-700'}`}>{task.t}</div>
                <div className="text-[8px] font-black text-purple-400 uppercase">{task.c}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <button className="w-full py-3 bg-purple-500 text-white rounded-xl font-black text-[10px] uppercase shadow-lg shadow-purple-500/20 active:scale-95 transition-all">
          + Add New Task
        </button>
      </div>
    </div>
  );
};