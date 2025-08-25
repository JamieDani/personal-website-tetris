import experiencesData from '@/data/experiences.json';

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string[];
  companyLogo?: string;
}

export function getExperiences(): Experience[] {
  return experiencesData as Experience[];
}
