// TermsAndConditions.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | BridgeLink</title>
        <meta
          name="description"
          content="Terms and Conditions for BridgeLink services"
        />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="flex w-full items-center justify-center bg-primary py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="md:text-5xl text-center text-4xl font-bold">
              Terms and Conditions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center opacity-90">
              Please read these terms and conditions carefully before using
              BridgeLink services
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-md">
            <div className="p-8">
              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  1. Introduction
                </h2>
                <p className="mb-4 text-gray-700">
                  Welcome to BridgeLink ("Company", "we", "our", "us"). These
                  Terms and Conditions govern your use of our website and
                  services offered by BridgeLink, including social media
                  marketing, website design, website development, and SEO
                  services.
                </p>
                <p className="mb-4 text-gray-700">
                  By accessing our website and using our services, you agree to
                  be bound by these Terms and Conditions and our Privacy Policy.
                  If you disagree with any part of these terms, you may not
                  access our website or use our services.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  2. Services
                </h2>
                <p className="mb-4 text-gray-700">
                  BridgeLink provides various digital marketing services,
                  including but not limited to social media marketing, website
                  design, website development, and search engine optimization.
                </p>
                <p className="mb-4 text-gray-700">
                  We reserve the right to modify, suspend, or discontinue any
                  aspect of our services at any time, including the availability
                  of any feature, database, or content without notice or
                  liability.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  3. Client Obligations
                </h2>
                <p className="mb-4 text-gray-700">
                  Clients are responsible for providing accurate information,
                  necessary access, and timely feedback required for the
                  successful delivery of our services. Failure to provide
                  required information or materials may result in delays or
                  inability to complete the services.
                </p>
                <p className="mb-4 text-gray-700">
                  The client agrees to review and provide feedback on
                  deliverables within the timeframe specified in the service
                  agreement. Delayed feedback may impact project timelines.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  4. Intellectual Property
                </h2>
                <p className="mb-4 text-gray-700">
                  Upon full payment of all invoices, the client shall own all
                  rights to deliverables specifically created for the client,
                  except for any third-party materials, BridgeLink's proprietary
                  information, and any general skills, know-how, or expertise
                  retained by BridgeLink.
                </p>
                <p className="mb-4 text-gray-700">
                  BridgeLink reserves the right to display and link to completed
                  client projects as part of our portfolio and to describe our
                  work on the project for promotional purposes, unless
                  specifically prohibited in writing by the client.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  5. Payment Terms
                </h2>
                <p className="mb-4 text-gray-700">
                  Payment schedules and methods will be outlined in the service
                  agreement. Unless otherwise specified, invoices are due upon
                  receipt. Late payments may result in work suspension.
                </p>
                <p className="mb-4 text-gray-700">
                  For ongoing services, BridgeLink may require recurring payment
                  arrangements. Changes to service scope may result in
                  additional charges, which will be communicated to the client
                  beforehand.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  6. Limitation of Liability
                </h2>
                <p className="mb-4 text-gray-700">
                  BridgeLink shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages resulting from the
                  use or inability to use our services or for the cost of
                  procurement of substitute services.
                </p>
                <p className="mb-4 text-gray-700">
                  Our liability is limited to the amount paid by the client for
                  the specific service in question.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  7. Termination
                </h2>
                <p className="mb-4 text-gray-700">
                  Either party may terminate the service agreement with written
                  notice if the other party materially breaches the agreement
                  and fails to remedy the breach within 30 days of receiving
                  notice.
                </p>
                <p className="mb-4 text-gray-700">
                  Upon termination, the client shall pay for all services
                  rendered up to the termination date.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  8. Governing Law
                </h2>
                <p className="mb-4 text-gray-700">
                  These Terms and Conditions shall be governed by and construed
                  in accordance with the laws of [Your Jurisdiction], without
                  regard to its conflict of law principles.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  9. Changes to Terms
                </h2>
                <p className="mb-4 text-gray-700">
                  BridgeLink reserves the right to modify these Terms and
                  Conditions at any time. We will provide notice of significant
                  changes by updating the date at the top of this page.
                </p>
                <p className="mb-4 text-gray-700">
                  Your continued use of our services after changes are posted
                  constitutes your acceptance of the modified terms.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="mb-4 text-2xl font-semibold text-primary">
                  10. Contact Information
                </h2>
                <p className="mb-4 text-gray-700">
                  If you have any questions about these Terms and Conditions,
                  please contact us at:
                </p>
                <p className="font-medium text-gray-700">
                  Email: contact@bridgelink.com
                  <br />
                  Phone: [Your Phone Number]
                  <br />
                  Address: [Your Business Address]
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-500">
                  Last updated: May 20, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block rounded-md bg-primary px-6 py-3 text-white transition-colors duration-300 hover:bg-opacity-90"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-100 py-6">
          <div className="container mx-auto px-4 text-center text-sm text-gray-600">
            <p>
              © {new Date().getFullYear()} BridgeLink. All rights reserved.
            </p>
            <div className="mt-2">
              <Link href="/terms" className="mx-2 hover:text-gray-900">
                Terms
              </Link>
              <Link href="/privacy" className="mx-2 hover:text-gray-900">
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TermsAndConditions;
