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
        alt: 'drone-delivery-platform',
      },
      title: 'Drone Delivery Service',
      description:
        'Autonomous drone delivery system for medical logistics and emergency response.',
    },
    {
      href: 'https://events-team.netlify.app',
      slug: '/project/social-media-campaign',
      image: {
        src: '/assets/images/project/events.jpg',
        alt: 'event-management-platform',
      },
      title: 'Event Management',
      description:
        'Interactive platform for organizing, scheduling, and marketing live events.',
    },
    {
      href: 'https://milanodirouge.com/',
      slug: '/project/business-rebrand',
      image: {
        src: '/assets/images/project/lux.jpg ',
        alt: 'luxury-fashion-brand',
      },
      title: 'Luxury Design Brand',
      description: 'Ecommerce platform for a premium streetwear fashion label.',
    },
    {
      href: 'https://www.thediamondstore.co.uk/',
      slug: '/project/digital-marketing',
      image: {
        src: '/assets/images/project/diamond.jpg',
        alt: 'jewelry-ecommerce-store',
      },
      title: 'Diamond Shop',
      description:
        'Online jewelry store with SEO and social commerce features.',
    },
  ],
};
