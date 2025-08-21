"use client";

import { useState } from "react";
import { FaChevronDown , FaChevronUp} from "react-icons/fa";

export default function AutomationSection() {
  // Dropdown items with label + content
  const dropdowns = [
    {
      label: "AI Bank Reconciliation",
      content:
        "Automates the reconciliation of bank statements with transactions, saving hours of manual work.",
    },
    {
      label: "Auto-Invoice Conversion",
      content:
        "Automatically converts invoices into structured formats ready for compliance and accounting.",
    },
    {
      label: "Expense Classification",
      content:
        "Uses AI to classify and categorize expenses, ensuring accurate reporting and compliance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Section */}
      <div className="bg-[#D9D9D9] -mx-4 p-4 rounded-2xl">
        <div className=" bg-white max-w-3xl mx-auto text-left border border-gray-200 rounded-2xl shadow-md p-6">
          <h2 className="text-[24px] font-semibold text-[#1976D2] mb-4">
            AI-Driven Automation
          </h2>
          <p className=" mb-6 text-[14px]">
            Let AI handle the repetitive—free your team for what matters.
          </p>

          {/* Collapsible Dropdowns */}
          <div className="space-y-4 w-[280px] text-[14px]">
            {dropdowns.map((dropdown, idx) => (
              <div key={idx} className="border-b border-black">
                <button
                  onClick={() => toggleDropdown(idx)}
                  className="w-full flex justify-between items-center py-2 text-left focus:outline-none"
                >
                  <span>{dropdown.label}</span>
                  <span className="">
                    {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {openIndex === idx && (
                  <p className="mt-2 text-[14px]">{dropdown.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-2">Support, Training, &</h2>
        <h2 className="text-2xl font-bold text-blue-600 mb-8">Onboarding</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Box 1 */}
          <div className="relative border border-gray-200 rounded-2xl shadow-md overflow-hidden bg-white flex flex-col">
            <video autoPlay loop muted playsInline className="w-full h-40 object-cover">
              <source src="/videos/training.mp4" type="video/mp4" />
            </video>
            <div className="p-4 flex-1">
              <h3 className="font-semibold">On Demand Training</h3>
              <p className="text-gray-600 text-sm mt-2">
                Learn Accqrate Books in under 60 minutes; video modules for every type.
              </p>
              <a href="#" className="text-blue-600 font-medium text-sm mt-3 inline-block">
                Book An Appointment →
              </a>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative border border-gray-200 rounded-2xl shadow-md overflow-hidden bg-white flex flex-col">
            <video autoPlay loop muted playsInline className="w-full h-40 object-cover">
              <source src="/videos/support.mp4" type="video/mp4" />
            </video>
            <div className="p-4 flex-1">
              <h3 className="font-semibold">24/7 Local Support</h3>
              <p className="text-gray-600 text-sm mt-2">
                In English & Arabic—phone, WhatsApp, email, or chat.
              </p>
              <a href="tel:+971505515388" className="text-blue-600 font-medium text-sm mt-3 inline-block">
                +971505515388 →
              </a>
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative border border-gray-200 rounded-2xl shadow-md overflow-hidden bg-white flex flex-col">
            <video autoPlay loop muted playsInline className="w-full h-40 object-cover">
              <source src="/videos/knowledge.mp4" type="video/mp4" />
            </video>
            <div className="p-4 flex-1">
              <h3 className="font-semibold">Knowledge Center</h3>
              <p className="text-gray-600 text-sm mt-2">
                Step-by-step Guides for every process.
              </p>
              <a href="#" className="text-blue-600 font-medium text-sm mt-3 inline-block">
                Knowledge Center →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="mt-20 bg-[#F2F2F2] p-6  -mx-4 font-inter  text-center">
        <h2 className="text-[24px]  font-bold mb-4">
          Why Choose Accqrate <span className="text-[#1976D2]"><br/>Books</span>?
        </h2>

        <img
          src="/images/why-choose.svg"
          alt="Why Choose Accqrate Books"
          className="mx-auto mb-6 w-[300px] h-auto"
        />

        <ul className="text-left space-y-4 px-4 text-[14px] list-disc list-inside">
          <li>Stay Ahead of ZATCA Compliance by Design: Never worry about last-minute regulations or audits.</li>
          <li>Modern Cloud Accounting: Access your accounting software anywhere. Simplify financial management for every team member.</li>
          <li>Device and Vendor Freedom: Use any device, integrate any bank, no hardware lock-in.</li>
          <li>Future-Proof Scaling: Move from startup to multi-entity enterprise—no reimplementation, no data loss.</li>
          <li>Total Business Control: Real-time insights, automation, and bulletproof security.</li>
          <li>Flexible price: Flexible plans for every business, from startups to enterprises. Your data stays secure on our Saudi e-invoicing platform with cloud accounting software benefits.</li>
        </ul>
      </div>
    </div>
  );
}
