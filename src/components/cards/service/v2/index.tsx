import { ImageProps, blurDataUrl } from '@/src/common-types';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

export interface ServiceProps {
  image: Omit<ImageProps, 'width' | 'height'>;
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
}

export function ServiceCard({
  image,
  icon,
  title,
  description,
  slug,
}: ServiceProps) {
  return (
    <article
      className={cn([
        // General
        'group text-accent-900 shadow-3 dark:bg-accent-700 bg-white transition-transform duration-350 dark:text-white dark:shadow-none',

        // Layout
        'rounded-5 relative z-1 block h-full overflow-hidden',
      ])}
    >
      <div
        className={cn(
          // General
          'relative z-1',

          // before => shape
          'dark:before:bg-accent-700 before:absolute before:-right-px before:-bottom-px before:left-0 before:z-2 before:h-[65px] before:bg-white before:[clip-path:polygon(100%_0%,0%_100%,100%_100%)]',

          // after => image overlay effect
          'after:pointer-events-none after:absolute after:top-0 after:left-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100',
          // hover
          'group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-400 group-hover:after:ease-linear'
        )}
      >
        <Image
          src={image.src}
          alt={title}
          width={640}
          height={500}
          sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          blurDataURL={blurDataUrl}
        />
        <div
          className={cn(
            // General
            'bg-accent-900 absolute right-0 bottom-[-15px] left-0 z-3 mx-auto grid h-[100px] w-[100px] flex-none place-items-center overflow-hidden rounded-full text-[2.5rem] text-white transition-colors duration-300 md:text-[4rem]',

            // After
            'after:bg-primary after:absolute after:inset-0 after:-z-1 after:scale-50 after:rounded-[inherit] after:opacity-0 after:transition-all after:duration-700',

            'group-hover:after:scale-100 group-hover:after:opacity-100'
          )}
        >
          <span className="block transition-transform duration-400 group-hover:scale-90">
            {icon}
          </span>
        </div>
      </div>
      <div className="px-30px flex flex-col items-center justify-center gap-2.5 py-10 text-center">
        <h3 className="text-md leading-tight font-bold md:text-lg">
          <CustomLink
            href={slug}
            className="text-accent-900 hover:text-primary dark:hover:text-primary transition-colors duration-300 dark:text-white"
          >
            {title}
          </CustomLink>
        </h3>
        <p className="text-accent-800 dark:text-body mb-2.5">{description}</p>
        <CustomLink
          href={slug}
          className={cn(
            // Normal
            // General
            'rounded-5 bg-primary/10 text-primary dark:bg-accent-900 relative z-1 grid h-10 w-10 place-items-center text-sm transition-colors duration-300',

            // After
            'after:bg-primary after:absolute after:inset-0 after:-z-1 after:origin-top after:transform-[perspective(400px)_rotateX(-90deg)_scale(0.2)] after:rounded-[inherit] after:transition-all after:duration-700',

            // Hover
            // after
            'group-hover:after:transform-[perspective(400px)_rotateX(0deg)_scale(1.0)] group-hover:after:opacity-100',

            // Content
            'group-hover:text-white'
          )}
        >
          <FaArrowRightLong />
        </CustomLink>
      </div>
    </article>
  );
}
