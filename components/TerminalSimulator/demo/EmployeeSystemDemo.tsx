import React, { useState, useRef, useEffect } from 'react';
import TerminalUI from '../ui/TerminalUi';

interface Log {
  text: string;
  type: 'info' | 'success' | 'request' | 'response';
  time: string;
}

// Employee System Demo
const EmployeeSystemDemo = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [isServerRunning, setIsServerRunning] = useState(false);

  const addLog = (type: Log['type'], text: string) => {
    const time = new Date().toLocaleTimeString([], { hour12: false });
    setLogs(prev => [...prev, { text, type, time }]);
  };

  const startServer = () => {
    if (isServerRunning) return;
    
    setIsServerRunning(true);
    addLog('info', 'Starting Employee Management System...');
    
    setTimeout(() => {
      addLog('success', 'Connected to MongoDB Atlas');
      addLog('info', 'Redis cache initialized');
      addLog('success', 'Server running on port 3000');
      addLog('info', 'Swagger docs: http://localhost:3000/api-docs');
    }, 800);
  };

  const testGet = () => {
    if (!isServerRunning) {
      addLog('info', 'Server is not running. Start server first.');
      return;
    }

    addLog('request', 'GET /api/employees?page=1&limit=10');
    
    setTimeout(() => {
      addLog('response', '200 OK - Employees retrieved');
      addLog('info', 'Count: 42 employees (page 1 of 5)');
    }, 500);
  };

  const testPost = () => {
    if (!isServerRunning) {
      addLog('info', 'Server is not running. Start server first.');
      return;
    }

    addLog('request', 'POST /api/employees');
    
    setTimeout(() => {
      addLog('response', '201 Created - Employee added');
      addLog('info', 'New employee: John Doe (Engineering)');
    }, 500);
  };

  return (
    <TerminalUI
      title="Employee Management System"
      logs={logs}
      isServerRunning={isServerRunning}
      onStartServer={startServer}
      onTestGet={testGet}
      onTestPost={testPost}
    />
  );
};

export default EmployeeSystemDemo;