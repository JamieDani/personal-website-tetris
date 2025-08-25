import projectsData from '@/data/projects.json';

export interface Project {
  id: number;
  projectName: string;
  projectDescription: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  projectImage?: string | null;
}

export function getProjects(): Project[] {
  return projectsData as Project[];
}
