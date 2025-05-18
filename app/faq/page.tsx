import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import FAQSection from '@/src/sections/faq';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BridgeLink | Faq',
  description: 'BridgeLink - IT Solutions and Services .',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Faq"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Faq',
          },
        ]}
      />
      <FAQSection />
      <Footer />
    </>
  );
}
