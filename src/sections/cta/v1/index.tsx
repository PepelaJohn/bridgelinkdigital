'use client';
import { SectionProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { TextInput } from '@/src/components/inputs/text-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';
export interface CtaSectionProps {
  title: string;
}

const ctaSectionData: CtaSectionProps = {
  title: 'Get Notified on offers and promotions.',
};

export function CtaSection({ className }: SectionProps) {
  const { title } = ctaSectionData;
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const [email, setEmail] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        toast.success(
          'Successfully subscribed! Check your email for confirmation.'
        );
        setEmail('');
      } else {
        setStatus('error');
        toast.error(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      toast.error('Network error. Please check your connection and try again.');
    }
  };
  return (
    <section className={cn(className)}>
      <Container>
        <div className="rounded-5 bg-primary relative overflow-hidden px-6 py-14">
          <div className="rounded-5 relative z-10 mx-auto max-w-[630px] text-center">
            <h2 className="font-secondary mx-auto max-w-[490px] text-xl leading-[1.25] font-bold text-white capitalize md:text-2xl">
              {title}
            </h2>
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col items-center justify-center gap-[.625rem] md:mt-[1.875rem] md:flex-row"
            >
              <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                disabled={status === 'loading'}
                className="border-opacity-60 dark:border-opacity-60 border-white text-white placeholder:text-white focus:border-white dark:border-white dark:text-white dark:placeholder:text-white"
              />
              <Button
                disabled={status === 'loading'}
                type="submit"
                className={cn(
                  'min-w-[190px] flex-none text-white max-md:w-full',
                  'bg-primary-light',
                  'hover:text-accent-700 dark:hover:text-accent-700 after:bg-white'
                )}
              >
                <span>
                  {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                </span>
              </Button>
            </form>
          </div>
          <Image
            src="/assets/images/cta/pattern-1.png"
            alt="cta section bg pattern"
            width={520}
            height={316}
            className="-right-30px animate-float-bob-x pointer-events-none absolute bottom-0 z-1 h-full object-cover opacity-60"
            sizes="100vw"
          />
        </div>
      </Container>
    </section>
  );
}
