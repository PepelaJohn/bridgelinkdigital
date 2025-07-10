'use client';
import { footerSectionData } from '@/data/layout/footer/v1';
import { ImageProps, LinkProps, SectionProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import { Easing, motion } from 'framer-motion';
import { BrandLogo } from 'src/layout/brand-logo';
import {
  FaChevronRight,
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
} from 'react-icons/fa6';
import { FaCalendarDays } from 'react-icons/fa6';

interface RecentBlog {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  date: string;
  title: string;
}

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

export interface FooterSectionProps {
  about: {
    description: string;
    socialLinks: SocialLinkProps[];
  };
  columnOne: {
    title: string;
    links: LinkProps[];
  };
  columnTwo: {
    title: string;
    location: string;
    mails: string[];
    phoneNumbers: string[];
  };
  columnThree: {
    title: string;
    blogs: RecentBlog[];
  };
  footerBottom: {
    copyrightText: string;
    links: LinkProps[];
  };
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay * 0.1,
      ease: [0.25, 0.25, 0.25, 0.75] as unknown as Easing[],
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Footer({ className }: SectionProps) {
  const { about, columnOne, columnTwo, columnThree, footerBottom } =
    footerSectionData;

  return (
    <footer
      className={cn(
        'overflow-hidden bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300',
        className
      )}
    >
      <div className="py-16 md:py-20">
        <Container>
          <motion.div
            className="grid gap-10 md:grid-cols-2 xl:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* About Section */}
            <motion.div variants={fadeInUp } custom={0}>
              <BrandLogo />
              <p className="mb-7 mt-3 text-gray-600 dark:text-gray-400">
                {about.description}
              </p>
              {about.socialLinks && about.socialLinks.length > 0 && (
                <nav aria-label="social links">
                  <ul className="inline-flex min-h-[50px] items-center divide-x divide-white/20 rounded-lg bg-primary  text-white">
                    {about.socialLinks.map((socialLink, index) => (
                      <li key={index}>
                        <CustomLink
                          aria-label={socialLink.href}
                          className="block px-4 text-base transition-transform duration-300 hover:-translate-y-1"
                          href={socialLink.href}
                          openNewTab
                        >
                          <span>{socialLink.icon}</span>
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </motion.div>

            {/* Column One - Links */}
            <motion.div variants={fadeInUp } custom={1}>
              <h3 className="mb-5 text-lg font-bold leading-tight text-gray-900 dark:text-white md:mb-8 md:text-xl">
                {columnOne.title}
              </h3>
              {columnOne.links && columnOne.links.length > 0 && (
                <nav aria-label="footer links navigation">
                  <ul className="grid gap-2">
                    {columnOne.links.map((link) => (
                      <li
                        key={link.label}
                        className="flex items-center gap-2.5"
                      >
                        <span className="flex-none text-sm text-gray-900 dark:text-white">
                          <FaChevronRight />
                        </span>
                        <CustomLink
                          href={link.href}
                          openNewTab={link.openNewTab}
                          className="text-gray-600 transition-colors duration-300 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                        >
                          {link.label}
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </motion.div>

            {/* Column Two - Contact Info */}
            <motion.div variants={fadeInUp } custom={2}>
              <h3 className="mb-5 text-lg font-bold leading-tight text-gray-900 dark:text-white md:mb-8 md:text-xl">
                {columnTwo.title}
              </h3>
              <ul aria-label="addresses" className="grid gap-5">
                <li className="flex items-center gap-5">
                  <span className="inline-grid h-10 w-10 flex-none place-items-center rounded-lg border border-gray-300 bg-white text-primary dark:border-gray-600 dark:bg-gray-800">
                    <FaPaperPlane />
                  </span>
                  <address className="not-italic text-gray-600 dark:text-gray-400">
                    {columnTwo.location}
                  </address>
                </li>
                <li className="flex items-center gap-5">
                  <span className="inline-grid h-10 w-10 flex-none place-items-center rounded-lg border border-gray-300 bg-white text-primary dark:border-gray-600 dark:bg-gray-800">
                    <FaEnvelope />
                  </span>
                  {columnTwo.mails && columnTwo.mails.length > 0 && (
                    <div className="grid gap-1">
                      {columnTwo.mails.map((mail, index) => (
                        <a
                          key={index}
                          href={`mailto:${mail}`}
                          className="text-gray-600 transition-colors duration-300 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                        >
                          {mail}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
                <li className="flex items-center gap-5">
                  <span className="inline-grid h-10 w-10 flex-none place-items-center rounded-lg border border-gray-300 bg-white text-primary dark:border-gray-600 dark:bg-gray-800">
                    <FaPhone />
                  </span>
                  {columnTwo.phoneNumbers &&
                    columnTwo.phoneNumbers.length > 0 && (
                      <div className="grid gap-1">
                        {columnTwo.phoneNumbers.map((phoneNumber, index) => (
                          <a
                            key={index}
                            href={`tel:${phoneNumber.split(' ').join('')}`}
                            className="text-gray-600 transition-colors duration-300 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                          >
                            {phoneNumber}
                          </a>
                        ))}
                      </div>
                    )}
                </li>
              </ul>
            </motion.div>

            {/* Column Three - Recent Blogs */}
            <motion.div variants={fadeInUp } custom={3}>
              <h3 className="mb-5 text-lg font-bold leading-tight text-gray-900 dark:text-white md:mb-8 md:text-xl">
                {columnThree.title}
              </h3>
              {columnThree.blogs && columnThree.blogs.length > 0 && (
                <div className="grid gap-6">
                  {columnThree.blogs.map((blog, index) => (
                    <article
                      key={index}
                      className="group flex items-center gap-4 text-gray-700 dark:text-white"
                    >
                      <div>
                        <p className="flex items-center gap-2.5 text-gray-500 dark:text-gray-400">
                          <span className="text-primary">
                            <FaCalendarDays />
                          </span>
                          <span>{blog.date}</span>
                        </p>
                        <h4 className="text-base font-bold leading-normal">
                          <CustomLink
                            href={blog.slug}
                            className="text-gray-700 transition-colors duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
                          >
                            {blog.title}
                          </CustomLink>
                        </h4>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="flex min-h-[90px] items-center border-t border-gray-300 border-opacity-20 py-5 dark:border-gray-600 dark:border-opacity-20">
        <Container>
          <motion.div
            className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 md:gap-x-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-600 dark:text-gray-400">
              {footerBottom.copyrightText}
            </p>
            {footerBottom.links && footerBottom.links.length > 0 && (
              <nav aria-label="footer bottom navigation">
                <ul className="flex flex-wrap items-center gap-x-4 md:gap-x-7">
                  {footerBottom.links.map((link) => (
                    <li key={link.label}>
                      <CustomLink
                        aria-label={`Go to page ${link.label}`}
                        href={link.href}
                        openNewTab={link.openNewTab}
                        className="text-gray-600 transition-colors duration-300 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                      >
                        {link.label}
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </motion.div>
        </Container>
      </div>
    </footer>
  );
}
