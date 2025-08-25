"use client";

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string[];
  isLast?: boolean;
  companyLogo?: string;
}

export function ExperienceCard({ company, position, duration, location, description, isLast = false, companyLogo }: ExperienceCardProps) {

  return (
    <div className="flex gap-6 relative">
      {/* Timeline line and square */}
      <div className="flex flex-col items-center">
        {/* Square marker */}
        <div className="w-4 h-4 bg-white border-2 border-white shadow-sm z-10 relative" />
        
        {/* Vertical line */}
        {!isLast && (
          <div className="w-1 h-full bg-white mt-2 min-h-[100px]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-primary border border-border p-6 relative">
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

          {/* Content */}
          <div className="relative z-10">
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4">
                {companyLogo && (
                  <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <img 
                      src={companyLogo} 
                      alt={`${company} logo`}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Pixelated border - matching project image style */}
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
                                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white retro mb-1">{position}</h3>
                  <p className="text-lg text-white/70 font-semibold retro mb-2">{company}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-sm text-white/70 retro bg-white/10 px-3 py-1 border border-white/70">
                      {duration}
                    </span>
                    {location && (
                      <span className="text-sm text-white/70 retro bg-white/10 px-3 py-1 border border-white/70">
                        {location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <ul className="list-disc list-inside space-y-2">
                {description.map((item, index) => (
                  <li key={index} className="text-sm text-white/70 retro leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
