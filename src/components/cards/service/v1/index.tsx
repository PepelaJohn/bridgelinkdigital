import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';

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
        // General
        'group/service bg-white text-accent-900 shadow-3 transition-transform duration-350 dark:bg-accent-700 dark:text-white  dark:shadow-none',

        // Layout
        'relative z-1 block h-full space-y-6 overflow-hidden rounded-5 p-6 md:space-y-7 md:p-10',

        //Hover
        'hover:[transform:translateY(-.5rem)]',
      ])}
    >
      <div className="flex items-center gap-5">
        <span className="flex-none text-[2.5rem] transition-all duration-300 group-hover/service:scale-90 group-hover/service:text-primary md:text-[4rem]">
          {icon}
        </span>
        <h2 className="text-md font-bold leading-[1.25] md:text-lg">
          <CustomLink href={slug}>{title}</CustomLink>
        </h2>
      </div>
      <p className="text-accent-800 dark:text-body">{description}</p>
      <Button
        asChild
        className={cn([
          // Layout
          'rounded-5 border',

          // on card hover effects
          'group-hover/service:border-primary',

          // Light
          'border-current bg-transparent text-accent-900 hover:border-primary hover:bg-transparent hover:text-primary',

          // Dark
          'dark:border-accent-900 dark:bg-accent-900 dark:text-white dark:hover:text-primary  group-hover/service:dark:bg-transparent',

          // stop default button hover effects
          'before:hidden after:hidden',
        ])}
      ></Button>

      {/* Bottom line animation  */}
      <span className="invisible absolute bottom-0 left-0 h-[2px] w-full scale-x-[30%] bg-primary opacity-0 transition-all duration-400 group-hover/service:visible group-hover/service:scale-x-100  group-hover/service:opacity-100"></span>
    </article>
  );
}
