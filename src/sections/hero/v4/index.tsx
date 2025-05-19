'use client';

import { Container } from '@/src/components/container';
import { ImageProps, LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { Shapes } from '../v1/shapes';
import { heroData } from '@/data/hero/v1';
import { cn } from '@/src/utils/shadcn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper as SwiperType } from 'swiper/types';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface HeroSlide {
  title: string;
  subtitle?: string;
  description?: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  button: LinkProps;
}

export interface HeroProps {
  items: HeroSlide[];
}

export function Hero() {
  const swiperRef = useRef<SwiperType>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const { items } = heroData;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzNiIgY3k9IjUiIHI9IjUiLz48Y2lyY2xlIGN4PSI2IiBjeT0iNSIgcj0iNSIvPjxjaXJjbGUgY3g9IjM2IiBjeT0iMjMiIHI9IjUiLz48Y2lyY2xlIGN4PSI2IiBjeT0iMjMiIHI9IjUiLz48Y2lyY2xlIGN4PSIzNiIgY3k9IjQxIiByPSI1Ii8+PGNpcmNsZSBjeD0iNiIgY3k9IjQxIiByPSI1Ii8+PGNpcmNsZSBjeD0iMzYiIGN5PSI1OSIgcj0iNSIvPjxjaXJjbGUgY3g9IjYiIGN5PSI1OSIgcj0iNSIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      </div>

      <Swiper
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        effect="fade"
        speed={800}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex);
        }}
        className="h-full w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-full items-center justify-center">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <div
                  className="duration-[8000ms] h-full w-full bg-cover bg-center grayscale-1 bg-no-repeat transition-transform ease-out hover:scale-105"
                  style={{ backgroundImage: `url(${item.image.src})` }}
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-black/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              </div>

              {/* Decorative Shapes */}
              <Shapes />

              {/* Content */}
              <Container>
                <div className="flex  h-full items-center px-4 sm:px-6">
                  <div
                    className={cn(
                      'w-full max-w-5xl transform space-y-6 transition-all duration-1000 ease-out sm:space-y-8',
                      isLoaded
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-12 opacity-0'
                    )}
                    style={{
                      transitionDelay: `${index * 200}ms`,
                    }}
                  >
                    {/* Main Title - Responsive Typography */}
                    <h1 className="font-display xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-3xl font-bold leading-tight text-white sm:leading-tight md:leading-tight lg:leading-none">
                      <span className="block">
                        {item.title.split(' ').map((word, wordIndex) => (
                          <span
                            key={wordIndex}
                            className="animate-fade-in-up inline-block"
                            style={{
                              animationDelay: `${index * 200 + wordIndex * 100}ms`,
                              animationFillMode: 'both',
                            }}
                          >
                            {word}&nbsp;
                          </span>
                        ))}
                      </span>
                    </h1>

                   

                    {/* CTA Button - Responsive */}
                    <div className="flex flex-wrap gap-4">
                      <Button
                        asChild
                        className="group relative overflow-hidden rounded-full bg-white px-6 py-3 !text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 sm:px-8 sm:py-4"
                      >
                        <CustomLink
                          href={item.button.href}
                          openNewTab={item.button.openNewTab}
                          aria-label={item.button.label}
                          className="flex items-center gap-2 sm:gap-3"
                        >
                          <span className="text-sm font-semibold sm:text-base">
                            {item.button.label}
                          </span>
                          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                        </CustomLink>
                      </Button>
                    </div>
                  </div>
                </div>
              </Container>

              {/* Slide Progress Indicator - Mobile Responsive */}
              <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 sm:bottom-8">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {items.map((_, slideIndex) => (
                    <button
                      key={slideIndex}
                      onClick={() => goToSlide(slideIndex)}
                      className={cn(
                        'h-1.5 rounded-full transition-all duration-300 sm:h-2',
                        slideIndex === currentSlide
                          ? 'w-6 bg-white sm:w-8'
                          : 'w-1.5 bg-white/40 hover:bg-white/60 sm:w-2'
                      )}
                      aria-label={`Go to slide ${slideIndex + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Controls - Hidden on smaller screens */}
      <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 sm:right-8 md:block">
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Navigation Buttons */}
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30 sm:h-12 sm:w-12"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover:-translate-x-0.5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30 sm:h-12 sm:w-12"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Autoplay Control */}
          <button
            onClick={toggleAutoplay}
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30 sm:h-12 sm:w-12"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            ) : (
              <Play className="h-4 w-4 text-white sm:h-5 sm:w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Slide Counter - Responsive positioning */}
      <div className="absolute bottom-4 right-4 z-20 hidden sm:bottom-8 sm:right-8 sm:block">
        <div className="rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2">
          <span className="text-xs font-medium text-white sm:text-sm">
            {String(currentSlide + 1).padStart(2, '0')} /{' '}
            {String(items.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Additional responsive typography for very small screens */
        @media (max-width: 375px) {
          .font-display {
            font-size: clamp(1.75rem, 8vw, 2.25rem);
          }
        }

        /* Optimize for tablets */
        @media (min-width: 768px) and (max-width: 1024px) {
          .font-display {
            font-size: clamp(3rem, 7vw, 4.5rem);
          }
        }

        /* Large screens optimization */
        @media (min-width: 1920px) {
          .font-display {
            font-size: clamp(5rem, 6vw, 8rem);
          }
        }
      `}</style>
    </section>
  );
}
