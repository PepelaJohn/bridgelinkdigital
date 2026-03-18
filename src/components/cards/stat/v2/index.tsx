import { Counter } from '@/src/components/counter';

export interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  counterSuffix: string;
}

export function StatCard({ icon, title, value, counterSuffix }: StatCardProps) {
  return (
    <div className="group relative flex items-center">
      <span className="rounded-5 bg-primary relative z-1 inline-grid h-[50px] w-[50px] flex-none place-items-center text-white">
        <span className="text-[1.875rem] text-white [transition:all_500ms_ease] group-hover:[transform:rotateY(180deg)] group-hover:[transition-delay:.1s]">
          {icon}
        </span>
      </span>
      <div className="rounded-5 bg-accent-100 p-30px dark:bg-accent-700 -ml-5 flex min-h-[120px] flex-1 flex-col justify-center py-2.5 pl-10">
        <h3 className="font-secondary text-accent-900 text-xl leading-[1.25] font-bold md:text-2xl dark:text-white">
          <Counter end={value} suffix={counterSuffix} />
          <span className="sr-only">Counter</span>
        </h3>
        <p className="-mt-2.5">{title}</p>
      </div>
    </div>
  );
}
