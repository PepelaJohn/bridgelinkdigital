import { SectionHeadingProps } from './interface';
import { cn } from '@/src/utils/shadcn';

/**
 * This component renders a text section with `subtitle`, `title`,
 * and `description`. It has styling options for alignment
 * @param SectionHeadingProps
 * @returns JSX.Element
 */
export function SectionHeading({
  subtitle,
  title,
  description,
  alignment = 'start',
  hasBottomSpacing = false,
  className,
}: SectionHeadingProps) {
  const wrapperClasses = cn(
    alignment === 'start' && 'text-left',
    alignment === 'center' && 'text-center',
    alignment === 'end' && 'text-right',
    { 'mb-10 md:mb-[3.75rem]': hasBottomSpacing },
    className
  );

  return (
    <div className={wrapperClasses}>
      {subtitle && (
        <span
          className={
            'font-secondary text-primary md:text-md mb-[.625rem] block text-base leading-[1.5] font-bold tracking-widest uppercase'
          }
        >
          {subtitle}
        </span>
      )}
      <h2 className="font-secondary text-accent-900 text-xl leading-[1.25] font-bold md:text-2xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className={'mt-5 whitespace-pre-line'}>{description}</p>
      )}
    </div>
  );
}
