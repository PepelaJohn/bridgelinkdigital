import './globals.css';
import { Metadata } from 'next';
import { primary, secondary } from '@/fonts';
import { AOSInit } from '@/src/utils/aos';
import { ScrollToTopButton } from '@/src/components/scroll-to-top';
import { cn } from '@/src/utils/shadcn';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/src/components/theme-provider';
import { ModeToggle } from '@/src/components/mode-toggle';

interface Props {
  children: React.ReactNode;
}



export const metadata: Metadata = {
  title: 'BridgeLink',
  description: 'BridgeLink - Digital Solutions for a Smarter Future',
  keywords:
    'tech, IT, web development, SEO, digital marketing, social media, UI/UX design',
  openGraph: {
    title: 'BridgeLink | Empowering Businesses with Smart Digital Solutions',
    description:
      'BridgeLink delivers expert web development, SEO, UI/UX design, and digital marketing services. We empower your business to thrive in the digital age.',
    url: 'https://musimeter.site/', // Update to your actual domain
    siteName: 'BridgeLink',
    images: [
      {
        url: 'https://musimeter.site/preview.jpeg', // Replace with your actual preview image URL
        width: 1200,
        height: 630,
        alt: 'BridgeLink team crafting digital solutions for modern businesses.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bridgelink_ke', // Replace with your actual Twitter/X handle
    creator: '@bridgelink_ke',
    title: 'BridgeLink | Empowering Businesses with Smart Digital Solutions',
    description:
      'BridgeLink delivers expert web development, SEO, UI/UX design, and digital marketing services. We empower your business to thrive in the digital age.',
    images: ['https://musimeter.site/preview.jpeg'], // Same as Open Graph image
  },
};


export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'light',
        primary.variable,
        secondary.variable,
        'text-base leading-[1.875] text-accent-800 [&.dark]:text-body'
      )}
    >
      <AOSInit />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={cn(
              'bg-white text-accent-800 dark:bg-accent-900 dark:text-body'
            )}
          >
            <main>{children}</main>
            <ModeToggle />
          </div>
        </ThemeProvider>
        <Toaster
          richColors
          position="top-right"
          closeButton
          visibleToasts={9}
        />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
