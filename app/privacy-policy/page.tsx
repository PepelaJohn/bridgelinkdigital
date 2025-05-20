
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import PrivacyPolicy from '@/src/sections/privacy';



export default function Privacy() {

  return (
    <>
     <MainHeader version="1" />
          <HeroSection
            title="Privacy Policy"
            breadcrumbItems={[
              {
                label: 'Home',
                href: '/',
              },
              {
                label: 'Privacy Policy',
              },
            ]}
      />
      
      <PrivacyPolicy />
      <Footer/>
    </>
  );
}
