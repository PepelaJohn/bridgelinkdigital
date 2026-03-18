// src/components/cards/service/v1/index.tsx
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import { FaArrowRight } from 'react-icons/fa6';

export interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
}

export function ServiceCard({ icon, title, description, slug }: ServiceProps) {
  return (
    <article
      className={cn([
        'group/service rounded-5 shadow-3 dark:bg-accent-700 relative z-1 flex h-full flex-col overflow-hidden bg-white p-8 transition-all duration-300 md:p-10 dark:shadow-none',
        // Lift on hover
        'hover:-translate-y-2',
        // Top accent border
        'before:bg-primary before:absolute before:top-0 before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-500 before:content-[""]',
        'hover:before:w-full',
      ])}
    >
      {/* Icon box */}
      <div className="mb-6 flex items-start justify-between">
        <span
          className={cn(
            'rounded-5 bg-accent-300 text-accent-900 dark:bg-accent-900 flex h-16 w-16 flex-none items-center justify-center transition-all duration-300 dark:text-white',
            'group-hover/service:bg-primary group-hover/service:text-white',
            '[&>svg]:h-7 [&>svg]:w-7'
          )}
        >
          {icon}
        </span>

        {/* Arrow — fades in on hover */}
        <span className="translate-x-2 opacity-0 transition-all duration-300 group-hover/service:translate-x-0 group-hover/service:opacity-100">
          <FaArrowRight className="text-primary" />
        </span>
      </div>

      {/* Title */}
      <h2 className="text-md text-accent-900 mb-3 leading-tight font-bold md:text-lg dark:text-white">
        <CustomLink
          href={slug}
          className="hover:text-primary transition-colors"
        >
          {title}
        </CustomLink>
      </h2>

      {/* Description */}
      <p className="text-accent-800 dark:text-body flex-1">{description}</p>

      {/* Bottom link */}
      <div className="mt-6">
        <CustomLink
          href={'#'}
          className={cn(
            'font-secondary text-accent-900 hover:text-primary dark:hover:text-primary inline-flex items-center gap-2 text-sm font-bold transition-colors duration-300 dark:text-white'
          )}
        >
          Learn More
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover/service:translate-x-1" />
        </CustomLink>
      </div>

      {/* Bottom line animation */}
      <span className="bg-primary absolute bottom-0 left-0 h-[2px] w-full scale-x-0 opacity-0 transition-all duration-400 group-hover/service:scale-x-100 group-hover/service:opacity-100" />
    </article>
  );
}
