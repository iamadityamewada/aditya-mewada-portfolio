// src/app/about/page.tsx
import AboutSection from '@/components/sections/AboutSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Aditya Mewada | Web Development Services | Website Development Sevices | Freelance Webdevelopment Services",
  description: "Learn more about Aditya Mewada, an aspiring Full Stack Developer specializing in React, Next.js, Node.js, Python, and FastAPI.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection id="about" />
    </main>
  );
}
