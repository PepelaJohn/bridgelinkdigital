import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'featured portfolio',
    title: 'Connecting Brands to Digital Success',
  },
  isWave: false,
  works: [
    {
      href: 'https://lunadrone.com',
      slug: '/project/responsive-ecommerce',
      image: {
        src: '/assets/images/project/luna.jpg',
        alt: 'ecommerce-website-design',
      },
      title: 'Drone Delivery Service',
      description: 'Custom drone delivery platform ',
    },
    {
      href: 'https://events-team.netlify.app',
      slug: '/project/social-media-campaign',
      image: {
        src: '/assets/images/project/events.jpg',
        alt: 'social-media-strategy',
      },
      title: 'Event Management.',
      description: 'Event management and planning platform',
    },
    {
      href: 'https://milanodirouge.com/',
      slug: '/project/business-rebrand',
      image: {
        src: '/assets/images/project/luxury.jpg ',
        alt: 'business-website-redesign',
      },
      title: 'Luxury Design Brand',
      description: 'Independent luxury designs shop.',
    },
    {
      href: 'https://www.thediamondstore.co.uk/',
      slug: '/project/digital-marketing',
      image: {
        src: '/assets/images/project/diamond.jpg',
        alt: 'digital-marketing-solution',
      },
      title: 'Diamond Shop',
      description: 'SEO optimization with social media integration',
    },
    {
      href: 'https://www.wausausmiles.com/',
      slug: '/project/web-development',
      image: {
        src: '/assets/images/project/dental.jpg',
        alt: 'custom-web-application',
      },
      title: 'Dentist ...',
      description: 'Secure patient engagement platform',
    },
    {
      href: 'https://milanoitalianfurniture.com/',
      slug: '/project/content-creation',
      image: {
        src: '/assets/images/project/furniture.jpg',
        alt: 'content-strategy',
      },
      title: 'Millano italian Furniture',
      description: 'Cohesive visual storytelling across channels',
    },
    {
      href: 'https://parkdaledentalcenter.com/cosmetic-dentistry/',
      slug: '/project/mobile-responsive',
      image: {
        src: '/assets/images/project/dental1.jpg',
        alt: 'mobile-first-design',
      },
      title: 'Dental Consultancy',
      description: 'Seamless website and application experience',
    },
    {
      href: 'https://bayparksmiles.com/',
      slug: '/project/analytics-dashboard',
      image: {
        src: '/assets/images/project/dental2.jpg',
        alt: 'performance-analytics',
      },
      title: 'BayPark Smiles Dental Clinic',
      description: 'Real-time performance tracking and reporting',
    },
  ],
};
