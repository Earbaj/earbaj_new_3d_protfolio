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