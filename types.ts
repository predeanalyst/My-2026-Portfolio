
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  highlights?: string[];
  businessGoals?: { label: string; title: string; content: string }[];
  foundationalGoals?: { label: string; title: string; content: string }[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  link?: string;
  category?: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  detail?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}
