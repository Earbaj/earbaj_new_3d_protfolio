import React, { useState } from 'react';
import TerminalUI from '../ui/TerminalUi';

interface Log {
  text: string;
  type: 'info' | 'success' | 'request' | 'response';
  time: string;
}

const DefaultDemo = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [isServerRunning, setIsServerRunning] = useState(false);

  const addLog = (type: Log['type'], text: string) => {
    const time = new Date().toLocaleTimeString([], { hour12: false });
    setLogs(prev => [...prev, { text, type, time }]);
  };

  const startServer = () => {
    if (isServerRunning) return;
    
    setIsServerRunning(true);
    addLog('info', 'Starting Backend Server...');
    
    setTimeout(() => {
      addLog('success', 'Connected to database');
      addLog('success', 'Server running on port 3000');
    }, 800);
  };

  const testGet = () => {
    if (!isServerRunning) {
      addLog('info', 'Server is not running. Start server first.');
      return;
    }

    addLog('request', 'GET /api/health');
    
    setTimeout(() => {
      addLog('response', '200 OK - Server is healthy');
    }, 500);
  };

  const testPost = () => {
    if (!isServerRunning) {
      addLog('info', 'Server is not running. Start server first.');
      return;
    }

    addLog('request', 'POST /api/data');
    
    setTimeout(() => {
      addLog('response', '200 OK - Data processed');
    }, 500);
  };

  return (
    <TerminalUI
      title="Backend Server"
      logs={logs}
      isServerRunning={isServerRunning}
      onStartServer={startServer}
      onTestGet={testGet}
      onTestPost={testPost}
    />
  );
};

export default DefaultDemo;