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
