import { CustomLink } from '@/src/components/custom-link';
// import Image from 'next/image';

// import logoLight from 'public/assets/images/brand/logo-light.png';
// import logoDark from 'public/assets/images/brand/logo-dark.png';

export function BrandLogo() {
  return (
    <CustomLink href="/">
      <span className="text-base font-bold sm:text-lg md:text-xl lg:text-2xl ">
        Bridge<span className="!text-primary ">Link</span>
      </span>
      {/* <Image
        className="logo-light dark:hidden h-auto w-auto max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-14 xl:max-h-16"
        src={logoLight.src}
        width={logoLight.width}
        height={logoLight.height}
        placeholder="blur"
        blurDataURL={logoLight.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 160px, (max-width: 1280px) 180px, 200px"
        priority
      />
      <Image
        className="logo-dark hidden dark:block h-auto w-auto max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-14 xl:max-h-16"
        src={logoDark.src}
        width={logoDark.width}
        height={logoDark.height}
        placeholder="blur"
        blurDataURL={logoDark.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, (max-width: 1024px) 160px, (max-width: 1280px) 180px, 200px"
        priority
      /> */}
    </CustomLink>
  );
}
