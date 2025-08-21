"use client";

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
      <h1 className="text-[40px] md:text-[64px] font-semibold">
        Accqrate <span className="text-[#1976D2]">Books</span>
      </h1>

      <h2 className="text-[24px] md:text-[28px] mt-5 md:mt-10 font-medium tracking-wide">
        <span className="text-[#1976D2] md:text-[36px] md:px-6">ZATCA Approved</span>{" "}
        Accounting Software for Saudi Arabia
      </h2>

      <p className="text-[17px] md:text-[32px] tracking-tight md:font-semibold md:leading-10 mt-6 max-w-[800px]">
        Run your entire business accounting—faster, smarter, always ZATCA Phase-2 ready.
      </p>

      <p className="text-[#000000B2] md:hidden text-[14px] md:text-[20px] mt-3 max-w-[700px]">
        Launch your store in minutes, manage everything in one place—from sales to stock,
        from any device.
      </p>

      <p className="text-[#000000B2] hidden md:block md:text-[20px] mt-3 max-w-[700px]">
        Manage accounts, automate ZATCA compliance, and unlock actionable insights
        from anywhere, on any device.
      </p>

      {/* Buttons */}
      <div className="md:mt-12 mt-8 flex flex-col text-[16px] font-medium md:flex-row gap-4 md:text-[24px]">
        <button className="bg-[#1976D2] text-white px-12 md:px-6 py-4 rounded-full md:font-semibold hover:bg-blue-700">
          REQUEST A DEMO
        </button>
        <button className="bg-[#1976D2] text-white px-12 md:px-6 py-4 rounded-full md:font-semibold hover:bg-blue-700">
          CONTACT SALES
        </button>
      </div>

      {/* Dashboard Video */}
      <div className="mt-12 w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
        <video autoPlay loop muted playsInline className="w-full h-auto">
          <source src="/videos/smart-expense.mp4" type="video/mp4" />
        </video>
      </div>

      {/* New Heading Above Logos */}
      
    <div className="bg-[#E6F4FF] py-4 -mx-4 mt-16"> 
  {/* Heading */}
  <h3 className="text-[12px]  md:text-[24px] font-bold text-center mb-8  max-w-4xl">
    Trusted by 5,000+ Saudi and GCC companies for ZATCA  e-invoicing compliance
    and business accounting.
  </h3>
</div>
  {/* Logo Marquee */}
  <div className="bg-[#E6F4FF] relative -mx-4 w-screen max-w-6xl overflow-hidden py-4">
    {/* Fade edges */}
    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#E6F4FF] to-transparent" />
    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#E6F4FF] to-transparent" />

    <div className="flex flex-col gap-6">
      {/* Top Row */}
      <div className="flex animate-scrollLeft  w-max flex-shrink-0">
        {[...topRow, ...topRow].map((src, i) => (
          <img
            key={`top-${i}`}
            src={src}
            alt={`logo-${i}`}
            className="h-12 md:h-16 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
          />
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex animate-scrollRight  w-max flex-shrink-0">
        {[...bottomRow, ...bottomRow].map((src, i) => (
          <img
            key={`bottom-${i}`}
            src={src}
            alt={`logo-${i}`}
            className="h-12 md:h-16 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
          />
        ))}
      </div>
    </div>
  </div>


    </section>
  );
}
