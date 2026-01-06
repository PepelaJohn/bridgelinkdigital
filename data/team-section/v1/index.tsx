import { TeamSectionProps } from '@/src/sections/team/v1';
import { FaLinkedinIn, FaLink } from 'react-icons/fa6';

export const teamSectionData: TeamSectionProps = {
  sectionHeading: {
    subtitle: 'Meet the Team',
    title: 'Experts in SEO, Web Design, Development & Digital Marketing',
  },
  cards: [
    {
      slug: '#',
      image: {
        src: '/assets/images/team/viki.jpg',
        alt: 'Victor Adriano',
      },
      socials: [
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
      ],
      name: 'Victor Adriano',
      about: 'Chief Executive Officer',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/jemo.png',
        alt: 'Head Of Digital Strategy',
      },
      socials: [
        {
          href: 'https://www.linkedin.com/in/james-mugeni-065a15208',
          icon: <FaLinkedinIn />,
        },
      ],
      name: 'James Mugeni',
      about: 'Operations ',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/bush.jpg',
        alt: 'Caleb Bwire',
      },
      socials: [
        {
          href: 'https://www.linkedin.com/in/caleb-bwire-786696186',
          icon: <FaLinkedinIn />,
        },
      ],
      name: 'Caleb Bwire',
      about: 'Marketing and SEO',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/pepela2.jpg',
        alt: 'John Pepela',
      },
      socials: [
        {
          href: 'https://www.linkedin.com/in/pepelajohn',
          icon: <FaLinkedinIn />,
        },
        {
          href: 'https://www.pepelajohn.site',
          icon: <FaLink />,
        },
      ],
      name: 'John Pepela',
      about: 'Developer',
    },
  ],
};
