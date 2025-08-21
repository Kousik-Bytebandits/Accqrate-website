"use client";

import Image from "next/image";

export default function Hero() {
  const topRow = [
    "/images/1.png","/images/2.png","/images/3.png","/images/4.png","/images/5.png","/images/6.png",
    "/images/7.png","/images/8.png","/images/9.png","/images/10.png","/images/11.png","/images/12.png","/images/13.png",
  ];
  const bottomRow = [
    "/images/14.png","/images/15.png","/images/16.png","/images/17.png","/images/18.png","/images/19.png",
    "/images/20.png","/images/21.png","/images/22.png","/images/23.png","/images/24.png","/images/25.png","/images/26.png",
  ];

  return (
    <section className="w-full font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4">
      {/* Headings */}
      <h1 className="text-fluid-h1 font-semibold">
        Accqrate <span className="text-[#1976D2]">Books</span>
      </h1>

      <h2 className="text-fluid-h2 mt-6 font-medium tracking-wide max-w-3xl">
        <span className="text-[#1976D2] font-semibold">ZATCA Approved</span>{" "}
        Accounting Software for Saudi Arabia
      </h2>

      <p className="text-fluid-body tracking-tight md:font-semibold md:leading-10 mt-6 max-w-[800px]">
        Run your entire business accounting—faster, smarter, always ZATCA Phase-2 ready.
      </p>

      {/* Supporting text (mobile vs desktop variation) */}
      <p className="text-[#000000B2] text-fluid-small mt-4 max-w-[700px] md:hidden">
        Launch your store in minutes, manage everything in one place—from sales to stock,
        from any device.
      </p>

      <p className="text-[#000000B2] hidden md:block text-fluid-body mt-4 max-w-[700px]">
        Manage accounts, automate ZATCA compliance, and unlock actionable insights
        from anywhere, on any device.
      </p>

      {/* Buttons */}
      <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-4 md:text-lg">
        <button className="bg-[#1976D2] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition">
          REQUEST A DEMO
        </button>
        <button className="border border-[#1976D2] text-[#1976D2] px-8 py-4 rounded-full font-semibold hover:bg-[#1976D2] hover:text-white transition">
          CONTACT SALES
        </button>
      </div>

      {/* Dashboard Video */}
      <div className="mt-12 w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/video-poster.jpg"
          className="w-full h-auto"
        >
          <source src="/videos/smart-expense.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Trusted Heading */}
      <div className="bg-[#E6F4FF] py-6 -mx-4 mt-16">
        <h3 className="text-fluid-small md:text-fluid-body font-bold text-center max-w-4xl mx-auto">
          Trusted by 5,000+ Saudi and GCC companies for ZATCA e-invoicing compliance
          and business accounting.
        </h3>
      </div>

      {/* Logo Marquee */}
      <div className="bg-[#E6F4FF] relative -mx-4 w-screen max-w-6xl overflow-hidden py-6">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#E6F4FF] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#E6F4FF] to-transparent" />

        <div className="flex flex-col gap-6">
          {/* Top Row */}
          <div className="flex animate-scrollLeft w-max flex-shrink-0">
            {[...topRow, ...topRow].map((src, i) => (
              <Image
                key={`top-${i}`}
                src={src}
                alt={`Company logo ${i + 1}`}
                width={120}
                height={48}
                className="h-12 md:h-16 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
              />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex animate-scrollRight w-max flex-shrink-0">
            {[...bottomRow, ...bottomRow].map((src, i) => (
              <Image
                key={`bottom-${i}`}
                src={src}
                alt={`Company logo ${i + 1}`}
                width={120}
                height={48}
                className="h-12 md:h-16 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
