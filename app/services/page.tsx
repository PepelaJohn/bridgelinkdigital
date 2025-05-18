import { serviceSectionData } from '@/data/service-section/v1/service-list-page';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceSection } from '@/src/sections/service/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BridgeLink | Services',
  description: 'BridgeLink - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Services"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Service',
          },
        ]}
      />
      <ServiceSection {...serviceSectionData} />
      <Footer />
    </>
  );
}
