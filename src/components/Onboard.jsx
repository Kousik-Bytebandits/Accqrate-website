"use client";

export default function FeatureSection() {
  return (
    <div className="px-4 py-8">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center mb-6">
        Effortless <span className="text-blue-500">Onboarding</span> & Flexible Deployment
      </h2>

      {/* Row: Left text + Right video */}
      <div className="flex items-start justify-between gap-4 mb-6">
        {/* Left text */}
        <div className="w-1/2">
          <p className="text-gray-600 text-sm">
            Accqrate Books is fully cloud-native - no complex installations, no specialized IT needed. 
            Set up your accounting in minutes, not weeks.
          </p>
        </div>

        {/* Right video box */}
        <div className="w-1/2 bg-white rounded-xl shadow-md p-3 flex flex-col justify-center">
          <video
            controls
            className="rounded-lg w-full h-32 object-cover"
            autoPlay
            muted
            loop
          >
            <source src="videos/cloud-first.mp4" type="video/mp4" />
          </video>
          <h3 className="text-sm font-medium">No special hardware</h3>
          <p className="text-xs text-gray-600">
            Access your books anywhere - your data is always secure.
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
