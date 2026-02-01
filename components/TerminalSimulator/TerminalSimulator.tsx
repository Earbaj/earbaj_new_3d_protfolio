
// import React, { useState, useRef, useEffect } from 'react';
// import { Project } from '../../types';

// interface TerminalSimulatorProps {
//   activeProject: Project;
// }

// interface Log {
//   text: string;
//   type: 'info' | 'success' | 'request' | 'response';
//   time: string;
// }

// const TerminalSimulator: React.FC<TerminalSimulatorProps> = ({ activeProject }) => {
//   const [logs, setLogs] = useState<Log[]>([]);
//   const [isServerRunning, setIsServerRunning] = useState(false);
//   const logEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     setLogs([]);
//     setIsServerRunning(false);
//   }, [activeProject.id]);

//   useEffect(() => {
//     logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [logs]);

//   const addLog = (type: Log['type'], text: string) => {
//     const time = new Date().toLocaleTimeString([], { hour12: false });
//     setLogs(prev => [...prev, { text, type, time }]);
//   };

//   const startServer = () => {
//     if (isServerRunning) return;
//     setIsServerRunning(true);
//     addLog('info', `Initializing ${activeProject.title} server...`);
//     setTimeout(() => {
//       addLog('success', 'Connected to MongoDB Atlas...');
//       addLog('success', 'Server started on port 3000 (Express)');
//     }, 800);
//   };

//   const testEndpoint = (method: string, endpoint: string) => {
//     if (!isServerRunning) {
//       addLog('info', 'Cannot process request: Server is not running.');
//       return;
//     }
//     addLog('request', `${method} ${endpoint}`);
//     setTimeout(() => {
//       addLog('response', `HTTP/1.1 200 OK - Request processed successfully`);
//       if (activeProject.id === '5') {
//         addLog('info', 'Payload: { "message": "Employee list retrieved" }');
//       } else if (activeProject.id === '6') {
//         addLog('info', 'Payload: { "token": "eyJhbGciOiJIUzI1..." }');
//       }
//     }, 500);
//   };

//   return (
//     <div className="w-full h-[320px] sm:h-[400px] md:h-[500px] bg-[#0c1117] rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-mono text-left animate-in fade-in duration-500">
//       {/* Terminal Header */}
//       <div className="bg-[#161b22] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-white/5">
//         <div className="flex gap-1.5 sm:gap-2">
//           <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50"></div>
//           <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50"></div>
//           <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50"></div>
//         </div>
//         <div className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-widest font-black truncate max-w-[150px] sm:max-w-none">
//           {activeProject.title} • Backend Console
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
//             onClick={startServer}
//             className="flex-1 py-3 sm:py-4 bg-sky-500 text-white font-black text-[9px] sm:text-[10px] uppercase tracking-widest rounded-xl shadow-lg shadow-sky-500/20 active:scale-95 transition-all"
//           >
//             npm start server
//           </button>
//         ) : (
//           <>
//             <button 
//               onClick={() => testEndpoint('GET', '/api/v1/health')}
//               className="flex-1 py-3 bg-white/5 border border-white/10 text-white font-black text-[8px] sm:text-[9px] uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all active:scale-95"
//             >
//               Test GET
//             </button>
//             <button 
//               onClick={() => testEndpoint('POST', activeProject.id === '6' ? '/api/auth/login' : '/api/v1/data')}
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

// export default TerminalSimulator;


import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../../types';
import EmployeeSystemDemo from './demo/EmployeeSystemDemo';
import AuthSystemDemo from './demo/AuthSystemDemo';
import TaskManagment from './demo/TaskManagment';

interface Log {
  text: string;
  type: 'info' | 'success' | 'request' | 'response';
  time: string;
}



// Default Demo (for other backend projects)


// ==================== 3. MAIN COMPONENT ====================
interface TerminalSimulatorProps {
  activeProject: Project;
}

const TerminalSimulator: React.FC<TerminalSimulatorProps> = ({ activeProject }) => {
  // Render the appropriate demo based on project ID
  switch (activeProject.id) {
    case '5': // Employee Management System
      return <EmployeeSystemDemo />;
    
    case '6': // Auth & Access Control
      return <AuthSystemDemo />;
    
    default:
      return <TaskManagment />;
  }
};

export default TerminalSimulator;