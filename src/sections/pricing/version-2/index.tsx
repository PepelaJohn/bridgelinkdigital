// src/sections/pricing/version-2/index.tsx
import { PricingCard, PricingCardProps } from 'src/components/cards/pricing/v2';
import { Container } from '@/src/components/container';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { pricingSectionData } from '@/data/pricing-section/version-2';
import { SectionProps } from '@/src/common-types';
import { cn } from '@/src/utils/shadcn';

export interface AddOn {
  label: string;
  price: string;
}

export interface PricingCategory {
  title: string;
  cards: PricingCardProps[];
}

export interface PricingSectionProps {
  categories: PricingCategory[];
  addOns?: AddOn[];
}

export function PricingSection({ className }: SectionProps) {
  const { categories, addOns } = pricingSectionData;

  return (
    <section className={cn('section-padding-primary pb-0!', className)}>
      <Container>
        {/* Categories */}
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16 last:mb-0">
            {/* Category heading */}
            <h2 className="font-secondary text-accent-900 mb-10 text-center text-xl font-bold lg:text-2xl dark:text-white">
              {category.title}
            </h2>

            {/* Cards */}
            <div className="gap-y-30px -mx-4 flex flex-wrap justify-center">
              {category.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  data-aos="fade-up"
                  data-aos-delay={getStaggeredDelay(
                    [200, 400, 600, 800],
                    cardIndex
                  )}
                  className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/3"
                >
                  <PricingCard {...card} />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Add-ons */}
        {addOns && addOns.length > 0 && (
          <div className="mt-16 mb-0">
            <h2 className="font-secondary text-accent-900 mb-10 text-center text-xl font-bold lg:text-2xl dark:text-white">
              Optional Add-Ons
            </h2>
            <div className="-mx-4 flex flex-wrap justify-center gap-y-4 pb-16">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={getStaggeredDelay(
                    [100, 200, 300, 400, 500, 600],
                    index
                  )}
                  className="w-full px-4 sm:w-1/2 lg:w-1/3"
                >
                  <div className="rounded-5 shadow-3 dark:bg-accent-700 flex items-center justify-between bg-white px-6 py-4 dark:shadow-none">
                    <span className="font-secondary text-md text-accent-800 font-bold dark:text-white">
                      {addon.label}
                    </span>
                    <span className="font-secondary text-md text-primary ml-4 shrink-0 font-bold">
                      {addon.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        <div className="text-accent-700 dark:text-accent-300 py-16 text-center text-sm">
          <p>
            50% deposit required before project start · Remaining balance due
            upon completion
          </p>
          <p className="mt-1">
            Custom quotes available for complex projects · Delivery timelines
            depend on project scope
          </p>
        </div>
      </Container>
    </section>
  );
}
