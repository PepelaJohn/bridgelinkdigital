import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-(60px+72px))] items-center overflow-hidden bg-white py-15">
      <Container>
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-2xl leading-[1.11] font-medium text-black lg:text-5xl">
            Oops! Page Not Found
          </h2>
          <p className="text-md mt-6 leading-[1.4] font-medium text-black/80 lg:text-xl">
            We&apos;re sorry, the page you requested could not be found
          </p>
          <div className="mt-8 lg:mt-10">
            <Button asChild>
              <CustomLink href="/">Home Page</CustomLink>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
