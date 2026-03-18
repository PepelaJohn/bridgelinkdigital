import { CustomLink } from '@/src/components/custom-link';
import { BREAKPOINTS } from '@/src/themes/interface';
import { cn } from '@/src/utils/shadcn';
import Image, { ImageProps } from 'next/image';
import { FaArrowRight, FaComments, FaUser } from 'react-icons/fa6';

export interface BlogProps {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  date?: {
    day: string;
    month: string;
  };
  author: {
    name: string;
    slug: string;
  };
  commentCount?: number;
  title: string;
}

const dateClasses = cn('leading-none capitalize');
const inlineFlexLayoutClasses = cn('inline-flex items-center gap-2 text-white');
const iconClasses = cn('text-sm text-white');

export function BlogCard({
  slug,
  image,
  author,
  title,
  commentCount,
  date,
}: BlogProps) {
  return (
    <article className="group/blog rounded-5 relative z-1 flex h-full min-h-[452px] flex-col overflow-hidden p-6 md:p-[1.875rem]">
      <span className="bg-accent-900/50 absolute inset-0 z-[2]"></span>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={`
          (min-width:${BREAKPOINTS.md}) 50vw, 
          (min-width:${BREAKPOINTS.lg}) 33vw,
          100vw
          `}
        className={cn(
          // Normal classes
          'pointer-events-none [transform:translatex(50%)_scalex(2)] object-cover opacity-0 [filter:blur(10px)] [transition:all_500ms_ease]',
          // on card hover classes
          'group-hover/blog:[transform:translatex(0)_scalex(1)] group-hover/blog:opacity-100 group-hover/blog:[filter:blur(0px)]'
        )}
      />
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={`
          (min-width:${BREAKPOINTS.md}) 50vw, 
          (min-width:${BREAKPOINTS.lg}) 33vw,
          100vw
          `}
        className={cn(
          // Normal classes
          'pointer-events-none object-cover [transition:all_500ms_ease]',
          // on card hover classes
          'group-hover/blog:[transform:translatex(-50%)_scalex(2)] group-hover/blog:opacity-0 group-hover/blog:[filter:blur(10px)]'
        )}
      />

      {/* Content  */}
      <div className="relative z-10 flex h-full flex-1 flex-col">
        {date && (
          <div>
            <div className="rounded-5 bg-accent-700 font-secondary text-md group-hover/blog:bg-primary inline-grid min-h-[77px] min-w-[75px] items-center justify-center px-4 py-3 text-center font-bold text-white transition-colors md:text-lg">
              <span className={dateClasses}>{date.day}</span>
              <span className={dateClasses}>{date.month}</span>
            </div>
          </div>
        )}
        <div className="mt-auto max-w-[270px] space-y-2 text-white md:space-y-5">
          <div className="inline-flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className={inlineFlexLayoutClasses}>
              <span className={iconClasses}>
                <FaUser />
              </span>
              <span>
                By{' '}
                <CustomLink
                  className="hover:text-primary transition-colors duration-300"
                  href={author.slug}
                >
                  {author.name}
                </CustomLink>
              </span>
            </p>
            <p className={inlineFlexLayoutClasses}>
              <span className={iconClasses}>
                <FaComments />
              </span>
              <span>Comments ({String(commentCount).padStart(2, '0')})</span>
            </p>
          </div>
          <h3 className="text-md leading-[1.25] font-bold md:text-lg">
            <CustomLink
              aria-label={title}
              href={slug}
              className="hover:text-primary text-white transition-colors duration-300"
            >
              {title}
            </CustomLink>
          </h3>
          <div>
            <CustomLink
              href={slug}
              className={cn(
                inlineFlexLayoutClasses,
                'font-secondary hover:text-primary gap-[.625rem] text-base leading-[2] font-bold tracking-wide text-white uppercase transition-colors duration-300'
              )}
            >
              <span>Read More</span>
              <span className="text-primary">
                <FaArrowRight />
              </span>
            </CustomLink>
          </div>
        </div>
      </div>
    </article>
  );
}
