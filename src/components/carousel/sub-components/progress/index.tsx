import { cn } from '@/src/utils/shadcn';
import { CarouselProgressBarProps } from './interface';

export function CarouselProgressBar({
  progress,
  progressWrapperClassName,
}: CarouselProgressBarProps) {
  return (
    <div
      className={cn(
        'rounded-5 bg-accent-200 dark:bg-accent-700 relative mt-10 h-1.5 max-w-[300px] overflow-hidden md:mx-auto md:h-2.5 lg:mt-20',
        progressWrapperClassName
      )}
    >
      <span
        className="bg-primary absolute inset-0 z-[1] origin-left rounded-[inherit] transition-[width] duration-500"
        style={{
          width: `${progress * 100}%`,
        }}
      ></span>
    </div>
  );
}
