import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceDetailsSection } from '@/src/sections/service-details/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BridgeLink | Service details',
  description: 'BridgeLink - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Service Details"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Service Details',
          },
        ]}
      />
      <ServiceDetailsSection />
      <Footer />
    </>
  );
}
