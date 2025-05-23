'use client';
import { CustomLink } from '@/src/components/custom-link';
import { SectionHeading } from '@/src/components/section-heading';
import React, { useState, useRef, useEffect } from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  websiteUrl: string;
  imageUrl?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  websiteUrl,
 
  imageUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [offset, setOffset] = useState(0);
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const startScrolling = () => {
    let start: number | null = null;
    const scrollSpeed = 0.2; // lower = slower

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const newOffset =
        (elapsed * scrollSpeed) % (imageRef.current?.scrollHeight || 3000);

      setOffset(-newOffset);
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
  };

  const stopScrolling = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    setOffset(0);
  };

  useEffect(() => {
    if (isHovered) {
      startScrolling();
    } else {
      stopScrolling();
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  return (
    <CustomLink
      target='_blank'
      href={websiteUrl}
      ref={containerRef}
      className="group relative aspect-[1280/800] w-full overflow-hidden bg-yellow-500 transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Scrolling Website Screenshot */}
      {imageUrl && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={imageRef}
            src={imageUrl}
            alt={title}
            className="absolute left-0 top-0 w-full transition-transform duration-300"
            style={{ transform: `translateY(${offset}px)` }}
          />
        </div>
      )}

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
          <h3 className=" translate-y-2 text-xl uppercase font-bold transition-transform duration-300 group-hover:translate-y-0">
            {title}
          </h3>
          <p className="m translate-y-2 text-sm text-gray-200 transition-transform delay-75 duration-300 group-hover:translate-y-0">
            {description}
          </p>
        
        
        </div>
      </div>

      {/* Scroll Status Indicator */}
      {isHovered && (
        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Auto-scrolling
        </div>
      )}
    </CustomLink>
  );
};

// Example usage component
const PortfolioShowcase: React.FC = () => {
  const portfolioItems = [
    {
      title: 'Drone Delivery Service',
      description:
        'Autonomous drone delivery system for medical logistics and emergency response.',
      websiteUrl: 'https://lunadrone.com',
      technologies: ['React', 'Node.js', 'MongoDB', 'Leaflet'], // assumed stack
      imageUrl: '/assets/images/project/lunalarge.jpg',
    },
    {
      title: 'Event Management',
      description:
        'Interactive platform for organizing, scheduling, and marketing live events.',
      websiteUrl: 'https://events-team.netlify.app',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'], // assumed stack
      imageUrl: '/assets/images/project/royalevents.jpg',
    },
    {
      title: 'Luxury Design Brand',
      description: 'Ecommerce platform for a premium streetwear fashion label.',
      websiteUrl: 'https://milanodirouge.com/',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe'], // assumed stack
      imageUrl: '/assets/images/project/milano.jpg',
    },
    {
      title: 'Diamond Shop',
      description:
        'Online jewelry store with SEO and social commerce features.',
      websiteUrl: 'https://www.thediamondstore.co.uk/',
      technologies: ['React', 'Express', 'MongoDB'], // assumed stack
      imageUrl: '/assets/images/project/diamondstore.jpg',
    },
    {
      title: 'Dental Clinic',
      description:
        'Professional clinic site with secure patient services and appointment booking.',
      websiteUrl: 'https://www.wausausmiles.com/',
      technologies: ['Next.js', 'Sanity.io', 'Tailwind CSS'], // assumed stack
      imageUrl: '/assets/images/project/wausau.jpg',
    },
    {
      title: 'Milano Italian Furniture',
      description:
        'High-end furniture ecommerce site with immersive visual storytelling.',
      websiteUrl: 'https://milanoitalianfurniture.com/',
      technologies: ['Gatsby', 'GraphQL', 'Contentful'], // assumed stack
      imageUrl: '/assets/images/project/milanofurniture.jpg',
    },
    {
      title: 'Dental Consultancy',
      description:
        'Mobile-first website for promoting cosmetic and general dentistry services.',
      websiteUrl: 'https://parkdaledentalcenter.com/cosmetic-dentistry/',
      technologies: ['HTML5', 'CSS3', 'JavaScript'], // assumed stack
      imageUrl: '/assets/images/project/parkdale.jpg',
    },
    {
      title: 'BayPark Smiles Dental Clinic',
      description:
        'Optimized dental website with patient engagement and analytics tools.',
      websiteUrl: 'https://bayparksmiles.com/',
      technologies: ['WordPress', 'Elementor', 'Google Analytics'], // assumed stack
      imageUrl: '/assets/images/project/baypark.jpg',
    },
  ];
  

  return (
    <div className="min-h-screen  px-6 py-12">
      <div className="max-w-8xl mx-auto">
        <div className="mb-12 text-center">
         <SectionHeading
                      subtitle="Featured Portfolio"
                      title="Connecting brands to digital world"
                      alignment="center"
                      hasBottomSpacing
                    />
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 cursor-auto">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              title={item.title}
              description={item.description}
              websiteUrl={item.websiteUrl}
 
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioShowcase;
