import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'featured portfolio',
    title: 'Connecting Brands to Digital Success',
  },
  isWave: false,
  works: [
    {
      slug: '/project/responsive-ecommerce',
      image: {
        src: '/assets/images/project/1.png',
        alt: 'ecommerce-website-design',
      },
      title: 'Artisan Boutique Website',
      description: 'Custom e-commerce solution with unique brand identity',
    },
    {
      slug: '/project/social-media-campaign',
      image: {
        src: '/assets/images/project/2.png',
        alt: 'social-media-strategy',
      },
      title: 'Tech Startup Campaign',
      description: 'Integrated content strategy across multiple platforms',
    },
    {
      slug: '/project/business-rebrand',
      image: {
        src: '/assets/images/project/3.png',
        alt: 'business-website-redesign',
      },
      title: 'Financial Firm Rebrand',
      description: 'Complete digital presence transformation',
    },
    {
      slug: '/project/digital-marketing',
      image: {
        src: '/assets/images/project/4.png',
        alt: 'digital-marketing-solution',
      },
      title: 'Restaurant Web Presence',
      description: 'SEO optimization with social media integration',
    },
    {
      slug: '/project/web-development',
      image: {
        src: '/assets/images/project/5.png',
        alt: 'custom-web-application',
      },
      title: 'Healthcare Portal',
      description: 'Secure patient engagement platform',
    },
    {
      slug: '/project/content-creation',
      image: {
        src: '/assets/images/project/6.png',
        alt: 'content-strategy',
      },
      title: 'Lifestyle Brand Content',
      description: 'Cohesive visual storytelling across channels',
    },
    {
      slug: '/project/mobile-responsive',
      image: {
        src: '/assets/images/project/7.png',
        alt: 'mobile-first-design',
      },
      title: 'Mobile App Integration',
      description: 'Seamless website and application experience',
    },
    {
      slug: '/project/analytics-dashboard',
      image: {
        src: '/assets/images/project/8.png',
        alt: 'performance-analytics',
      },
      title: 'Social Analytics Dashboard',
      description: 'Real-time performance tracking and reporting',
    },
  ],
};
