
"use client"; 
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, FolderGit2 } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <Section id={id} className="bg-background">
      <SectionTitle subtitle="Get To Know" className="text-foreground">About Me</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-transparent to-transparent p-1 shadow-lg">
             <div className="bg-background rounded-[calc(1.5rem-4px)] h-full w-full overflow-hidden"> 
                <Image
                    src="/profile.png" 
                    alt="Aditya Mewada"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    data-ai-hint="developer working code computer"
                />
             </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full max-w-lg lg:max-w-none">
            <Card className="bg-card hover:bg-secondary transition-colors text-center p-6 shadow-md">
              <CardHeader className="p-0 mb-3">
                <Award className="h-6 w-6 mx-auto text-primary" />
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-lg font-semibold mb-1">Experience</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  1+ Years Working <br/>(Including Internships)
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-card hover:bg-secondary transition-colors text-center p-6 shadow-md">
              <CardHeader className="p-0 mb-3">
                <FolderGit2 className="h-6 w-6 mx-auto text-primary" />
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-lg font-semibold mb-1">Projects</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  5+ Completed <br/> & 4+ Deployed
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
             Aspiring Full Stack Developer with a strong foundation in JavaScript, React, Node.js, Python, and FastAPI. Experienced in building responsive web applications and RESTful APIs during my internship at Tech SimPlus Learning. Eager to leverage my skills to create innovative and scalable software solutions in a challenging tech environment. Based in Bhopal, India.
          </p>

          <Button asChild size="lg" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
             <Link href="/contact">Let's Talk</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
