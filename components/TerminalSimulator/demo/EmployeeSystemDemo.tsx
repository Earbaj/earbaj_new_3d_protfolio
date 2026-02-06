import React, { useState, useRef, useEffect } from 'react';
import TerminalUI from '../ui/TerminalUi';
import { idID } from '@mui/material/locale';

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

  const testGet = async () => {
    if (!isServerRunning) {
      addLog('info', 'Server is not running. Start server first.');
      return;
    }
    await fakeGetAll();
    await fakeGetSingle();
  };

  const testPost = async () => {
    if (!isServerRunning) {
      addLog('info', 'Server is not running. Start server first.');
      return;
    }
    await fakeRegister();
    await fakeLogin();
    await fakeEmployeeCreate();
  };

  const testPut = async () => {
    if (!isServerRunning) {
      addLog('info', 'Server is not running. Start server first.');
      return;
    }
    await fakePutEmployee();
      
  };

  const testDelete = async () => {
    if (!isServerRunning) {
      addLog('info', 'Server is not running. Start server first.');
      return;
    }
    addLog('request', 'DELETE /api/employees/:id');
    setTimeout(() => {
        addLog('response', '200 OK - Employee successful deleted');
      }, 500);
  };

  const fakePutEmployee = () => {
    return new Promise(resolve => {
      addLog('request', 'PUT /api/employees/:id');

      const requestBody = JSON.stringify({
        name: "Employee Name",
        email: "employee@company.com",
        role: "Software Engineer"
      }, null, 2);
      addLog('info', `Payload: \n${requestBody}`);
      addLog('info', 'Auth: Bearer eyJhbGci...');

      const resultBody = JSON.stringify({
        id: 1,
        name: "Employee Name",
        email: "employee@company.com",
        role: "Software Engineer"
      }, null, 2);

      setTimeout(() => {
        addLog('response', '200 OK - Put successful');
        addLog('info', resultBody);
        resolve(true); // login done
      }, 500);
    });
  };

  const fakeRegister = () => {
    return new Promise(resolve => {
      addLog('request', 'POST /api/register');

      const registerPayload = JSON.stringify({
        name: "Employee Name",
        email: "employee@company.com",
        role: "Software Engineer",
      }, null, 2);

      addLog('info', `Payload: \n${registerPayload}`);

      setTimeout(() => {
        addLog('response', '200 OK - register successful');
        const responseData = `[System Message]:
>> ID: EMP-${Math.floor(Math.random() * 1000)}
>> Status: Active
>> Created At: ${new Date().toLocaleTimeString()}`;

        addLog('success', responseData);
        resolve(true); // register done
      }, 500);
    });
  };

  const fakeLogin = () => {
    return new Promise(resolve => {

      addLog('request', 'POST /api/login');

      const loginResponse = JSON.stringify({
        id: 1,
        name: "Employee Name",
        email: "employee@company.com",
        role: "Software Engineer",
        token:"eyJhbGci..."
      }, null, 2);


      setTimeout(() => {
        addLog('response', '200 OK - Login successful');
        addLog('info', loginResponse);
        resolve(true); // login done
      }, 500);
    });
  };

  const fakeEmployeeCreate = () => {
    return new Promise(resolve => {
      addLog('request', 'POST /api/employees');

      const requestBody = JSON.stringify({
        name: "Employee Name",
        email: "employee@company.com",
        role: "Software Engineer"
      }, null, 2);

      addLog('info', `Payload: \n${requestBody}`);
      addLog('info', 'Auth: Bearer eyJhbGci...');

      setTimeout(() => {
        addLog('response', '201 Created - Employee create successful');
        const responseData = `[System Message]:
>> ID: EMP-${Math.floor(Math.random() * 1000)}
>> Status: Active
>> Created At: ${new Date().toLocaleTimeString()}`;

        addLog('success', responseData);
        resolve(true); // register done
      }, 500);
    });
  };


  const fakeGetAll = () => {
    return new Promise(resolve => {
      addLog('request', 'GET /api/employees (Bearer token: eyJhbGci...)');


      const employeeList = JSON.stringify([
        { "id": 1, "name": "Earbaj", "role": "Senior Dev" },
        { "id": 2, "name": "John Doe", "role": "Fullstack" },
        { "id": 3, "name": "Alex Smith", "role": "Designer" }
      ], null, 2);

      addLog('info', 'Auth: Bearer eyJhbGci...');

      setTimeout(() => {
        addLog('response', '200 OK - Get successful');
        addLog('info', employeeList);
        resolve(true); // login done
      }, 500);
    });
  };

  const fakeGetSingle = () => {
    return new Promise(resolve => {
      addLog('request', 'GET /api/employees/id');

      const requestBody = JSON.stringify({
        id: 1,
        name: "Employee Name",
        email: "employee@company.com",
        role: "Software Engineer"
      }, null, 2);

      addLog('info', 'Auth: Bearer eyJhbGci...');

      setTimeout(() => {
        addLog('response', '200 OK - Get successful');
        addLog('info', requestBody);
        resolve(true); // login done
      }, 500);
    });
  };

  return (
    <TerminalUI
      title="Employee Management System"
      logs={logs}
      isServerRunning={isServerRunning}
      onStartServer={startServer}
      onTestGet={testGet}
      onTestPost={testPost}
      onTestPut={testPut}
      onTestDelete={testDelete}
    />
  );
};

export default EmployeeSystemDemo;