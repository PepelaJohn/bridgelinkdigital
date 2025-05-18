import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href:'/services',
   
  },
  {
    label: 'Projects',
    href:'/projects'
  },

  {
    title: 'Pages',
    subMenuItems: [
      {
        label: 'Testimonials',
        href: '/testimonials',
      },
      {
        label: 'Team',
        href: '/team',
      },
   
      {
        label: 'FAQ',
        href: '/faq',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
