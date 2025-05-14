// src/app/experience/page.tsx
import ExperienceSection from '@/components/sections/ExperienceSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Experience | Aditya Mewada - Software Developer Portfolio",
  description: "Discover Aditya Mewada's work experience and educational background in software development.",
};

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceSection id="experience" />
    </main>
  );
}
