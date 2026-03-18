import {
  ImageProps,
  LinkProps,
  SocialItemProps,
  blurDataUrl,
} from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { TextInput } from '@/src/components/inputs/text-input';
import { TextAreaInput } from '@/src/components/inputs/textarea-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import {
  FaLinkedinIn,
  FaMagnifyingGlass,
  FaQuoteRight,
  FaRegComments,
  FaRegFolderOpen,
  FaRegUser,
  FaReply,
  FaTags,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa6';

interface AuthorProps {
  image: Omit<ImageProps, 'width' | 'height'>;
  name: string;
  about: string;
  socialLinks: SocialItemProps[];
}

const authorData: AuthorProps = {
  image: {
    src: '/assets/images/blog/author-1.png',
    alt: 'author image 1',
  },
  name: 'Naturials paul',
  about:
    'Aliquam eros justo, posuere lobort viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non',
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
  ],
};

const socialLinks: SocialItemProps[] = [
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
];

function Author({ image, name, about, socialLinks }: AuthorProps) {
  return (
    <div className="rounded-5 bg-accent-100 dark:bg-accent-700 space-y-5 p-8 text-center lg:p-10">
      <Image
        src={image.src}
        alt={image.alt || name}
        width={127}
        height={127}
        placeholder="blur"
        blurDataURL={blurDataUrl}
        className="mx-auto rounded-full object-cover"
      />
      <h3 className="font-secondary text-accent-900 text-lg leading-tight font-bold md:text-xl dark:text-white">
        {name}
      </h3>
      <p>{about}</p>
      {socialLinks && socialLinks.length > 0 && (
        <nav aria-label="social links">
          <ul className="divide-accent-800/50 text-accent-900 dark:divide-accent-100/50 inline-flex items-center divide-x dark:text-white">
            {socialLinks.map((socialLink, index) => (
              <li key={index}>
                <CustomLink
                  href={socialLink.href}
                  openNewTab
                  className="hover:text-primary block px-4 text-base/[1.75] transition-transform duration-350 hover:-translate-y-1"
                >
                  <span>{socialLink.icon}</span>
                </CustomLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

function SearchBox() {
  return (
    <div className="rounded-5 bg-accent-100 dark:bg-accent-700 space-y-5 p-8 lg:p-10">
      <h3 className="font-secondary text-md text-accent-900 leading-tight font-bold md:text-lg dark:text-white">
        Searach
      </h3>
      <div className="flex items-center gap-0">
        <TextInput
          placeholder="Your name"
          name="text"
          className="rounded-5 dark:bg-accent-900 rounded-r-none border-none bg-white"
        />
        <Button
          type="submit"
          className="h-[60px]! w-[60px]! flex-none rounded-l-none p-0!"
        >
          <span className="relative z-1">
            <FaMagnifyingGlass />
          </span>
        </Button>
      </div>
    </div>
  );
}

interface CategoryListProps {
  links: LinkProps[];
}

const categoryListData: CategoryListProps = {
  links: [
    {
      label: 'Genarel consturction',
      href: '',
    },
    {
      label: 'Business Advice',
      href: '',
    },
    {
      label: 'Stock market',
      href: '',
    },
    {
      label: 'Regular start',
      href: '',
    },
    {
      label: 'Regular start',
      href: '',
    },
  ],
};

function CategoryList({ links }: CategoryListProps) {
  return (
    <div className="rounded-5 bg-accent-100 dark:bg-accent-700 space-y-5 p-8 lg:p-10">
      <h3 className="font-secondary text-md text-accent-900 leading-tight font-bold md:text-lg dark:text-white">
        Category
      </h3>
      {links && links.length > 0 && (
        <nav aria-label="footer links navigation">
          <ul className="divide-accent-700/20 dark:divide-accent-200/20 grid gap-2.5 divide-y">
            {links.map((link, index) => (
              <li
                key={index}
                className="flex items-center gap-2.5 pt-2.5 first:pt-0"
              >
                <span className="border-primary grid h-3 w-3 place-items-center border">
                  <span className="bg-primary block h-0.5 w-0.5"></span>
                </span>
                <CustomLink
                  href={link.href}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </CustomLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

interface TagwidgetProps {
  tags: string[];
}

const tagwidgetData: TagwidgetProps = {
  tags: ['All Project', 'Stand', 'Regularly', 'Startup', 'Productsline'],
};

function Tagswidget({ tags }: TagwidgetProps) {
  return (
    <div className="rounded-5 bg-accent-100 dark:bg-accent-700 space-y-5 p-8 lg:p-10">
      <h3 className="font-secondary text-md text-accent-900 leading-tight font-bold md:text-lg dark:text-white">
        Tags
      </h3>
      {tags && tags.length > 0 && (
        <nav aria-label="tags">
          <ul className="flex flex-wrap gap-5">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-5 border-accent-900/20 text-accent-800 hover:bg-primary dark:bg-accent-900 dark:text-body dark:hover:bg-primary inline-flex min-h-10 cursor-pointer items-center border px-2.5 py-0.5 transition-colors duration-300 hover:border-transparent hover:text-white dark:border-none dark:hover:text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

const linkClasses = cn(
  'transition-colors duration-400 hover:text-primary ease-in-out inline'
);

const inputBoxClasses = cn(
  'focus:border-primary dark:focus:border-primary focus:border-opacity-100 dark:focus:border-opacity-100'
);

export function BlogDetilsSection() {
  return (
    <section className="section-padding-primary">
      <Container>
        <div className="gap-30px grid lg:grid-cols-[1fr_410px]">
          <div>
            <div className="[&_p+P]:mt-4">
              <Image
                src="/assets/images/blog/blog-details-1.png"
                alt="blog single 1"
                width={850}
                height={538}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                sizes="100vw"
              />

              {/* Meta  */}
              <ul
                aria-label="blog meta list"
                className="lg:mt-30px mt-6 mb-4 flex flex-wrap items-center gap-x-4.5 gap-y-2 lg:mb-5"
              >
                <li className="flex items-center gap-2.5">
                  <span className="text-primary flex-none text-sm">
                    <FaRegUser />
                  </span>
                  <span>
                    By{' '}
                    <CustomLink href="#" className={linkClasses}>
                      admin
                    </CustomLink>
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-primary flex-none text-sm">
                    <FaRegFolderOpen />
                  </span>
                  <CustomLink href="#" className={linkClasses}>
                    Category
                  </CustomLink>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-primary flex-none text-sm">
                    <FaRegComments />
                  </span>
                  <span>
                    <CustomLink href="#" className={linkClasses}>
                      Comments (05)
                    </CustomLink>
                  </span>
                </li>
              </ul>

              <div className="bg-body/30 my-4 h-px lg:my-5"></div>
              <p>
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra .Aliquam eros justo, posuere
                lobortis, viverra laoreet augue mattis fermentum ullamcorper
                viverra laoreet Aliquam eros justo, posuere loborti viverra
                laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                posuere lobortis non, viverra laoreet augue mattis.Aliquam eros
                justo, posuere loborti viverra laoreet matti ullamcorper posuere
                viverra .Aliquam eros justo, posuere lobortis, viverra laoreet
                augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
                justo, posuere loborti viverra laoreet matti ullamcorper posuere
                viverra .Aliquam eros justo, posuere lobortis non, viverra
                laoreet augue mattis ullamcorper posuere viverra laoreet augue
                mattis.
              </p>

              <blockquote className="my-30px rounded-5 bg-accent-100 dark:bg-accent-700 grid gap-5 py-10 text-center lg:px-[70px]">
                <span className="text-primary dark:bg-accent-900 mx-auto grid h-[50px] w-[50px] place-items-center rounded-full bg-white text-[1.25rem]">
                  <FaQuoteRight />
                </span>
                <p className="font-secondary text-md leading-tight font-medium md:text-lg">
                  With a commitment to driving technological evolution, our IT
                  solutions and services are the cornerstone of your digital
                  progression. We transcend boundaries, enabling businesses to
                  not
                </p>
                <div className="text-accent-700 mt-3 dark:text-white">
                  <h3 className="h3">Stanio lainto</h3>
                  <p>Authore</p>
                </div>
              </blockquote>
              <p>
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra .Aliquam eros justo, posuere
                lobortis non, viverra laoreet augue mattis fermentum ullamcorper
                viverra laoreet Aliquam eros justo, posuere.
              </p>
              <p>
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra .Aliquam eros justo, posuere
                lobortis, viverra laoreet augue mattis fermentum ullamcorper
                viverra laoreet Aliquam eros justo, posuere loborti viverra
                laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                posuere lobortis non.
              </p>
              <Image
                src="/assets/images/blog/blog-details-2.png"
                alt="blog single 2"
                width={850}
                height={352}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                sizes="100vw"
                className="mb-30px rounded-5 mt-[60px] block"
              />
              <p>
                Aliquam eros justo, posuere loborti viverra lao ullamcorper
                posuere viverra .Aliquam eros justo, posuere lobortis non,
                viverra laoreet augue mattis start fermentum ullamcor viverra
                laoreet By Admin . Creativity . 28th February 2022 . Leave a
                comment viverra laoreet augue mattis start fermentum star.
              </p>
              <p>
                Aliquam eros justo, posuere loborti viverra laoreet matti
                ullamcorper posuere viverra .Aliquam eros justo, posuere
                lobortis, viverra laoreet augue mattis fermentum ullamcorper
                viverra laoreet Aliquam eros justo, posuere loborti viverra
                laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                posuere lobortis non.
              </p>
              <div className="rounded-5 bg-accent-100 px-30px dark:bg-accent-700 my-10 flex flex-wrap items-center justify-between gap-x-5 gap-y-2.5 py-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-primary">
                    <FaTags />
                  </span>
                  <div className="inline-flex flex-wrap gap-1">
                    <span>
                      <CustomLink href="#" className={linkClasses}>
                        Marketing
                      </CustomLink>
                      ,
                    </span>
                    <span>
                      <CustomLink href="#" className={linkClasses}>
                        branding
                      </CustomLink>
                      ,
                    </span>
                    <span>
                      <CustomLink href="#" className={linkClasses}>
                        corporate
                      </CustomLink>
                      ,
                    </span>
                    <span>
                      <CustomLink href="#" className={linkClasses}>
                        business
                      </CustomLink>
                    </span>
                  </div>
                </div>
                {socialLinks && socialLinks.length > 0 && (
                  <nav aria-label="social links">
                    <ul className="text-primary inline-flex items-center gap-4">
                      {socialLinks.map((socialLink, index) => (
                        <li key={index}>
                          <CustomLink
                            className="block text-base/[1.75] transition-transform duration-350 hover:-translate-y-1"
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
              </div>

              <div className="flex flex-col items-start gap-x-6 gap-y-5 md:flex-row">
                <Image
                  src="/assets/images/blog/author-2.png"
                  alt="Stanio lainto"
                  width={85}
                  height={87}
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  sizes="100vw"
                  className="rounded-10 flex-none"
                />
                <div className="text-accent-700 dark:text-white">
                  <h4 className="font-secondary text-md leading-normal font-bold">
                    Stanio lainto
                  </h4>
                  <p className="text-sm leading-[1.6]">3 days ago</p>
                  <p className="text-body mt-1.5!">
                    ished fact that a reader will be distrol acted bioii
                    the.ished fact that a reader will be distrolra acted laoreet
                    Aliquam reader will be distrol acted ished fact that a
                    reader will be distrol dsff shem acted bioii the.ished fact
                    that a reader will .
                  </p>
                  <CustomLink
                    href="#"
                    className="text-primary mt-4 inline-block text-[1.25rem]"
                  >
                    <FaReply />
                  </CustomLink>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="h2 text-accent-700 dark:text-white">
                  Leave a comment
                </h3>
                <p className="mt-2">You must have to log in for comment</p>
                <form className="mt-30px gap-x-30px grid grid-cols-1 gap-y-5 lg:grid-cols-2">
                  <div>
                    <TextInput
                      placeholder="Your Email"
                      name="email"
                      className={inputBoxClasses}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <TextInput
                      placeholder="Your Phone"
                      name="phone"
                      className={inputBoxClasses}
                      autoComplete="off"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <TextInput
                      placeholder="Your Address"
                      name="address"
                      className={inputBoxClasses}
                      autoComplete="off"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <TextAreaInput
                      placeholder="Write Message..."
                      name="message"
                      autoComplete="off"
                      className={inputBoxClasses}
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <Button type="submit" className="w-full">
                      <span className="relative z-1">SEND NOW</span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="gap-30px grid self-baseline max-md:mx-auto max-md:max-w-[410px] lg:gap-10">
            <Author {...authorData} />
            <SearchBox />
            <CategoryList {...categoryListData} />
            <Tagswidget {...tagwidgetData} />
          </div>
        </div>
      </Container>
    </section>
  );
}
