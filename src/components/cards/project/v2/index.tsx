import { ImageProps } from '@/src/common-types';
import { CustomLink } from '@/src/components/custom-link';
import { BREAKPOINTS } from '@/src/themes/interface';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';

export interface PortfolioCardProps {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  title: string;
  description: string;
  tags: string[];
}

export const PROJECT_CARD_IMAGE_DIMENSION = {
  width: 640,
  height: 454,
};

export function ProjectCard({
  slug,
  image,
  title,
  description,
  onClick,
}: PortfolioCardProps & {
  onClick: () => void;
}) {
  return (
    <div className="group/project block">
      {/* Media  */}
      <div
        className={cn(
          'rounded-5 relative z-1 cursor-pointer overflow-hidden',
          // after
          'after:absolute after:inset-0 after:z-1 after:[transform-origin:top] after:bg-black after:[transition:.5s] max-lg:after:opacity-60 lg:after:[transform:perspective(400px)_rotateX(-10deg)] lg:after:opacity-0',

          // hover
          'lg:group-hover/project:after:[transform:perspective(400px)_rotateX(0deg)] lg:group-hover/project:after:opacity-60'
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={PROJECT_CARD_IMAGE_DIMENSION.width}
          height={PROJECT_CARD_IMAGE_DIMENSION.height}
          sizes={`(min-width: ${BREAKPOINTS.md}) 50vw,100vw`}
          className="transition-transform duration-1000 ease-in-out group-hover/project:scale-105"
        />
        <button
          onClick={onClick}
          className={cn(
            'text-accent-700 absolute top-1/2 left-1/2 z-[2] grid h-[60px] w-[60px] [transform:translate(-50%,-50%)] place-items-center rounded-full bg-white text-[25px] [transition:.5s]',

            // desktop
            'lg:opacity-0 lg:group-hover/project:opacity-100'
          )}
        >
          <FaPlus />
        </button>
      </div>

      {/* Content  */}
      <div className="mt-5">
        <h3 className="h3">
          <CustomLink
            href={slug}
            className="text-accent-700 hover:text-primary dark:hover:text-primary transition-colors duration-350 dark:text-white"
          >
            {title}
          </CustomLink>
        </h3>
        <p className="text-body dark:text-accent-800 mt-1">{description}</p>
      </div>
    </div>
  );
}
