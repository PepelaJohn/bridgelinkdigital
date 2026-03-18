import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { TextInput } from '@/src/components/inputs/text-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';

export interface CtaSectionProps {
  title: string;
  description: string;
}

const ctaSectionData: CtaSectionProps = {
  title: 'Leave the handy work to us',
  description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
};

const inputCommonClasses = cn(
  'border-white border-opacity-60  text-white placeholder:text-white focus:border-white dark:border-white dark:border-opacity-60 dark:text-white dark:placeholder:text-white'
);

export function CtaSection() {
  const { title, description } = ctaSectionData;
  return (
    <section className="bg-primary relative overflow-hidden py-20">
      <Container>
        <div className="gap-30px relative z-10 grid items-center xl:grid-cols-12">
          <div className="text-white xl:col-span-5">
            <h2 className="h2 font-secondary max-w-[410px] leading-[1.25] capitalize">
              {title}
            </h2>
            <p className="mt-5 text-base leading-[1.875]">{description}</p>
          </div>
          <div className="xl:col-span-7">
            <form className="gap-30px grid grid-cols-1 md:grid-cols-2 xl:max-w-[630px]">
              <TextInput
                placeholder="Your Name"
                type="text"
                className={inputCommonClasses}
              />
              <TextInput
                placeholder="Your Email"
                type="email"
                className={inputCommonClasses}
              />
              <div className="flex flex-col items-start gap-4 md:col-span-2 md:flex-row md:items-center">
                <div className="w-full flex-1">
                  <TextInput
                    placeholder="Subject"
                    type="text"
                    className={inputCommonClasses}
                  />
                </div>
                <Button
                  type="submit"
                  className={cn(
                    'bg-primary-light hover:text-accent-700 dark:hover:text-accent-700 min-w-[190px] flex-none after:bg-white'
                  )}
                >
                  <span>SUSCRIBE</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Image
        src="/assets/images/cta/pattern-2.png"
        alt="cta section bg pattern"
        width={429}
        height={359}
        className="animate-float-bob-x pointer-events-none absolute right-0 bottom-0 z-1 object-cover max-[1650px]:hidden"
        sizes="100vw"
      />
    </section>
  );
}
