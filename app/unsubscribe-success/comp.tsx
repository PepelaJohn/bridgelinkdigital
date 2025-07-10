import React from 'react';
import Link from 'next/link';

export default function UnsubscribeSuccess() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 pt-[100px] dark:bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md dark:bg-gray-800">
        <div className="mb-6">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-50">
            Successfully Unsubscribed
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            You have been successfully unsubscribed from the BridgeLink
            Newsletter.
          </p>
        </div>

        <div className="space-y-4">
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white transition-colors  focus:outline-none "
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
