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
        src: '/assets/images/project/dental.jpg',
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
    {
      href: 'https://www.wausausmiles.com/',
      slug: '/project/web-development',
      image: {
        src: '/assets/images/project/dental.jpg',
        alt: 'dental-clinic-website',
      },
      title: 'Dental Clinic',
      description:
        'Professional clinic site with secure patient services and appointment booking.',
    },
    {
      href: 'https://milanoitalianfurniture.com/',
      slug: '/project/content-creation',
      image: {
        src: '/assets/images/project/furniture.jpg',
        alt: 'luxury-furniture-ecommerce',
      },
      title: 'Milano Italian Furniture',
      description:
        'High-end furniture ecommerce site with immersive visual storytelling.',
    },
    {
      href: 'https://parkdaledentalcenter.com/cosmetic-dentistry/',
      slug: '/project/mobile-responsive',
      image: {
        src: '/assets/images/project/dental1.jpg',
        alt: 'cosmetic-dentistry-website',
      },
      title: 'Dental Consultancy',
      description:
        'Mobile-first website for promoting cosmetic and general dentistry services.',
    },
    {
      href: 'https://bayparksmiles.com/',
      slug: '/project/analytics-dashboard',
      image: {
        src: '/assets/images/project/dental2.jpg',
        alt: 'dental-analytics-platform',
      },
      title: 'BayPark Smiles Dental Clinic',
      description:
        'Optimized dental website with patient engagement and analytics tools.',
    },
  ],
};
