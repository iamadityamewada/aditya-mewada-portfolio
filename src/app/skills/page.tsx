// src/app/skills/page.tsx
import SkillsSection from '@/components/sections/SkillsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Skills | Aditya Mewada - Software Developer Portfolio",
  description: "Explore the technical skills of Aditya Mewada, including Frontend, Backend, and other technologies.",
};

export default function SkillsPage() {
  return (
    <main>
      <SkillsSection id="skills" />
    </main>
  );
}
