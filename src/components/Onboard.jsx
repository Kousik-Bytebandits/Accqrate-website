"use client";

export default function FeatureSection() {
  return (
    <div className="px-4 py-8">
      {/* Heading */}
      <h2 className="text-[24px] font-inter font-medium text-center mb-6">
        Effortless <span className="text-[#1976D2]">Onboarding</span> & <br/>Flexible Deployment
      </h2>

      {/* Row: Left text + Right video */}
      <div className="flex items-center justify-between gap-4  mb-6">
        {/* Left text */}
        <div className="w-1/2 px-2">
          <p className="text-[#000000B2] text-[14px]">
            Accqrate Books is fully cloud-native - no complex installations, no specialized IT needed. 
            Set up your accounting in minutes, not weeks.
          </p>
        </div>

        {/* Right video box */}
        <div className="w-1/2 bg-white text-center rounded-xl shadow-md p-3 flex flex-col justify-center">
          <video
            controls
            className="rounded-lg w-full h-32 object-cover"
            autoPlay
            muted
            loop
          >
            <source src="videos/cloud-first.mp4" type="video/mp4" />
          </video>
          <h3 className="text-sm font-medium">Cloud-first or On-Prem</h3>
          <p className="text-xs text-gray-600 ">
           Choose cloud for instant launch, or on-premises for full data control.
          </p>
        </div>
      </div>

      {/* Two boxes below */}
      <div className="grid grid-cols-2 gap-4">
        {/* Box 1 */}
        <div className="bg-white rounded-xl shadow-md p-3 text-center">
          <video
            controls
            className="rounded-lg w-full h-28 object-cover mb-2"
            autoPlay
            muted
            loop  
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
            controls
            className="rounded-lg w-full h-28 object-cover mb-2"
            autoPlay
            muted
            loop
          >
            <source src="videos/no-special-hardware.mp4" type="video/mp4" />
          </video>
          <h3 className="text-sm font-medium">No special hardware</h3>
          <p className="text-xs text-gray-600">
            Access your books anywhere - your data is always secure.
          </p>
        </div>
      </div>
    </div>
  );
}
