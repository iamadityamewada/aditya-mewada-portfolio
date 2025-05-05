
"use client"; // Required for onClick handlers and client-side scrolling

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react'; // Keep relevant icons
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

   const footerNavItems = [
     { label: 'Home', href: '#home' },
     { label: 'About', href: '#about' },
     { label: 'Skills', href: '#skills' },
     { label: 'Experience', href: '#experience' },
     { label: 'Projects', href: '#projects' },
     { label: 'Contact', href: '#contact' },
   ];

  return (
    <footer className="bg-gradient-to-r from-primary/80 via-accent/80 to-primary/80 py-12 text-primary-foreground"> {/* Gradient Background */}
      <div className="container mx-auto px-4 text-center">
        {/* Logo/Brand */}
        <Link href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-3xl font-bold mb-8 inline-block hover:opacity-80 transition-opacity">
          AdityaMewada.dev
        </Link>

        {/* Footer Navigation */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 text-sm font-medium">
           {footerNavItems.map((item) => (
            <li key={item.href}>
                <Link
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="hover:text-background transition-colors" // Adjust hover color
                >
                {item.label}
                </Link>
            </li>
           ))}
        </ul>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-10">
           <a href="https://github.com/iamadityamewada" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-2 bg-background text-primary rounded-lg hover:bg-background/80 transition-colors">
             <Github className="h-5 w-5" />
           </a>
           <a href="https://www.linkedin.com/in/iamadityamewada" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-2 bg-background text-primary rounded-lg hover:bg-background/80 transition-colors">
             <Linkedin className="h-5 w-5" />
           </a>
           <a href="mailto:er.adityamewada@gmail.com" aria-label="Email" className="p-2 bg-background text-primary rounded-lg hover:bg-background/80 transition-colors">
             <Mail className="h-5 w-5" />
           </a>
           {/* Add other relevant social links (Twitter, etc.) here if desired */}
        </div>

        {/* Copyright */}
        <p className="text-xs text-background"> {/* Adjusted text color */}
          &copy; {currentYear} Aditya Mewada. All rights reserved.
        </p>
         <p className="text-xs mt-1 text-background/80"> {/* Adjusted text color */}
           Inspired design. Built with Next.js & Tailwind CSS.
         </p>
      </div>
    </footer>
  );
};

export default Footer;
