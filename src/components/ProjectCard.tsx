
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/types';
import { cn } from '@/lib/utils'; // Import cn

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, techStack, github, githubFrontend, githubBackend, liveDemo, imageUrl, aiHint } = project;

  return (
    <Card className={cn(
        "flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 h-full",
        "bg-card border border-primary/30 rounded-2xl" // Updated styles for dark theme
     )}>
      <CardHeader className="p-0 rounded-t-2xl overflow-hidden">
        <div className="aspect-video relative w-full group"> {/* Added group for hover effect */}
          <Image
            src={imageUrl || 'https://picsum.photos/600/400'} // Fallback image
            alt={`${title} screenshot`}
            fill // Use fill instead of layout="fill"
            style={{ objectFit: 'cover' }} // Use style object for objectFit with fill
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={aiHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> {/* Subtle overlay on hover */}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 text-foreground">{title}</CardTitle> {/* Changed to foreground */}
        <CardDescription className="text-muted-foreground mb-4 text-sm">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4"> {/* Added margin bottom */}
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-secondary/50 text-secondary-foreground/80">{tech}</Badge> // Adjusted badge style
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-start items-center gap-3"> {/* Adjusted alignment and gap */}
         {/* Combined GitHub Links */}
         {(github || githubFrontend) && (
           <Button asChild variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href={github || githubFrontend!} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub Repository`}>
                <Github className="mr-1 h-4 w-4" /> {githubFrontend ? 'Frontend' : 'GitHub'}
            </Link>
            </Button>
         )}
         {githubBackend && (
            <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
            <Link href={githubBackend} target="_blank" rel="noopener noreferrer" aria-label={`${title} Backend GitHub Repository`}>
                <Github className="mr-1 h-4 w-4" /> Backend
            </Link>
            </Button>
         )}
         {/* Live Demo Link */}
         {liveDemo && (
           <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
             <Link href={liveDemo} target="_blank" rel="noopener noreferrer" aria-label={`${title} Live Demo`}>
               Live Demo <ExternalLink className="ml-1 h-4 w-4" />
             </Link>
           </Button>
         )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
