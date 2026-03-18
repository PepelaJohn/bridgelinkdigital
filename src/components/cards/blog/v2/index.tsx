import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image, { ImageProps } from 'next/image';
import { FaCalendarDays, FaPlus, FaUser } from 'react-icons/fa6';

export interface BlogProps {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  date: string;
  author: {
    name: string;
    slug: string;
  };
  title: string;
}

const listItemClasses = cn('inline-flex items-center gap-2.5');
const listItemIconClasses = cn('text-sm text-primary');
const inlineFlexLayoutClasses = cn('inline-flex items-center gap-2 text-white');

export function BlogCard({ slug, image, author, title, date }: BlogProps) {
  return (
    <article className="group rounded-5 shadow-3 dark:bg-accent-700 relative z-1 block overflow-hidden bg-white dark:shadow-none">
      {/* Media  */}
      <div
        className={cn(
          'relative overflow-hidden',
          // after
          'after:absolute after:inset-0 after:z-1 after:transition-all after:[transition:all_0.6s_ease-out_0s]',
          // before
          'before:absolute before:inset-0 before:z-1 before:transition-all before:[transition:all_0.6s_ease-out_0s]',

          // hover
          'group-hover:after:top-1/2 group-hover:after:bottom-1/2 group-hover:after:bg-white/20',
          'group-hover:before:right-1/2 group-hover:before:left-1/2 group-hover:before:bg-white/20'
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={640}
          height={466}
          sizes="
          (min-width:768px) 50vw, 
          (min-width:1024px) 33vw,
          100vw
          "
          className="pointer-events-none [transform:scale(1.05)] object-cover [transition:.5s_ease] group-hover:[transform:scale(1)]"
        />

        {/* Post meta  */}
        <div className="px-30px absolute bottom-4 w-full">
          <ul className="px rounded-5 bg-accent-900 text-body flex min-h-[40px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-2.5 py-1">
            <li className={listItemClasses}>
              <span className={listItemIconClasses}>
                <FaUser />
              </span>
              <span>
                By{' '}
                <CustomLink
                  href={author.slug}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {author.name}
                </CustomLink>
              </span>
            </li>
            <li className={listItemClasses}>
              <span className={listItemIconClasses}>
                <FaCalendarDays />
              </span>
              <span>{date}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content  */}
      <div className="space-y-30px p-30px">
        <h3 className="text-md leading-[1.25] font-bold md:text-lg">
          <CustomLink
            href={slug}
            className="text-accent-900 hover:text-primary dark:hover:text-primary transition-colors duration-300 dark:text-white"
          >
            {title}
          </CustomLink>
        </h3>
        <CustomLink
          href={slug}
          className={cn(
            inlineFlexLayoutClasses,
            'font-secondary text-accent-900 hover:text-primary dark:hover:text-primary gap-[.625rem] text-base leading-[2] font-bold tracking-wide uppercase transition-colors duration-350 dark:text-white'
          )}
        >
          <span>Read More</span>
          <span className="relative -top-px text-sm/[1]">
            <FaPlus />
          </span>
        </CustomLink>
      </div>
    </article>
  );
}
