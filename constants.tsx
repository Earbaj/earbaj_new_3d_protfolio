
import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'WebRTC Video Calling',
    description: 'Developed a real-time peer-to-peer video calling solution using WebRTC and Firebase for signaling. Features encrypted media streams and robust connectivity logic.',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1000&auto=format&fit=crop',
    tags: ['Flutter', 'WebRTC', 'Firebase'],
    mockupContent: 'Real-time P2P: High definition video calling interface',
    color: '#0ea5e9',
    category: 'mobile',
    link: 'https://github.com/Earbaj',
    demoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-34462-large.mp4'
  },
  {
    id: '10',
    title: 'Doctor Appointment Web',
    description: 'A modern React-based web dashboard for healthcare providers. Features patient scheduling, medical records management, and real-time appointment tracking with a responsive UI.',
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Redux', 'Healthcare UI'],
    mockupContent: 'Web Dashboard: Patient Management & Appointment Flow',
    color: '#3b82f6',
    category: 'web',
    link: 'https://github.com/Earbaj/doctorappointment/tree/main',
    demoUrl: 'interactive'
  },
  {
    id: '11',
    title: 'Task Management Web',
    description: 'A sleek, simple task management frontend built for productivity. Includes drag-and-drop features, priority filtering, and seamless state synchronization for personal workflows.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Context API', 'Framer Motion', 'Productivity'],
    mockupContent: 'Productivity Suite: Agile Task Boards & Deadline Tracking',
    color: '#8b5cf6',
    category: 'web',
    link: 'https://github.com/Earbaj/simple_task_management_frontend',
    demoUrl: 'interactive'
  },
  {
    id: '8',
    title: 'Doctor Appointment App',
    description: 'A comprehensive mobile healthcare solution for booking medical consultations. Features specialist search, appointment scheduling, and a clean, user-centric medical dashboard.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop',
    tags: ['Flutter', 'Healthcare UI', 'Booking System', 'State Management'],
    mockupContent: 'HealthLink: Specialist Search & Appointment Booking',
    color: '#3b82f6',
    category: 'mobile',
    link: 'https://github.com/Earbaj/doctorappointment/tree/main',
    demoUrl: 'interactive'
  },
  {
    id: '2',
    title: 'Inventory Management System',
    description: 'Built a robust offline-first inventory tracker using SQFlite for local persistence and Firebase for online backup storage and cross-device sync.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    tags: ['Flutter', 'SQFlite', 'Firebase'],
    mockupContent: 'Inventory Keeper: Local Database & Cloud Sync',
    color: '#22c55e',
    category: 'mobile',
    link: 'https://github.com/Earbaj',
    demoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-laptop-40040-large.mp4'
  },
  {
    id: '3',
    title: 'Bus Ticketing System',
    description: 'A comprehensive mobile application for booking bus tickets, built with Flutter. This system allows users to seamlessly browse available buses, select seats, and purchase tickets using various payment methods including bKash and Nagad.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    tags: ['Flutter', 'bKash', 'Nagad', 'UI/UX'],
    mockupContent: 'Ticketing Hub: Real-time Booking & Payment Integration',
    color: '#14b8a6',
    category: 'mobile',
    link: 'https://github.com/Earbaj/ticketing_system',
    demoUrl: 'https://earbaj.github.io/earbaj_saria_protfolio/'
  },
  {
    id: '9',
    title: 'Task Management UI',
    description: 'A sleek and modern task management interface focusing on productivity. Includes category-wise task filtering, priority tagging, and smooth animations for task interactions.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop',
    tags: ['Flutter', 'Productivity', 'UX Design', 'Task Flow'],
    mockupContent: 'FlowTask: Intuitive Daily Organization & Progress Tracking',
    color: '#8b5cf6',
    category: 'mobile',
    link: 'https://github.com/Earbaj/simple_task_management_frontend',
    demoUrl: 'interactive'
  },
  {
    id: '4',
    title: 'File Manager Flutter',
    description: 'A professional file explorer built with Flutter for navigating device storage. Features recursive scanning, file type filtering, and real-time folder navigation while safely ignoring restricted system paths.',
    image: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1000&auto=format&fit=crop',
    tags: ['Flutter', 'Path Provider', 'Permission Handler', 'Open File'],
    mockupContent: 'Storage Explorer: Navigate, Filter & Manage Files',
    color: '#f59e0b',
    category: 'mobile',
    link: 'https://github.com/Earbaj/file_manager_flutter',
    demoUrl: 'interactive'
  },
  {
    id: '5',
    title: 'Employee Management API',
    description: 'Secure Node.js REST API for managing corporate employees. Implements JWT authentication, role-based access control, and full CRUD operations for employee records.',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    mockupContent: 'REST API: GET /api/v1/employees (200 OK)',
    color: '#38bdf8',
    category: 'backend',
    link: 'https://github.com/Earbaj/emplooyeeManagementApi/tree/master'
  },
  {
    id: '6',
    title: 'Simple Auth with JWT',
    description: 'Dedicated authentication service using JSON Web Tokens. Features registration, login, token refresh cycles, and secure middleware for protected routes.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    tags: ['Node.js', 'Express', 'JWT', 'Bcrypt'],
    mockupContent: 'Auth Microservice: User login & Token issuance',
    color: '#6366f1',
    category: 'backend',
    link: 'https://github.com/Earbaj/simpleAuthWithJwt'
  },
  {
    id: '7',
    title: 'Task Management Backend',
    description: 'Scalable backend for a task management system. Supports multiple users, task prioritization, status tracking, and deadline notifications via REST endpoints.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop',
    tags: ['Node.js', 'Express', 'MongoDB', 'CRUD'],
    mockupContent: 'Task Flow Engine: Management Logic & API',
    color: '#ec4899',
    category: 'backend',
    link: 'https://github.com/Earbaj/simple_taskmanagment'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Mobile Development',
    description: 'Expertise in high-performance cross-platform and native environments.',
    icon: '📱',
    skills: ['Flutter (Expert)', 'Dart', 'Kotlin (Native Android)', 'Swift (Native iOS)', 'Java', 'C++']
  },
  {
    title: 'Frontend Development',
    description: 'Creating modern, reactive web experiences and interactive dashboards.',
    icon: '💻',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion', 'TypeScript']
  },
  {
    title: 'Backend Development',
    description: 'Building scalable server-side logic and robust API architectures.',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'RESTful APIs', 'JWT', 'WebSockets', 'Socket.io']
  },
  {
    title: 'State Management',
    description: 'Advanced data flow control and predictable app states.',
    icon: '🔄',
    skills: ['BLoC', 'Riverpod', 'Provider', 'GetX', 'Redux']
  },
  {
    title: 'Databases',
    description: 'Storage solutions from local persistence to real-time cloud sync.',
    icon: '💾',
    skills: ['Firebase (Firestore, RTDB)', 'SQFlite', 'Hive', 'MongoDB', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'DevOps & Docker',
    description: 'Containerization, orchestration, and automated deployment pipelines.',
    icon: '🐳',
    skills: ['Docker (Expert)', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'GitLab CI', 'Fastlane']
  },
  {
    title: 'Architecture',
    description: 'Focus on maintainability, testability, and scalability.',
    icon: '🏗️',
    skills: ['Clean Architecture', 'MVVM', 'Repository Pattern', 'SOLID Principles']
  },
  {
    title: 'Tools & IDEs',
    description: 'Standard tools for efficient development and debugging.',
    icon: '🛠️',
    skills: ['Android Studio', 'Xcode', 'VS Code', 'Postman', 'Git / GitHub', 'Jira']
  }
];

export const OPEN_SOURCE = [
  { 
    name: 'Moneris Payment', 
    desc: 'A Flutter wrapper for seamless Moneris gateway integration.',
    url: 'https://pub.dev/packages/moneris_payment'
  },
  { 
    name: 'Custom Scaffold', 
    desc: 'Standardized UI development component for Flutter.',
    url: 'https://pub.dev/packages/custom_scaffold'
  },
  { 
    name: 'Generic List With Date', 
    desc: 'Organized date-grouped lists utility package.',
    url: 'https://pub.dev/packages/genericlistwithdate'
  }
];
