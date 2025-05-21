import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'featured portfolio',
    title: 'Connecting Brands to Digital Success',
  },
  isWave: true,
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
