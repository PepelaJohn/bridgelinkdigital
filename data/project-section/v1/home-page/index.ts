import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'featured portfolio',
    title: 'Connecting Brands to Digital Success',
  },
  isWave: true,
  works: [
    {
      slug: '/project/responsive-ecommerce',
      image: {
        src: '/assets/images/project/1.png',
        alt: 'ecommerce-website-design',
      },
      title: 'Responsive E-Commerce Platform',
      description: 'Modern shopping experience with seamless navigation',
    },
    {
      slug: '/project/social-media-campaign',
      image: {
        src: '/assets/images/project/2.png',
        alt: 'social-media-management',
      },
      title: 'Integrated Social Media Campaign',
      description: 'Strategic content planning and audience engagement',
    },
    {
      slug: '/project/business-rebrand',
      image: {
        src: '/assets/images/project/3.png',
        alt: 'website-redesign',
      },
      title: 'Complete Business Rebrand',
      description: 'Website redesign with brand identity overhaul',
    },
    {
      slug: '/project/digital-marketing',
      image: {
        src: '/assets/images/project/4.png',
        alt: 'digital-marketing-solution',
      },
      title: 'Comprehensive Digital Marketing',
      description: 'Website optimization and social media integration',
    },
  ],
};
