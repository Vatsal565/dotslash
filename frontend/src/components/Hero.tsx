// components/Hero.tsx
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          How engineers build
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-8">
          An open-source platform to build, ship and monitor agentic systems.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            href="/build"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            BUILD YOUR AGENT
          </Link>
          <Link
            href="/demo"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            TRY DEMO
          </Link>
        </div>
      </div>
    </div>
  );
}