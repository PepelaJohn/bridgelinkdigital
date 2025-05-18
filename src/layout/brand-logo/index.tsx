import { CustomLink } from '@/src/components/custom-link';
// import Image from 'next/image';

// import logoLight from 'public/assets/images/brand/logo-light.png';
// import logoDark from 'public/assets/images/brand/logo-dark.png';

export function BrandLogo() {
  return (
    <CustomLink href="/">
      <span className="text-xl font-bold">
        Bridge<span className="!text-primary ">Link</span>
      </span>
      {/* <Image
        className="logo-light dark:hidden"
        src={logoLight.src}
        width={logoLight.width}
        height={logoLight.height}
        placeholder="blur"
        blurDataURL={logoLight.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="100vw"
        priority
      />
      <Image
        className="logo-dark hidden dark:block"
        src={logoDark.src}
        width={logoDark.width}
        height={logoDark.height}
        placeholder="blur"
        blurDataURL={logoDark.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="100vw"
        priority
      /> */}
    </CustomLink>
  );
}
