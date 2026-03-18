import { Counter } from '@/src/components/counter';

export interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  counterSuffix: string;
}

export function StatCard({ icon, title, value, counterSuffix }: StatCardProps) {
  return (
    <div className="group rounded-5 bg-accent-100 p-30px dark:bg-accent-700 relative min-h-[155px] overflow-hidden">
      <span className="right-30px rounded-b-5 bg-primary absolute top-0 inline-grid h-16 w-16 place-items-center text-white">
        <span className="text-[2.5rem] text-white [transition:all_500ms_ease] group-hover:[transform:rotateY(180deg)] group-hover:[transition-delay:.1s]">
          {icon}
        </span>
      </span>
      <h3 className="font-secondary pr-20 text-xl leading-[1.25] font-bold text-transparent [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_#1A1A1C] md:text-2xl dark:[-webkit-text-stroke:1px_white]">
        <Counter end={value} suffix={counterSuffix} />
        <span className="sr-only">Counter</span>
      </h3>
      <p className="mt-5px">{title}</p>
    </div>
  );
}
