
"use client"; // Required for useEffect and potentially animations

import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react"; // Replaced Phone with FileText for resume
import Link from "next/link";
import Image from 'next/image';
import Section from '@/components/ui/Section'; // Use Section component
import { cn } from '@/lib/utils'; // Import cn

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  // Smooth scroll for internal links
   const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
     e.preventDefault();
     const targetId = href.substring(1);
     const targetElement = document.getElementById(targetId);
     if (targetElement) {
       const navbarHeight = document.querySelector('nav')?.clientHeight || 64;
       const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
       const offsetPosition = elementPosition - navbarHeight;

       window.scrollTo({
         top: offsetPosition,
         behavior: 'smooth'
       });
     }
   };

  return (
    // Apply animated gradient and ensure full height centering
    <Section
      id={id}
      className={cn(
        "animated-gradient relative overflow-hidden min-h-screen flex items-center justify-center py-20 md:py-0", // Adjusted padding for centered content
        // Remove background color from Section if defined, let gradient handle it
        "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
         {/* Image/Illustration */}
        <div className="md:w-1/3 lg:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
           <Image
            src="https://picsum.photos/seed/profilepic/400/400" // Placeholder image
            alt="Aditya Mewada Profile Picture"
            width={400}
            height={400}
            className="rounded-full shadow-lg border-4 border-primary object-cover w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
            data-ai-hint="professional developer portrait circle"
            priority // Load image sooner
          />
        </div>

        {/* Text Content */}
        <div className="md:w-2/3 lg:w-1/2 space-y-4 order-2 md:order-1">
          <p className="text-lg sm:text-xl text-accent font-medium">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Aditya Mewada
          </h1>
           {/* Typing effect placeholder - Implement with a library like react-type-animation if desired */}
           <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-primary">
            Full Stack Developer
           </p>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0">
            Passionate about crafting seamless web experiences. Exploring the frontiers of technology with code.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 transition-smooth">
               <Link href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Let's Talk</Link>
            </Button>
          </div>
           <div className="flex justify-center md:justify-start space-x-5 pt-6">
             <Link href="https://github.com/iamadityamewada" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-foreground hover:text-primary transition-smooth">
               <Github className="h-7 w-7" />
             </Link>
             <Link href="https://www.linkedin.com/in/iamadityamewada" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-foreground hover:text-primary transition-smooth">
               <Linkedin className="h-7 w-7" />
             </Link>
             <Link href="mailto:er.adityamewada@gmail.com" aria-label="Email" className="text-foreground hover:text-primary transition-smooth">
               <Mail className="h-7 w-7" />
             </Link>
             {/* Link to Resume PDF */}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="View Resume" className="text-foreground hover:text-primary transition-smooth">
               <FileText className="h-7 w-7" />
             </a>
           </div>
        </div>
      </div>
        {/* Optional: Subtle geometric patterns or shapes */}
        {/* <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div> */}
        {/* Removed styled-jsx grid pattern */}
    </Section>
  );
};

export default HeroSection;
