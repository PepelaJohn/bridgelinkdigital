// src/components/cards/pricing/v2/index.tsx
import { LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import { FaCheck } from 'react-icons/fa6';

export interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  button: LinkProps;
  badge?: string;
}

export function PricingCard({
  title,
  description,
  features,
  price,
  duration,
  button,
  badge,
}: PricingCardProps) {
  return (
    <div className="rounded-5 shadow-3 dark:bg-accent-700 relative flex h-full flex-col bg-white p-10 pb-[50px] text-center dark:shadow-none">
      {/* Badge — absolute so it doesn't affect layout */}
      {badge && (
        <span className="bg-primary font-secondary absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm font-bold whitespace-nowrap text-white">
          {badge}
        </span>
      )}

      <h3 className="text-accent-900 mb-2.5 text-lg leading-[1.3] font-bold lg:text-xl dark:text-white">
        {title}
      </h3>
      <p>{description}</p>
      <div
        className={cn(
          'mb-30px rounded-5 bg-accent-300 font-secondary text-accent-900 dark:bg-accent-900 relative z-1 mx-auto mt-5 flex min-h-[80px] max-w-[274px] items-center justify-center text-xl leading-[1.25] font-bold transition-colors duration-300 lg:text-2xl dark:text-white',
          'after:bg-primary after:absolute after:bottom-0 after:left-0 after:-z-1 after:h-0 after:w-full after:rounded-[inherit] after:transition-all after:duration-500 after:ease-in-out',
          'group-hover:after:top-0 group-hover:after:bottom-auto group-hover:after:h-full',
          'group-hover:text-white'
        )}
      >
        <p>
          {price}
          <sub className="lg:text-md relative bottom-0 ml-1.5 inline-block text-base">
            {duration}
          </sub>
        </p>
      </div>

      {/* Features — flex-1 pushes the button to the bottom */}
      {features && features.length > 0 && (
        <ul
          aria-label="pricing point list"
          className="mb-[50px] grid flex-1 gap-1 md:gap-3"
        >
          {features.map((feature, index) => (
            <li
              className="font-secondary text-md text-accent-800 flex items-center gap-3 leading-[1.5] font-bold lg:gap-4 dark:text-white"
              key={index}
            >
              <span className="text-primary-light">
                <FaCheck />
              </span>
              <span className="text-left">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex-none">
        <Button
          asChild
          className={cn(
            'flex w-full',
            'border-primary text-accent-900 border-2 bg-transparent',
            'after:bg-primary'
          )}
        >
          <CustomLink href={button.href} openNewTab={button.openNewTab}>
            <span className="relative z-1">{button.label}</span>
          </CustomLink>
        </Button>
      </div>
    </div>
  );
}
