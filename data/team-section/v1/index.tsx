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
        alt: 'Head Of Digital Strategy',
      },
      socials: [
        {
          href: 'https://www.linkedin.com/in/james-mugeni-065a15208',
          icon: <FaLinkedinIn />,
        },
      ],
      name: 'James Mugeni',
      about: 'Operations Manager',
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
      about: 'Director Of Marketing and SEO',
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
      ],
      name: 'John Pepela',
      about: 'Technical Director & Developer',
    },
  ],
};
