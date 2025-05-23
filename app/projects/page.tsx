// import { projectSectionData } from '@/data/project-section/v1/list-page';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
// import { ProjectSection } from '@/src/sections/project/v1';
import { Metadata } from 'next';
import PortfolioShowcase from '@/src/components/cards/project/v3';
export const metadata: Metadata = {
  title: 'BridgeLink | Project',
  description: 'BridgeLink - IT Solutions and Services .',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Project"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Project',
          },
        ]}
      />
      {/* <ProjectSection {...projectSectionData} /> */}
      <PortfolioShowcase></PortfolioShowcase>
      <Footer />
    </>
  );
}
