
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react'; // Use a check icon

interface SkillItem {
  name: string;
  level: string; // e.g., 'Experienced', 'Intermediate', 'Basic'
}

interface SkillsCategory {
  title: string;
  skills: SkillItem[];
}

// More detailed skills data structure
const skillsData: SkillsCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', level: 'Experienced' },
      { name: 'CSS', level: 'Experienced' },
      { name: 'JavaScript', level: 'Experienced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'React.js', level: 'Experienced' },
      { name: 'Next.js', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Experienced' },
      { name: 'Bootstrap', level: 'Intermediate' },
      { name: 'Responsive Design', level: 'Experienced' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 'Experienced' },
      { name: 'Express.js', level: 'Experienced' },
      { name: 'Python', level: 'Experienced' },
      { name: 'FastAPI', level: 'Experienced' },
      { name: 'Django REST (Basic)', level: 'Basic' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Experienced' },
      { name: 'JWT Authentication', level: 'Intermediate' },
    ],
  },
   {
    title: 'Tools & Deployment',
    skills: [
       { name: 'Git & Github', level: 'Experienced' },
       { name: 'Docker (Basic)', level: 'Basic' },
       { name: 'Vercel', level: 'Experienced' },
       { name: 'Railway', level: 'Intermediate' },
       { name: 'Postman', level: 'Experienced' },
       { name: 'VS Code', level: 'Experienced' },
       { name: 'GenAI Tools', level: 'Familiar' }, // ChatGPT, Gemini etc.
    ],
   },
   {
     title: 'Other Skills',
     skills: [
       { name: 'Problem Solving', level: 'Strong' },
       { name: 'Team Collaboration', level: 'Experienced' },
       { name: 'Agile (Basic)', level: 'Familiar' },
       { name: 'Data Structures (Basic)', level: 'Familiar' },
     ],
   }
];

interface SkillsSectionProps {
  id: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ id }) => {
  return (
    <Section id={id} className="bg-secondary"> {/* Slightly different background */}
      <SectionTitle subtitle="What Skills I Have" className="text-foreground">My Skills</SectionTitle>

      {/* Grid for skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category) => (
          <Card key={category.title} className="bg-card border-primary/30 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <CardHeader className="pb-4 pt-6"> {/* Adjusted padding */}
              <CardTitle className="text-xl font-semibold text-primary text-center">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Grid for individual skills within the category */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {category.skills.map((skill) => (
                  <article key={skill.name} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground leading-tight">{skill.name}</h4>
                      <small className="text-muted-foreground text-xs">{skill.level}</small>
                    </div>
                  </article>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
