'use client';

import { useEffect, useRef, useState, FunctionComponent } from 'react';
import CountUp from 'react-countup';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

export const Counter: FunctionComponent<CounterProps> = ({
  end,
  suffix,
  delay,
  duration,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [viewPortEntered, setViewPortEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setViewPortEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {viewPortEntered && (
        <CountUp end={end} suffix={suffix} delay={delay} duration={duration} />
      )}
    </span>
  );
};
