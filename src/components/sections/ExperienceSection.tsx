
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  duration: string;
  descriptionPoints: string[];
}

interface EducationItem {
    degree: string;
    institution: string;
    duration: string;
    result: string; // CGPA or Percentage
}

const workExperience: ExperienceItem[] = [
 {
    title: 'Full Stack Developer Intern',
    company: 'Tech SimPlus Learning',
    location: 'Bhopal',
    duration: 'Nov 2024 – Feb 2025',
    descriptionPoints: [
      'Developed and maintained frontend components using React.js & Next.js.',
      'Integrated RESTful APIs built with FastAPI and Node.js for CRUD operations.',
      'Implemented JWT-based user authentication and authorization.',
      'Collaborated in an Agile environment for feature development.',
    ],
  },
  {
    title: 'Virtual Internship Trainee – Networking',
    company: 'Cisco Networking Academy',
    location: 'Remote',
    duration: 'Aug 2024',
    descriptionPoints: [
      'Acquired practical knowledge of fundamental networking concepts.',
      'Configured and simulated network topologies using Cisco Packet Tracer.',
      'Troubleshot common network connectivity issues.',
    ],
  },
];

const educationExperience: EducationItem[] = [
 {
    degree: 'Masters of Computer Application (MCA)',
    institution: 'Lakshmi Narain College of Technology, Bhopal',
    duration: '2023 - 2025',
    result: '8.51 CGPA',
 },
 {
    degree: 'Bachelor of Science (B.Sc.) - Computer Science',
    institution: 'C.S.A Govt. P.G. Lead College, Sehore',
    duration: '2020 - 2023',
    result: '67%',
 },
 {
    degree: 'Higher Secondary School (XII)',
    institution: 'The Oxford Convent H.S, Sehore',
    duration: '2020',
    result: '80%',
 },
  {
    degree: 'Secondary School (X)',
    institution: 'The Oxford Convent H.S, Sehore',
    duration: '2018',
    result: '83.6%',
 },
];

interface ExperienceSectionProps {
  id: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id }) => {
  return (
    <Section id={id} className="bg-background">
      <SectionTitle subtitle="What I've Done So Far" className="text-foreground">My Experience & Education</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Work Experience Column */}
        <Card className="bg-card border-primary/30 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
          <CardHeader className="pb-4 pt-6">
            <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2 justify-center">
              <Briefcase className="h-5 w-5" /> Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {workExperience.map((exp, index) => (
              <div key={index} className="pl-4 border-l-2 border-primary/50 relative pb-4 last:pb-0 last:border-l-0">
                 <span className="absolute -left-[11px] top-1 h-5 w-5 bg-primary rounded-full border-4 border-background"></span>
                 <h3 className="font-semibold text-foreground text-lg mb-1">{exp.title}</h3>
                 <p className="text-sm text-primary font-medium">{exp.company} {exp.location ? `- ${exp.location}` : ''}</p>
                 <p className="text-xs text-muted-foreground mb-2">{exp.duration}</p>
                 <ul className="list-none space-y-1 pl-1">
                    {exp.descriptionPoints.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education Column */}
        <Card className="bg-card border-primary/30 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
          <CardHeader className="pb-4 pt-6">
            <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2 justify-center">
              <GraduationCap className="h-5 w-5" /> Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {educationExperience.map((edu, index) => (
              <div key={index} className="pl-4 border-l-2 border-primary/50 relative pb-4 last:pb-0 last:border-l-0">
                <span className="absolute -left-[11px] top-1 h-5 w-5 bg-primary rounded-full border-4 border-background"></span>
                <h3 className="font-semibold text-foreground text-lg mb-1">{edu.degree}</h3>
                <p className="text-sm text-primary font-medium">{edu.institution}</p>
                <p className="text-xs text-muted-foreground mb-1">{edu.duration}</p>
                <p className="text-sm text-muted-foreground">Result: {edu.result}</p>
              </div>
            ))}
             {/* Optional: Add Certifications Here */}
             <div className="pl-4 relative pt-4 mt-4 border-t border-border">
                <h3 className="font-semibold text-foreground text-lg mb-2">Certifications</h3>
                 <ul className="list-none space-y-1">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0"/><span>Python, JavaScript, SQL (HackerRank)</span></li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0"/><span>Responsive Web Designer (FreeCodeCamp)</span></li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0"/><span>Networking Essentials (Cisco)</span></li>
                 </ul>
             </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default ExperienceSection;
