
import {
  Share2,
  Layout,
  Code,
  Search,
  FileText,
  BarChart3,
} from 'lucide-react';

export const serviceSectionData = {
  services: [
    {
      icon: <Share2 size={24} />,
      title: 'Social Media Marketing',
      description:
        'Boost your brand presence with our strategic social media campaigns. We create engaging content that connects with your audience and drives measurable growth across all platforms.',
      slug: '/social-media-marketing',
    },
    {
      icon: <Layout size={24} />,
      title: 'Website Design',
      description:
        'Transform your digital presence with our stunning, user-focused website designs. We create visually appealing interfaces that captivate visitors and reflect your unique brand identity.',
      slug: '/website-design',
    },
    {
      icon: <Code size={24} />,
      title: 'Website Development',
      description:
        'Bring your vision to life with our expert development services. We build responsive, high-performance websites with clean code that function flawlessly across all devices.',
      slug: '/website-development',
    },
    {
      icon: <Search size={24} />,
      title: 'Search Engine Optimization',
      description:
        'Climb the search rankings and get discovered by your target audience. Our data-driven SEO strategies increase organic traffic and help your business achieve sustainable online growth.',
      slug: '/seo-services',
    },
    {
      icon: <FileText size={24} />,
      title: 'Content Marketing',
      description:
        'Tell your brand story with compelling content that resonates with your audience. Our strategic content creation drives engagement, builds authority, and supports your overall marketing goals.',
      slug: '/content-marketing',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Analytics & Reporting',
      description:
        'Make informed decisions with our comprehensive analytics services. We track key performance metrics and provide actionable insights to continuously optimize your digital marketing strategy.',
      slug: '/analytics-reporting',
    },
  ],
};
