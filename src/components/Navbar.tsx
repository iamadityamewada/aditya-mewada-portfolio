
"use client";

import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation'; // Import usePathname

interface NavItem {
  label: string;
  href: string;
}

// Updated navItems for separate pages
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo/Brand - Link to home page */}
        <Link href="/" onClick={closeMobileMenu} className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          AdityaMewada.in
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium hover:text-primary transition-colors',
                pathname === item.href ? 'text-primary nav-link-active' : 'text-foreground/80'
              )}
            >
              {item.label}
            </Link>
          ))}
           <Button asChild variant="outline" size="sm" className="ml-4 border-primary text-primary hover:bg-primary/10">
              <a href="https://drive.google.com/drive/folders/1u-3O0F5wKaK6ouQpt-pO7K9GEuck5aw_" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-background p-4">
               <div className="flex justify-between items-center mb-6">
                 <Link href="/" onClick={closeMobileMenu} className="text-xl font-bold text-primary">
                    AdityaMewada.in
                 </Link>
                 <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                   <X className="h-6 w-6" />
                   <span className="sr-only">Close menu</span>
                 </Button>
               </div>
               <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu} 
                    className={cn(
                      'text-lg font-medium hover:text-primary transition-colors text-center py-2 rounded',
                       pathname === item.href ? 'text-primary bg-primary/10' : 'text-foreground/90'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                 <Button asChild variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10 mt-4">
                  <a href="https://drive.google.com/drive/folders/1u-3O0F5wKaK6ouQpt-pO7K9GEuck5aw_" target="_blank" rel="noopener noreferrer">Resume</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
