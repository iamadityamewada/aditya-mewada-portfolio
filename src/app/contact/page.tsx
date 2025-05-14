// src/app/contact/page.tsx
import ContactSection from '@/components/sections/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Aditya Mewada | Software Developer Portfolio",
  description: "Get in touch with Aditya Mewada for collaborations, opportunities, or any inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection id="contact" />
    </main>
  );
}
