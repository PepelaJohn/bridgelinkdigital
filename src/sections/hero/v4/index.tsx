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
                  className="duration-[8000ms] h-full w-full bg-cover bg-center bg-no-repeat transition-transform ease-out hover:scale-105"
                  style={{ backgroundImage: `url(${item.image.src})` }}
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              </div>

              {/* Decorative Shapes */}
              <Shapes />

              {/* Content */}
              <Container >
                <div className="flex h-full items-center">
                  <div
                    className={cn(
                      'max-w-3xl transform space-y-8 transition-all duration-1000 ease-out',
                      isLoaded
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-12 opacity-0'
                    )}
                    style={{
                      transitionDelay: `${index * 200}ms`,
                    }}
                  >
                    {/* Subtitle */}
                    {/* {item?.subtitle && (
                      <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                        <span className="text-sm font-medium tracking-wide text-white/90">
                          {item.subtitle}
                        </span>
                      </div>
                    )} */}

                    {/* Main Title */}
                    <h1 className="font-display md:text-5xl lg:text-6xl xl:text-7xl text-4xl font-bold leading-tight text-white">
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

                    {/* Description */}
                    {/* {item.description && (
                      <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                        {item.description}
                      </p>
                    )} */}

                    {/* CTA Button */}
                    <div className="flex flex-wrap gap-4">
                      <Button
                        asChild
                        className="group relative overflow-hidden rounded-full bg-white px-8 py-4 !text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
                      >
                        <CustomLink
                          href={item.button.href}
                          openNewTab={item.button.openNewTab}
                          aria-label={item.button.label}
                          className="flex items-center gap-3"
                        >
                          <span className="font-semibold">
                            {item.button.label}
                          </span>
                          <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </CustomLink>
                      </Button>
                    </div>
                  </div>
                </div>
              </Container>

              {/* Slide Progress Indicator */}
              <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
                <div className="flex items-center gap-2">
                  {items.map((_, slideIndex) => (
                    <button
                      key={slideIndex}
                      onClick={() => goToSlide(slideIndex)}
                      className={cn(
                        'h-2 rounded-full transition-all duration-300',
                        slideIndex === currentSlide
                          ? 'w-8 bg-white'
                          : 'w-2 bg-white/40 hover:bg-white/60'
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

      {/* Navigation Controls */}
      <div className="absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col gap-4">
          {/* Navigation Buttons */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-white transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Autoplay Control */}
          <button
            onClick={toggleAutoplay}
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-white" />
            ) : (
              <Play className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-white">
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
      `}</style>
    </section>
  );
}
