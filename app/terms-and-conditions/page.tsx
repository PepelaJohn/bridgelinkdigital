import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import PrivacyPolicy from '@/src/sections/terms';

export default function Privacy() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Terms and Conditions"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Terms and Conditions',
          },
        ]}
      />

      <PrivacyPolicy />
      <Footer />
    </>
  );
}
