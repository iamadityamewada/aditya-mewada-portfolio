
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  subtitle?: string; // Optional subtitle
}

const SectionTitle = ({ children, subtitle, className, ...props }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      {subtitle && (
        <p className="text-base font-medium text-primary mb-1">{subtitle}</p>
      )}
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl', // Increased size slightly
          className
        )}
        {...props}
      >
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
