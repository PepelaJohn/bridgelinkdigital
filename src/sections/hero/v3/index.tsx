//src/sections/hero/v3/index.tsx
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import React from 'react';
const bannerImageSrc = '/assets/images/hero/hero-3.jpg';

interface BreadcrumbItem {
  href?: string;
  label: string;
}

export interface HeroSectionProps {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
}

export function HeroSection({ title, breadcrumbItems }: HeroSectionProps) {
  return (
    <section className="section-padding-primary relative flex h-[250px] items-center max-sm:h-[100px]">
      {/* Background image  */}
      <Image
        priority
        src={bannerImageSrc}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} banner 3`}
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
      />

      {/* Overlay  */}
      <span className="bg-gradient-1 dark:from-accent-900/0 dark:to-accent-900 absolute inset-0 from-white/0 to-white"></span>

      <Container>
        <div className="text-accent-900 relative z-4 flex flex-wrap items-center justify-between gap-x-20 gap-y-8 lg:pt-[137px] dark:text-white">
          <h1 className="font-secondary text-xl font-bold lg:w-1/2">{title}</h1>
          {breadcrumbItems && breadcrumbItems.length > 0 && (
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
          )}
        </div>
      </Container>
    </section>
  );
}

const breadcrumbItemClasses = cn('h3 font-secondary');

function Breadcrumb({
  breadcrumbItems,
}: Pick<HeroSectionProps, 'breadcrumbItems'>) {
  if (breadcrumbItems && breadcrumbItems.length > 0) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="inline-flex items-center gap-5">
          {breadcrumbItems.map((menuItem, index) => (
            <React.Fragment key={index}>
              {menuItem.href ? (
                <li className={breadcrumbItemClasses}>
                  <CustomLink
                    href={menuItem.href}
                    className="hover:text-primary transition-colors"
                  >
                    {menuItem.label}
                  </CustomLink>
                  <span className="ml-5">/</span>
                </li>
              ) : (
                <li className={breadcrumbItemClasses} aria-current="page">
                  {menuItem.label}
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
  return <></>;
}
