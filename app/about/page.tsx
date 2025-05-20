import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import { AboutSection as AboutSectionTwo } from '@/src/sections/about/v2';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { StatisticsSection } from '@/src/sections/statistics/v1';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { WorkprocessSection } from '@/src/sections/work-process/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BridgeLink | About',
  description: 'BridgeLink - IT Solutions and Services .',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="About Us"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'About',
          },
        ]}
      />
      <AboutSection />
      <CtaSection />
      <TestimonialSection />
      <StatisticsSection />
      <AboutSectionTwo />
      {/* <WorkprocessSection /> */}
      <Footer />
    </>
  );
}
