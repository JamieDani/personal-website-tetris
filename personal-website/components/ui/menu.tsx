"use client";

import { Button } from "@/components/ui/8bit/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/8bit/dropdown-menu";

interface MenuProps {
  className?: string;
}

export function Menu({ className }: MenuProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const menuItems = [
    { id: 'title1', label: 'About Me' },
    { id: 'title2', label: 'Experience' },
    { id: 'title3', label: 'Projects' },
    { id: 'title4', label: 'Art Gallery' },
  ];

  return (
    <nav className={`fixed top-6 z-50 lg:left-1/2 lg:transform lg:-translate-x-1/2 left-5 ${className}`}>
      {/* Desktop menu - hidden on small screens */}
      <div className="hidden lg:flex gap-20 p-2 rounded-lg">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            size="sm"
            className="text-xs"
          >
            {item.label}
          </Button>
        ))}
      </div>

      {/* Mobile dropdown menu - visible on small screens */}
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" className="text-xs p-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="2" width="16" height="2" fill="currentColor"/>
                <rect y="7" width="16" height="2" fill="currentColor"/>
                <rect y="12" width="16" height="2" fill="currentColor"/>
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menuItems.map((item) => (
              <DropdownMenuItem
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs"
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
} 