
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
}

const Section = ({ id, children, className, ...props }: SectionProps) => {
  return (
    <section
      id={id}
      // Ensure sections take at least full viewport height and center content vertically and horizontally
      // Added py-20 for padding top/bottom to avoid content touching navbar/footer directly
      className={cn(
        'min-h-screen flex flex-col items-center justify-center py-20 md:py-24 relative', // Added relative positioning if needed for pseudo-elements
        className
      )}
      {...props}
    >
       {/* Container ensures content doesn't stretch full width on large screens */}
       <div className="container mx-auto px-4 w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
