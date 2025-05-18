import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { ContactSection } from '@/src/sections/contact/v2';
import { HeroSection } from '@/src/sections/hero/v3';
import { MapSection } from '@/src/sections/map-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BridgeLink | Contact',
  description: 'BridgeLink - IT Solutions and Services .',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Contact Us"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Contact Us',
          },
        ]}
      />
      <ContactSection />
      <MapSection />
      <Footer />
    </>
  );
}
