
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; 
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; 
import Navbar from '@/components/Navbar'; 
import BackToTopButton from '@/components/BackToTopButton'; 
import { cn } from '@/lib/utils'; 

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Aditya Mewada | Software Developer Portfolio",
  description: "Aspiring Full Stack Developer specializing in React, Next.js, Node.js, Python, FastAPI. Explore my projects and skills.",
  metadataBase: new URL('https://adityamewada.in'), 
  openGraph: {
    title: "Aditya Mewada | Software Developer Portfolio",
    description: "Aspiring Full Stack Developer specializing in React, Next.js, Node.js, Python, FastAPI. Explore my projects and skills.",
    url: 'https://adityamewada.in', 
    siteName: "Aditya Mewada Portfolio",
    images: [
      {
        url: 'https://placehold.co/1200x630.png', 
        width: 1200,
        height: 630,
        alt: 'Aditya Mewada Portfolio Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aditya Mewada | Software Developer Portfolio",
    description: "Aspiring Full Stack Developer specializing in React, Next.js, Node.js, Python, FastAPI.",
    images: ['https://placehold.co/1200x600.png'], 
  },
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'Portfolio', 'Web Developer', 'Aditya Mewada'],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(
          `${inter.variable} font-sans antialiased bg-background text-foreground`,
        )}>
        <Navbar /> 
        {children}
        <Toaster /> 
        <BackToTopButton /> 
      </body>
    </html>
  );
}
