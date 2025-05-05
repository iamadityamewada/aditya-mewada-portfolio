
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter font for clean look
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import Navbar from '@/components/Navbar'; // Import Navbar
import BackToTopButton from '@/components/BackToTopButton'; // Import BackToTopButton
import { cn } from '@/lib/utils'; // Import cn utility

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

// SEO Metadata
export const metadata: Metadata = {
  title: "Aditya Mewada | Software Developer Portfolio",
  description: "Aspiring Full Stack Developer specializing in React, Next.js, Node.js, Python, FastAPI. Explore my projects and skills.",
  metadataBase: new URL('https://adityamewada.in'), // Replace with actual domain
  openGraph: {
    title: "Aditya Mewada | Software Developer Portfolio",
    description: "Aspiring Full Stack Developer specializing in React, Next.js, Node.js, Python, FastAPI. Explore my projects and skills.",
    url: 'https://adityamewada.in', // Replace with actual domain
    siteName: "Aditya Mewada Portfolio",
    images: [
      {
        // Provide a suitable OG image URL
        url: 'https://picsum.photos/seed/ogimage/1200/630', // Replace with your actual OG image URL
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
    // Add Twitter handle if available: creator: '@yourTwitterHandle',
    images: ['https://picsum.photos/seed/twitterimage/1200/600'], // Replace with your actual Twitter image URL
  },
  // Add other relevant metadata like keywords if desired
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'Portfolio', 'Web Developer', 'Aditya Mewada'],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add 'dark' class to html tag for default dark mode
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(
          `${inter.variable} font-sans antialiased bg-background text-foreground`,
          // Add any other body classes if needed
        )}>
        <Navbar /> {/* Add Navbar component */}
        {children}
        <Toaster /> {/* Add Toaster component here */}
        <BackToTopButton /> {/* Add BackToTopButton */}
      </body>
    </html>
  );
}
