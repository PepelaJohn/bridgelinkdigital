import { FooterSectionProps } from '@/src/layout/footer/v1';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'BridgeLink helps businesses build powerful digital presences through expert website design, development, and strategic social media management.',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/',
      },
      {
        icon: <FaTwitter />,
        href: 'https://twitter.com/',
      },
      {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/',
      },
      {
        icon: <FaLinkedinIn />,
        href: 'https://www.linkedin.com/',
      },
      {
        icon: <FaPinterestP />,
        href: 'https://www.pinterest.com/',
      },
    ],
  },
  columnOne: {
    title: 'Our Services',
    links: [
      {
        label: 'Website Design',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Website Development',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'E-commerce Solutions',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Social Media Management',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Content Creation',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'SEO Optimization',
        href: '/',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Contact Us',
    location: 'Nairobi, Kenya',
    mails: ['hello@bridgelink.com', 'support@bridgelink.com'],
    phoneNumbers: ['(+254) 798-014749', '(+254) 107-709038'],
  },
  columnThree: {
    title: 'Recent Blogs',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-1.jpg',
          alt: 'Responsive Design Trends for 2025',
        },
        title: 'Responsive Design Trends for 2025',
        date: 'May 15, 2025',
        slug: '#',
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.jpg',
          alt: 'Social Media Strategies That Convert',
        },
        title: 'Social Media Strategies That Convert',
        date: 'May 10, 2025',
        slug: '#',
      },
    ],
  },
  footerBottom: {
    copyrightText: '© BridgeLink 2025 | All Rights Reserved',
    links: [
      {
        label: 'Terms & Conditions',
        href: '/terms-and-conditions',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/privacy-policy',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/contact',
        openNewTab: false,
      },
    ],
  },
};
