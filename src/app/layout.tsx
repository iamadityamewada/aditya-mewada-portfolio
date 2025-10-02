
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; 
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; 
import Navbar from '@/components/Navbar'; 
import BackToTopButton from '@/components/BackToTopButton'; 
import { cn } from '@/lib/utils'; 

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Aditya Mewada | Website Development Services | Freelance Web development Services | Website Developement",
  description: "Website Development Services by Aditya Mewada, a skilled Full Stack Developer specializing in React, Next.js, Node.js, Python, and FastAPI.",
  metadataBase: new URL('https://adityamewada.in'), 
  openGraph: {
    title: "Aditya Mewada | Website Development Services | Freelance Web development Services | Website Developement",
    description: "Website Development Services by Aditya Mewada, a skilled Full Stack Developer specializing in React, Next.js, Node.js, Python, and FastAPI.",
    url: 'https://adityamewada.in', 
    siteName: "Aditya Mewada | Website Development Services | Freelance Web development Services | Website Developement",
    images: [
      {
        url: 'profile.png', 
        width: 1200,
        height: 630,
        alt: 'Aditya Mewada | Website Development Services | Freelance Web development Services | Website Developement',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aditya Mewada | Website Development Services | Freelance Web development Services | Website Developement",
    description: "Aspiring Full Stack Developer specializing in React, Next.js, Node.js, Python, FastAPI.",
    images: ['https://placehold.co/1200x600.png'], 
  },
  keywords: ['Aditya Mewada', 'Web Development Services', 'Website Development Services', 'Freelance Web Development Services', 'React Developer', 'Next.js Developer', 'Node.js Developer', 'Python Developer', 'FastAPI Developer'],
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
