// src/app/projects/page.tsx
import ProjectsSection from '@/components/sections/ProjectsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects | Aditya Mewada - Software Developer Portfolio",
  description: "Browse through the projects developed by Aditya Mewada, showcasing his skills in web development.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsSection id="projects" />
    </main>
  );
}
