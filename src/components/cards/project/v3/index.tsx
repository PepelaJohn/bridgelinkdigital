'use client';
import { CustomLink } from '@/src/components/custom-link';
import { SectionHeading } from '@/src/components/section-heading';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
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
      target="_blank"
      href={websiteUrl}
      ref={containerRef}
      className="group/portfolio relative aspect-[1280/800] w-full overflow-hidden bg-gray-50 transition-all duration-300 hover:shadow-2xl dark:bg-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={cn(
          // Normal
          'absolute inset-0 z-[2] bg-gradient-to-b from-black/0 via-black/20 to-black/80 [transition:all_500ms_ease] md:[transform:perspective(400px)_rotateX(90deg)_scaleY(0.5)]',
          // Hover
          'md:group-hover/portfolio:[transform:perspective(400px)_rotateX(0deg)_scaleY(1.0)] md:group-hover/portfolio:[transition-delay:.1s] md:group-hover/portfolio:[transition:all_.7s_ease]'
        )}
      ></span>
      {/* Scrolling Website Screenshot */}
      {imageUrl && (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            height={800}
            width={1200}
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
        className={`absolute inset-0 z-10 bg-gradient-to-t duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative z-10 flex h-full p-2 flex-col">
          <div className="mt-auto divide-y max-w-[80%] md:opacity-0 md:transition-[transform,opacity] md:duration-500  md:group-hover/portfolio:opacity-100">
            <h3 className="overflow-hidden text-md font-bold leading-[1.25] text-white md:text-lg">
              <span className="block [transition-delay:500ms] [transition:all_.9s_ease] md:[transform:translateY(-100%)] md:group-hover/portfolio:[transform:translateY(0)]">
                {title}
              </span>
            </h3>
            <p className=" overflow-hidden pt-[11px] text-body">
              <span className="block [transition-delay:500ms] [transition:all_.9s_ease] md:[transform:translateY(100%)] md:group-hover/portfolio:[transform:translateY(0)]">
                {description}
              </span>
            </p>
          </div>
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
    <div className="min-h-screen  px-6 sm:py-12">
      <div className="max-w-8xl mx-auto">
        <div className="mb-12 text-center">
          <SectionHeading
            className="max-sm:hidden"
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
