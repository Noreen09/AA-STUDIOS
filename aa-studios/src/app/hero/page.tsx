'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path/to/subtle-texture.svg')] opacity-10 pointer-events-none"></div> {/* Subtle texture */}
      <div className="container mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Section: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left py-12 lg:py-0">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 tracking-tight leading-tight mb-4 animate-fade-in-down">
            AA STUDIOS
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 animate-fade-in">
            Crafting compelling visual stories through the art of animation. We
            create engaging experiences that resonate with audiences worldwide.
          </p>
          <Link href="/services" className="inline-block"> {/* Use Link as inline-block */}
            <button className="bg-[#2C6259] hover:[#2C6259]  text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 animate-pulse">
              Explore Our Services
            </button>
          </Link>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 animate-fade-in-up">
          <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]"> {/* Added container for aspect ratio */}
            <Image
              src="/your-image-path.jpg"
              alt="Portfolio Image"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl shadow-lg transition duration-300 ease-in-out hover:scale-105"
              priority // Important for LCP
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;