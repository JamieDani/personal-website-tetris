import Image from "next/image";
import { Menu } from "@/components/ui/menu"
import { Badge } from "@/components/ui/8bit/badge"
import { ProjectCard } from "@/components/ui/projectcard";
import { ExperienceCard } from "@/components/ui/experiencecard";
import ProfileCarousel from "@/components/ui/profile-carousel";
import { getProjects } from "@/lib/projects";
import { getExperiences } from "@/lib/experiences";
import ArtGallery from "@/components/ui/art-gallery";

export default function Home() {
  const projects = getProjects();
  const experiences = getExperiences();
  return (
    <div className="bg-background">
      <Menu />
      
      <Image 
            src="/name.png" 
            alt="Name" 
            width={1920} 
            height={640} 
            className="w-full mb-6"
          />

      {/* Sections for smooth scrolling */}
      <section id="title1" className="min-h-screen flex flex-col pt-20">
        <div className="text-center ml-[10%] mr-[10%] mb-5">
          <h2 className="text-4xl font-bold mb-3 text-white retro">About Me</h2>
          <p className="text-lg text-white retro mb-4">Who I am and what I do.</p>
        </div>

        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full">
            {/* Character Card */}
            <div className="bg-primary border border-border p-8 relative">
              {/* Pixelated border effect */}
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

              <div className="relative z-10">
                {/* Header with Profile Picture and Name */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-8">
                  {/* Profile Picture Column */}
                  <div className="flex flex-col items-center">
                    {/* Profile Picture */}
                    <ProfileCarousel />
                  </div>

                  {/* Name, Quote, and Social Links */}
                  <div className="flex flex-col items-center lg:items-start lg:pl-8">
                    <h1 className="text-3xl font-bold text-white retro mb-2 text-center lg:text-left">Jamie Calub</h1>
                    <p className="text-white/60 retro text-lg mb-4 text-center lg:text-left">Computer Science Bachelor&apos;s @ Stony Brook University</p>
                    
                    {/* Speech Bubble */}
                    <div className="mb-4 w-full max-w-lg">
                      <div className="bg-white/10 border border-white p-4 relative">
                        <div className="text-white retro text-sm leading-relaxed">
                          &ldquo;Hi! I&apos;m Jamie. You can probably find me in the Old Computer Science club closet eating a Taco Bell chalupa.&rdquo;
                        </div>
                        
                        {/* Speech bubble tail */}
                        <div className="absolute -left-2 top-4 w-4 h-4 bg-white/10 border-l border-b border-white transform rotate-45"></div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-5 mb-4">
                      <Badge variant="default" className="bg-white/30">
                        <span className="text-white retro text-xs"><a href="https://www.linkedin.com/in/jamie-calub/" target="_blank">LinkedIn</a></span>
                      </Badge>
                      <Badge variant="default" className="bg-white/30">
                        <span className="text-white retro text-xs"><a href="https://github.com/JamieDani" target="_blank">GitHub</a></span> 
                      </Badge>
                    </div>
                  </div>
                </div>



                {/* Badges and Achievements */}
                <div className="mb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h3 className="text-white retro font-bold text-xl mb-4">Current Positions</h3>
                      <div className="flex flex-wrap gap-3">
                        <div className="bg-white/10 border border-white px-4 py-2 flex items-center gap-2">
                          <div className="w-4 h-4 bg-orange-400 border border-white"></div>
                          <span className="text-white retro text-sm">SPIN Intern @ UIUC</span>
                        </div>
                        <div className="bg-white/10 border border-white px-4 py-2 flex items-center gap-2">
                          <div className="w-4 h-4 bg-purple-400 border border-white"></div>
                          <span className="text-white retro text-sm">VP @ Women in CS</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white retro font-bold text-xl mb-4">Hackathon Wins</h3>
                      <div className="flex flex-wrap gap-3">
                        <div className="bg-white/10 border border-white px-4 py-2 flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-500 border border-white"></div>
                          <span className="text-white retro text-sm">SBUHacks</span>
                        </div>
                        <div className="bg-white/10 border border-white px-4 py-2 flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-500 border border-white"></div>
                          <span className="text-white retro text-sm">HackHarvard</span>
                        </div>
                        <div className="bg-white/10 border border-white px-4 py-2 flex items-center gap-2">
                          <div className="w-4 h-4 bg-yellow-500 border border-white"></div>
                          <span className="text-white retro text-sm">Hack@CEWIT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-white retro font-bold text-xl mb-4">College Progress</h3>
                  <div className="bg-white/10 border border-white p-4">
                    <div className="text-left mb-3">
                      <span className="text-white retro font-bold text-lg">LVL 3: Junior</span>
                    </div>
                    <div className="flex justify-between text-xs text-white/70 retro mb-2">
                      <span>2023</span>
                      <span>2027</span>
                    </div>
                    <div className="relative w-full h-4 bg-black/20 border border-white mb-2">
                      <div className="absolute top-0 left-0 h-full bg-blue-400 w-[55%]"></div>
                      
                      {/* Year markers */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-white"></div>
                      <div className="absolute top-0 left-1/4 w-1 h-full bg-white"></div>
                      <div className="absolute top-0 left-1/2 w-1 h-full bg-white"></div>
                      <div className="absolute top-0 left-3/4 w-1 h-full bg-white"></div>
                      <div className="absolute top-0 right-0 w-1 h-full bg-white"></div>
                      
                      {/* Current position indicator */}
                    </div>
                    <div className="flex justify-between text-xs text-white/70 retro pl-10 pr-10">
                      <span className="hidden sm:inline">Freshman</span>
                      <span className="sm:hidden">1st</span>
                      <span className="hidden sm:inline">Sophomore</span>
                      <span className="sm:hidden">2nd</span>
                      <span className="hidden sm:inline">Junior</span>
                      <span className="sm:hidden">3rd</span>
                      <span className="hidden sm:inline">Senior</span>
                      <span className="sm:hidden">4th</span>
                    </div>
                  </div>
                </div>

                {/* Basic Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 border border-white p-4">
                    <h3 className="text-white retro font-bold text-lg mb-3">Basic Stats</h3>
                    <div className="flex flex-col gap-4 text-sm">
                      <div className="flex justify-start gap-4">
                        <span className="text-white/70 retro">Age:</span>
                        <span className="text-white retro">20</span>
                      </div>
                      <div className="flex justify-start gap-4">
                        <span className="text-white/70 retro">Hometown:</span>
                        <span className="text-white retro">Upstate NY</span>
                      </div>
                      <div className="flex justify-start gap-4">
                        <span className="text-white/70 retro">Interests:</span>
                        <span className="text-white retro">ML/AI, Mobile Development, Healthcare</span>
                      </div>
                      <div className="flex justify-start gap-4">
                        <span className="text-white/70 retro">Background:</span>
                        <span className="text-white retro">Filipina Chinese</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 border border-white p-4">
                    <h3 className="text-white retro font-bold text-lg mb-3">Likes</h3>
                    <div className="flex flex-col gap-4 text-sm">
                      <div className="flex justify-start gap-4">
                        <span className="text-white/70 retro">Music:</span>
                        <span className="text-white retro">Beatles, Green Day, KPop Demon Hunters, Broadway</span>
                      </div>
                      <div className="flex justify-start gap-4">
                        <span className="text-white/70 retro">Games:</span>
                        <span className="text-white retro">Tetris, Undertale, Minecraft, Hollow Knight</span>
                      </div>
                      <div className="flex justify-start gap-4">
                        <span className="text-white/70 retro">Hobbies:</span>
                        <span className="text-white retro">Singing, Drawing/Animating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="title2" className="min-h-screen flex flex-col pt-20">
        <div className="text-center ml-[10%] mr-[10%] mb-10">
          <h2 className="text-4xl font-bold mb-4 text-white retro">Experience</h2>
          <p className="text-lg text-white retro mb-10">My professional journey.</p>
        </div>

        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col max-w-4xl">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="w-full">
                <ExperienceCard 
                  company={experience.company}
                  position={experience.position}
                  duration={experience.duration}
                  location={experience.location}
                  description={experience.description}
                  companyLogo={experience.companyLogo}
                  isLast={index === experiences.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="title3" className="min-h-screen flex flex-col pt-20">
        <div className="text-center ml-[10%] mr-[10%] mb-10">
          <h2 className="text-4xl font-bold mb-4 text-white retro">Projects</h2>
          <p className="text-lg text-white retro">Stuff I&apos;ve helped build.</p>
        </div>

        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <div key={project.id} className="w-full max-w-[500px]">
                <ProjectCard 
                  projectName={project.projectName}
                  projectDescription={project.projectDescription}
                  techStack={project.techStack}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  projectImage={project.projectImage || undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="title4" className="min-h-screen flex flex-col pt-20">
        <div className="text-center ml-[10%] mr-[10%] mb-10">
          <h2 className="text-4xl font-bold mb-4 text-white retro">Art Gallery</h2>
          <p className="text-lg text-white retro">Ducks. Lots of ducks.</p>
        </div>
        
        <ArtGallery />
      </section>
    </div>
  );
}
