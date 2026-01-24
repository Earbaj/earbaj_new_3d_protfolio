
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  mockupContent: string;
  color: string;
  category: 'mobile' | 'backend' | 'web';
  link?: string;
  demoUrl?: string; // Link to a video or Flutter Web build
}

export interface SkillCategory {
  title: string;
  skills: string[];
  description: string;
  icon: string;
}
