"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card"
import { Badge } from "@/components/ui/8bit/badge"

interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  projectImage?: string;
}

export function ProjectCard({ projectName, projectDescription, techStack, githubLink, demoLink, projectImage }: ProjectCardProps) {

  return (
    <Card>
      <CardHeader>
        <CardTitle>{projectName}</CardTitle>
        <CardDescription>{projectDescription}</CardDescription>
      </CardHeader>
            <CardContent>
        <div className="flex flex-col gap-6">
          {projectImage && (
            <div className="relative w-full h-74 bg-black flex items-center justify-center">
              <img 
                src={projectImage} 
                alt={`${projectName} screenshot`}
                className="w-full h-full object-cover"
              />
              
              {/* Pixelated border - matching card style */}
              <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-border" />
              <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-border" />
              <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-border" />
              <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-border" />
              <div className="absolute top-0 left-0 size-1.5 bg-border" />
              <div className="absolute top-0 right-0 size-1.5 bg-border" />
              <div className="absolute bottom-0 left-0 size-1.5 bg-border" />
              <div className="absolute bottom-0 right-0 size-1.5 bg-border" />
              <div className="absolute top-1.5 -left-1.5 h-2/3 w-1.5 bg-border" />
              <div className="absolute top-1.5 -right-1.5 h-2/3 w-1.5 bg-border" />
            </div>
          )}
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-row gap-2 items-center">
              <p className="text-xs text-white retro text-left">Tech Stack</p>
              <p className="text-[10px] opacity-70 text-white retro text-left">
                {techStack.join(", ")}
              </p>
            </div>
            <div className="flex flex-row gap-5 justify-center">
              {githubLink && (
              <Badge variant="default" className="bg-white border-white text-foreground">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Badge>)}
              {demoLink && (
              <Badge variant="default" className="bg-white border-white text-foreground">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              </Badge>)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 