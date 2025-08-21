"use client";

export default function FeatureSection() {
  return (
    <div className="px-4 py-8">
      {/* Heading */}
      <h2 className="text-[24px] font-inter font-medium text-center mb-6">
        Effortless <span className="text-[#1976D2]">Onboarding</span> & <br />
        Flexible Deployment
      </h2>

      {/* Row: Left text + Right video */}
      <div className="flex items-center justify-between gap-4 mb-6">
        {/* Left text */}
        <div className="w-1/2 px-2">
          <p className="text-[#000000B2] text-[14px]">
            Accqrate Books is fully cloud-native – no complex installations, no
            specialized IT needed. Set up your accounting in minutes, not weeks.
          </p>
        </div>

        {/* Right video box */}
        <div className="w-1/2 bg-white text-center rounded-xl shadow-md p-3 flex flex-col justify-center">
          <video
            className="rounded-lg w-full h-32 object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="videos/cloud-first.mp4" type="video/mp4" />
          </video>
          <h3 className="text-sm font-medium mt-2">Cloud-first or On-Prem</h3>
          <p className="text-xs text-gray-600">
            Choose cloud for instant launch, or on-premises for full data
            control.
          </p>
        </div>
      </div>

      {/* Two boxes below */}
      <div className="grid grid-cols-2 gap-4">
        {/* Box 1 */}
        <div className="bg-white rounded-xl shadow-md p-3 text-center">
          <video
            className="rounded-lg w-full h-28 object-cover mb-2"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="videos/all-devices.mp4" type="video/mp4" />
          </video>
          <h3 className="text-sm font-medium">Works on all devices</h3>
          <p className="text-xs text-gray-600">
            Manage accounts from desktop, laptop, tablet, or mobile.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-white rounded-xl shadow-md p-3 text-center">
          <video
            className="rounded-lg w-full h-28 object-cover mb-2"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="videos/no-special-hardware.mp4" type="video/mp4" />
          </video>
          <h3 className="text-sm font-medium">No special hardware</h3>
          <p className="text-xs text-gray-600">
            Access your books anywhere – your data is always secure.
          </p>
        </div>
      </div>

      {/* -------- New Section: Zero-Friction Setup -------- */}
      <div className="mt-12 bg-[#F2F2F2] font-inter -mx-4 w-screen px-6 py-10">
        {/* Heading */}
        <h2 className="text-[24px] md:text-[26px] font-semibold text-center mb-4">
          <span className="text-[#1976D2]">Zero-Friction</span> Setup
        </h2>
        <p className="text-center text-gray-700 text-[14px] max-w-xl mx-auto mb-8">
          As your business grows, Accqrate Retail grows with you. Flip the
          switch to add procurement, finance, HR and supply-chain modules—no
          data migration, no downtime.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <button className="bg-[#A7A7A7] text-white py-3 rounded-md">
            Instant Access
          </button>
          <button className="bg-[#A7A7A7] text-white py-3 rounded-md">
            Automated Data Migration
          </button>
          <button className="bg-[#A7A7A7] text-white py-3 rounded-md">
            Role-Based User Setup
          </button>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-6 bg-[#F2F2F2] p-6 -mx-4 w-screen text-left">
        <p className="text-[14px] mb-2">
          “We set up 5 new outlets in under an hour—no IT team needed.”
        </p>
        <p className="text-[12px] text-black-400 text-right">
          — Retail Owner, Jeddah
        </p>
      </div>

      {/* -------- New Section: ZATCA Compliance -------- */}
      <div className="mt-12 font-inter text-center px-4">
        {/* Heading */}
        <h2 className="text-[24px] md:text-[24px] font-semibold mb-2">
          100% <span className="text-[#1976D2]">ZATCA</span> Phase 2 <br />
          E-Invoicing Compliance
        </h2>

        {/* Top Row */}
        <div className="flex justify-center items-center gap-6 mb-8">
          {/* Left Text */}
          <p className="w-1/2 text-left text-[16px]  leading-relaxed">
            Compliance is non-negotiable. With Accqrate Books, you’re always
            audit-ready.
          </p>

          {/* Right Card with Video */}
          <div className="w-1/2 bg-white rounded-xl shadow-md p-6 text-center">
           <h3 className="text-[16px] font-bold text-[#1976D2]">
              Seamless Integration
            </h3>
            <img
              className="rounded-lg w-full h-28 object-cover mb-2"
              src="images/seamless.webp"
              alt="Seamless Integration"
            />
            
          </div>
        </div>

        {/* Bottom Grid with Videos */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Box 1 */}
          <div className="bg-white rounded-xl shadow-md py-4 text-center">
          <h3 className="text-[16px] font-bold text-[#1976D2]">
              Digital Archive
            </h3>
            <video
              className="rounded-lg w-full h-full py-4 px-2 object-cover mb-2"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="videos/digital-archive.mp4" type="video/mp4" />
            </video>
            
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-xl shadow-md py-4 text-center">
             <h3 className="text-[16px] tracking-tight font-bold text-[#1976D2]">
              Regulation-Ready
            </h3>
            <video
              className="rounded-lg w-full h-full py-4 px-2 object-cover mb-2"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="videos/regulation-ready.mp4" type="video/mp4" />
            </video>
           
          </div>
        </div>

        {/* Bottom Two Rows */}
        <div className="space-y-4">
          <div className="bg-[#F3F3F3] p-4 rounded-md text-left">
            <h4 className="text-[16px] font-semibold text-[#1976D2]">
              Custom Invoice Templates
            </h4>
            <p className="text-[12px] mt-2 text-[#808080]">
              Add your logo, adjust fields, and localize content—no developer
              needed.
            </p>
          </div>
          <div className="bg-[#F3F3F3] p-4 rounded-md text-left">
            <h4 className="text-[16px] font-semibold text-[#1976D2]">
              Comprehensive Audit Trails
            </h4>
            <p className="text-[12px] mt-2 text-[#808080]">
              Every transaction and e-invoice is tracked, always audit-ready for
              ZATCA and KSA requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
