import { TeamSectionProps } from '@/src/sections/team/v1';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa6';

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
        alt: 'Victor Bwire',
      },
      socials: [
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
      ],
      name: 'Victor Bwire',
      about: 'Chief Executive Officer',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/jemo.jpg',
        alt: 'James Mugeni',
      },
      socials: [
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
      ],
      name: 'James Mugeni',
      about: 'Head of Digital Strategy',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/bush.jpg',
        alt: 'Caleb Bwire',
      },
      socials: [
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
      ],
      name: 'Caleb Bwire',
      about: 'Director of Marketing & SEO',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/pepela2.jpg',
        alt: 'John Pepela',
      },
      socials: [
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
      ],
      name: 'John Pepela',
      about: 'Lead Developer & Tech Specialist',
    },
  ],
};
