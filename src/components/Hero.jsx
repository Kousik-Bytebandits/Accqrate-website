
"use client";

export default function Hero() {
  return (
    <section className="w-full font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4">
      {/* Headings */}
      <h1 className="text-[40px] md:text-[64px] font-semibold">
        Accqrate <span className="text-[#1976D2]">Books</span>
      </h1>

      <h2 className="text-[24px] md:text-[28px] mt-5 md:mt-10 font-medium tracking-wide">
        <span className="text-[#1976D2]   md:text-[36px]  md:px-6">ZATCA Approved</span> Accounting Software for Saudi Arabia
      </h2>

      <p className="text-[17px] md:text-[32px] tracking-tight md:font-semibold md:leading-10 mt-6 max-w-[800px]">
        Run your entire business accounting—faster, smarter, 
        always ZATCA Phase-2 ready.
      </p>

       <p className="text-[#000000B2]  md:hidden text-[14px] md:text-[20px] mt-3 max-w-[700px]">
       Launch your store in minutes, manage everything in one place—from sales to stock, from any device.
      </p>

      <p className="text-[#000000B2] hidden md:block  md:text-[20px] mt-3 max-w-[700px]">
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

      {/* Partners Video */}
        <div className="mt-12 w-screen -mx-4 rounded-none overflow-hidden ">
        <video autoPlay loop muted playsInline className="w-full h-auto ">
          <source src="/videos/smart-expense.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
