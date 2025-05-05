
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/types'; // Assuming Project type definition

const projects: Project[] = [
  {
    title: 'GroceryWise - Grocery Management App',
    description: 'A full-stack grocery management app with CRUD operations and user authentication.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
    githubFrontend: 'https://github.com/iamadityamewada/grocerywise_frontend',
    githubBackend: 'https://github.com/iamadityamewada/grocerywise_backend',
    liveDemo: 'https://grocerywise.adityamewada.in/',
    imageUrl: 'https://picsum.photos/seed/grocerywise/600/400',
    aiHint: 'grocery shopping list app interface', // Updated hint
  },
  {
    title: 'BlogHub - MERN Blogging Platform',
    description: 'Developed a full-stack blog application enabling users to create, edit, and delete blog posts. Implemented user authentication with JWT and integrated CRUD functionality.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'JWT'],
    github: 'https://github.com/iamadityamewada/BlogHub',
    liveDemo: 'https://bloghub-rho.vercel.app',
    imageUrl: 'https://picsum.photos/seed/bloghub/600/400',
     aiHint: 'blog platform interface dark theme', // Updated hint
  },
  {
    title: 'Detectify – Image Detection Web App (Frontend)',
    description: 'Built a responsive React.js frontend for an image detection app, enabling users to upload images and view real-time object and face recognition using AWS Rekognition API.',
    techStack: ['React.js', 'JavaScript', 'REST API', 'UI/UX Design', 'AWS Rekognition'],
    github: 'https://github.com/iamadityamewada/Detectify',
    liveDemo: 'https://detectify-react.vercel.app/',
    imageUrl: 'https://picsum.photos/seed/detectify/600/400',
     aiHint: 'image recognition technology interface', // Updated hint
  },
   {
    title: 'Personal Portfolio Website (This one!)', // Updated title
    description: 'Developed a fast, responsive portfolio using Next.js, Tailwind CSS, and TypeScript to showcase projects and technical skills, with smooth navigation and clean UI/UX.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Responsive Design'], // Added ShadCN
    github: 'https://github.com/iamadityamewada/aditya-mewada-portfolio',
    liveDemo: 'https://adityamewada.in/', // Should be the current site
    imageUrl: 'https://picsum.photos/seed/portfolio/600/400',
    aiHint: 'modern web developer portfolio dark', // Updated hint
  },
  // Add more projects as needed
];

interface ProjectsSectionProps {
  id: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id }) => {
  return (
    <Section id={id} className="bg-secondary"> {/* Match background */}
      <SectionTitle subtitle="My Recent Work" className="text-foreground">Portfolio</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
