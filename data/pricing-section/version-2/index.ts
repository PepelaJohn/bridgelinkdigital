// data/pricing-section/version-2/index.ts
import { PricingSectionProps } from '@/src/sections/pricing/version-2';

export const pricingSectionData: PricingSectionProps = {
  categories: [
    {
      title: 'Website Design & Development',
      cards: [
        {
          title: 'Starter Website',
          description:
            'Best for small businesses and startups needing an online presence.',
          features: [
            'Up to 5 pages (Home, About, Services, Contact, Gallery)',
            'Responsive design (mobile, tablet, desktop)',
            'Contact form',
            'WhatsApp integration',
            'Google Maps integration',
            'Basic SEO setup',
            'Social media integration',
            '1 round of revisions',
          ],
          price: 'KSh 25,000',
          duration: '/project',
          button: { href: '/contact', label: 'Get Started' },
        },
        {
          title: 'Business Website',
          description:
            'Best for growing businesses that want to attract and convert customers.',
          features: [
            'Up to 10 pages',
            'Blog system',
            'Custom UI design',
            'Speed optimization',
            'Analytics integration',
            'CMS training',
            '2 rounds of revisions',
          ],
          price: 'KSh 45,000',
          duration: '/project',
          badge: '⭐ Recommended',
          button: { href: '/contact', label: 'Get Started' },
        },
        {
          title: 'Premium Website',
          description:
            'Best for brands focused on growth, lead generation, and strong online presence.',
          features: [
            'Up to 20 pages',
            'Advanced UI/UX design',
            'Lead capture forms',
            'Newsletter integration',
            'Advanced animations and interactions',
            'Advanced SEO optimization',
            'Google Analytics & Search Console setup',
            'Priority support',
          ],
          price: 'KSh 75,000',
          duration: '/project',
          button: { href: '/contact', label: 'Get Started' },
        },
        {
          title: 'E-Commerce Website',
          description: 'Best for businesses selling products online.',
          features: [
            'Product catalog',
            'Online payments (M-Pesa, cards)',
            'Inventory management',
            'Order management dashboard',
            'Customer accounts',
            'Shipping setup',
          ],
          price: 'From KSh 120,000',
          duration: '/project',
          button: { href: '/contact', label: 'Get Started' },
        },
      ],
    },
    {
      title: 'Social Media Management',
      cards: [
        {
          title: 'Starter',
          description: 'Best for small businesses starting on social media.',
          features: [
            '4 posts per week',
            'Caption writing',
            'Basic graphic design',
            'Hashtag research',
            'Monthly performance report',
          ],
          price: 'KSh 15,000',
          duration: '/month',
          button: { href: '/contact', label: 'Get Started' },
        },
        {
          title: 'Growth',
          description: 'Best for businesses looking to grow their audience.',
          features: [
            'Up to 10 posts per month',
            'Custom graphics',
            'Content calendar',
            'Community management',
            'Monthly analytics report',
          ],
          price: 'KSh 30,000',
          duration: '/month',
          badge: '⭐ Recommended',
          button: { href: '/contact', label: 'Get Started' },
        },
        {
          title: 'Premium',
          description:
            'Best for brands focused on aggressive growth and marketing.',
          features: [
            'Up to 20 posts per month',
            'Short-form video (Reels / TikTok)',
            'Advanced content strategy',
            'Competitor analysis',
            'Community engagement',
            'Ad campaign guidance',
          ],
          price: 'KSh 55,000',
          duration: '/month',
          button: { href: '/contact', label: 'Get Started' },
        },
      ],
    },
  ],
  addOns: [
    { label: 'Logo design', price: 'KSh 8,000' },
    { label: 'Branding kit', price: 'KSh 15,000' },
    { label: 'Website maintenance', price: 'From KSh 5,000 / month' },
    { label: 'SEO services', price: 'From KSh 20,000 / month' },
    { label: 'Content writing', price: 'KSh 1,500 per page' },
    { label: 'Hosting & maintenance', price: 'From KSh 12,000 / year' },
  ],
};
