import { HeroProps } from '@/src/sections/hero/v1';

export const heroData: HeroProps = {
  items: [
    {
      image: {
        src: '/assets/images/hero/hero-1.jpg',
        alt: 'Custom Website Development',
      },
      title: 'Get Stunning Websites That Convert',
      button: {
        label: 'Explore Web Solutions',
        href: '/contact',
      },
    },
    {
      image: {
        src: '/assets/images/hero/hero-11.jpg',
        alt: 'SEO Strategy',
      },
      title: 'Boost Your Visibility with Smart SEO',
      button: {
        label: 'See SEO Plans',
        href: '/contact',
      },
    },
    {
      image: {
        src: '/assets/images/hero/hero-12.jpg',
        alt: 'Digital Marketing Services',
      },
      title: 'Grow Faster with Digital Marketing That Works',
      button: {
        label: 'Get a Marketing Audit',
        href: '#projects',
      },
    },
    {
      image: {
        src: '/assets/images/hero/hero-13.jpg',
        alt: 'Social Media Management',
      },
      title: 'Turn Followers Into Customers',
      button: {
        label: 'View Social Packages',
        href: '#projects',
      },
    },
  ],
};
