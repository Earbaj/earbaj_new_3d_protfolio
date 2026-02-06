import React, { useState} from 'react';
import TerminalUI from '../ui/TerminalUi';

interface Log {
  text: string;
  type: 'info' | 'success' | 'request' | 'response';
  time: string;
}

// Auth System Demo
const AuthSystemDemo = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [isServerRunning, setIsServerRunning] = useState(false);

  const addLog = (type: Log['type'], text: string) => {
    const time = new Date().toLocaleTimeString([], { hour12: false });
    setLogs(prev => [...prev, { text, type, time }]);
  };

  const startServer = () => {
    if (isServerRunning) return;
    
    setIsServerRunning(true);
    addLog('info', 'Starting Auth & Access Control System...');
    
    setTimeout(() => {
      addLog('success', 'JWT secret loaded from env');
      addLog('info', 'Rate limiting: 100 requests/minute');
      addLog('success', 'Server running on port 3000');
      addLog('info', 'CORS enabled for frontend: http://localhost:5173');
    }, 800);
  };

  const testGet = () => {
    if (!isServerRunning) {
      addLog('info', 'Server is not running. Start server first.');
      return;
    }

    addLog('request', 'GET /api/auth/me (Bearer token: eyJhbGci...)');
    
    setTimeout(() => {
      addLog('response', '200 OK - Token valid');
      addLog('info', 
        'User: admin'
      );
      addLog('info', 
        'Email: admin@company.com'
      );
      addLog('info', 
        'Role: administrator'
      );
    }, 500);
  };

  const testPost = async () => {
    if (!isServerRunning) {
      addLog('info', 'Server is not running. Start server first.');
      return;
    }
    await fakeRegister();
    await fakeLogin();
  };
  

  const fakeRegister = () => {
    return new Promise(resolve => {
      addLog('request', 'POST /api/auth/register');

    setTimeout(() => {
      addLog('response', '200 OK - register successful');
      addLog('info', 'User: admin');
      addLog('info', 'Email: admin@company.com');
      addLog('info', 'Role: administrator');
      resolve(true); // register done
    }, 500);
    });
  };

  const fakeLogin = () => {
    return new Promise(resolve => {
       addLog('request', 'POST /api/auth/login');

    setTimeout(() => {
      addLog('response', '200 OK - Login successful');
      addLog('info', 'User: admin');
      addLog('info', 'Email: admin@company.com');
      addLog('info', 'JWT token: eyJhbGci...');
      resolve(true); // login done
    }, 500);
    });
  };

  return (
    <TerminalUI
      title="Auth & Access Control"
      logs={logs}
      isServerRunning={isServerRunning}
      onStartServer={startServer}
      onTestGet={testGet}
      onTestPost={testPost}
    />
  );
};

export default AuthSystemDemo;