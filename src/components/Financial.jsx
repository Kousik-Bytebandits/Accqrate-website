"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function AccountSections() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (key, index) => {
    setOpenIndex(openIndex === `${key}-${index}` ? null : `${key}-${index}`);
  };



  // Finance Operations
  const operationsDropdowns = [
    { title: "Live Financial Dashboards", content: "Sample content for Live Financial Dashboards." },
    { title: "Automated Bank Reconciliation", content: "Sample content for Automated Bank Reconciliation." },
    { title: "Advanced Reporting", content: "Sample content for Advanced Reporting." },
    { title: "Multi-Entity, Multi-Currency", content: "Sample content for Multi-Entity, Multi-Currency." },
    { title: "Customizable Chart of Accounts", content: "Sample content for Chart of Accounts." },
  ];

  // Seamless Integration
  const integrationDropdowns = [
    { title: "Instant ERP Integration", content: "Sample content for ERP Integration." },
    { title: "API & Marketplace", content: "Sample content for API & Marketplace." },
    { title: "No Vendor Lock-in", content: "Sample content for No Vendor Lock-in." },
  ];

  // Robust Control
  const controlDropdowns = [
    { title: "Role-Based Access", content: "Sample content for Role-Based Access." },
    { title: "Automated Audit Logs", content: "Sample content for Automated Audit Logs." },
    { title: "Disaster Recovery & Data Security", content: "Sample content for Disaster Recovery & Data Security." },
  ];

  return (
    <div className="space-y-10 px-4 mb-10">
     
      {/* ================= Finance Operations ================= */}
      <section className="bg-[#E8F1FB] font-inter py-6 px-4 rounded-xl max-w-md mx-auto">
        <h2 className="text-[#1976D2] text-[22px] font-semibold">
          Transform Your{" "}
          <span className="tracking-tight block text-[#1976D2] font-normal">
            Finance Operations
          </span>
        </h2>
        <p className="mt-3 text-[14px]">
          Modern accounting isn’t about debits and credits—it’s about business
          control, speed, and insight.
        </p>

        <div className="mt-4 space-y-4">
          {operationsDropdowns.map((item, index) => (
            <div key={index} className="max-w-[250px]">
              <div
                onClick={() => toggleDropdown("ops", index)}
                className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
              >
                <span className="font-normal text-[15px]">{item.title}</span>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === `ops-${index}` ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === `ops-${index}` && (
                <p className="text-[12px] mt-1">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <video className="rounded-lg w-full bg-gray-300" autoPlay muted loop>
            <source src="videos/transform-operations.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ================= Seamless Integration ================= */}
      <section className="bg-[#E8F1FB] font-inter py-6 px-4 rounded-xl max-w-md mx-auto">
        <h2 className="text-[#1976D2] text-[22px] font-semibold">
          Seamless Integration{" "}
          <span className="tracking-tight block text-[#1976D2] font-normal">
            Enterprise Scalability
          </span>
        </h2>
        <p className="mt-3 text-[14px]">
          Grow with confidence - Accqrate Books is built for business evolution, not just accounting.
        </p>

        <div className="mt-4 space-y-4">
          {integrationDropdowns.map((item, index) => (
            <div key={index} className="max-w-[250px]">
              <div
                onClick={() => toggleDropdown("int", index)}
                className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
              >
                <span className="font-normal text-[15px]">{item.title}</span>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === `int-${index}` ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === `int-${index}` && (
                <p className="text-[12px] mt-1">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <video className="rounded-lg w-full bg-gray-300" autoPlay muted loop>
            <source src="videos/seamless-integration.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ================= Robust Control ================= */}
      <section className="bg-[#E8F1FB] font-inter py-6 px-4 rounded-xl max-w-md mx-auto">
        <h2 className="text-[#1976D2] text-[22px] font-semibold">
          Robust Control,{" "}
          <span className="tracking-tight block text-[#1976D2] font-normal">
            Total Compliance
          </span>
        </h2>
        <p className="mt-3 text-[14px]">
          Mitigate risk, enforce policy, and maintain visibility.
        </p>

        <div className="mt-4 space-y-4">
          {controlDropdowns.map((item, index) => (
            <div key={index} className="max-w-[280px]">
              <div
                onClick={() => toggleDropdown("ctrl", index)}
                className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
              >
                <span className="font-normal text-[15px]">{item.title}</span>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === `ctrl-${index}` ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === `ctrl-${index}` && (
                <p className="text-[12px] mt-1">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <video className="rounded-lg w-full bg-gray-300" autoPlay muted loop>
            <source src="videos/robust-control.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
