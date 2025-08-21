"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function AccountSections() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (key, index) => {
    setOpenIndex(openIndex === `${key}-${index}` ? null : `${key}-${index}`);
  };

  const receivableDropdowns = [
    { title: "Automated Invoicing", content: "Sample content for Automated Invoicing." },
    { title: "Payment Tracking", content: "Sample content for Payment Tracking." },
    { title: "Receipts & Reconciliations", content: "Sample content for Receipts & Reconciliations." },
    { title: "Aging Analysis", content: "Sample content for Aging Analysis." },
  ];

  const payableDropdowns = [
    { title: "Smart Invoice Capture", content: "Sample content for Smart Invoice Capture." },
    { title: "Approval Routing", content: "Sample content for Approval Routing." },
    { title: "Automated Payments", content: "Sample content for Automated Payments." },
    { title: "Supplier Payments", content: "Sample content for Supplier Payments." },
    { title: "Payable Dashboard", content: "Sample content for Payable Dashboard." },
  ];

  const expenseDropdowns = [
    { title: "AI-Powered Capture", content: "Sample content for AI-Powered Capture." },
    { title: "Policy Enforcement", content: "Sample content for Policy Enforcement." },
    { title: "Approval Workflows", content: "Sample content for Approval Workflows." },
    { title: "Live Dashboards", content: "Sample content for Live Dashboards." },
    { title: "Mobile-Friendly", content: "Sample content for Mobile-Friendly." },
  ];

  const financialDropdowns = [
    { title: "Live Financials", content: "Sample content for Live Financials." },
    { title: "Regulatory Formats", content: "Sample content for Regulatory Formats." },
    { title: "Drill Down Detail", content: "Sample content for Drill Down Detail." },
    { title: "Division & Consolidation", content: "Sample content for Division & Consolidation." },
    { title: "Export & Share", content: "Sample content for Export & Share." },
  ];

  return (
    <div className="space-y-10 px-4 mb-10">
      {/* ================= Account Receivables ================= */}
      <section className="bg-[#E8F1FB] font-inter py-6 px-4 rounded-xl max-w-md mx-auto">
        <h2 className="text-[#1976D2] text-[24px] font-semibold">
          Account Receivables-
          <span className="tracking-tight block text-[#1976D2] font-normal">
            Accelerate your cash flow
          </span>
        </h2>
        <p className="mt-3 text-[14px]">
          Stay on top of collections and improve working capital - without chasing payments manually.
        </p>

        <div className="mt-4 space-y-4">
          {receivableDropdowns.map((item, index) => (
            <div key={index} className="max-w-[250px]">
              <div
                onClick={() => toggleDropdown("rec", index)}
                className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
              >
                <span className="font-normal text-[16px]">{item.title}</span>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === `rec-${index}` ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === `rec-${index}` && (
                <p className="text-[12px] mt-1">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <video className="rounded-lg w-full" autoPlay muted loop>
            <source src="videos/account-receivables.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ================= Account Payables ================= */}
      <section className="bg-[#E8F1FB] font-inter py-6 px-4 rounded-xl max-w-md mx-auto">
        <h2 className="text-[#1976D2] text-[24px] font-semibold">
          Accounts Payables -
          <span className="tracking-tight block text-[#1976D2] font-normal">
            Control of Vendor Spend
          </span>
        </h2>
        <p className="mt-3 text-[14px]">
          Eliminate late fees, maintain supplier trust, and get full visibility into every dirham out.
        </p>

        <div className="mt-4 space-y-4">
          {payableDropdowns.map((item, index) => (
            <div key={index} className="max-w-[250px]">
              <div
                onClick={() => toggleDropdown("pay", index)}
                className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
              >
                <span className="font-normal text-[16px]">{item.title}</span>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === `pay-${index}` ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === `pay-${index}` && (
                <p className="text-[12px] mt-1">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <video className=" w-full" autoPlay muted loop>
            <source src="videos/account-payables.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ================= Smart Expense Management ================= */}
      <section className="bg-[#E8F1FB] font-inter py-6 px-4 rounded-xl max-w-md mx-auto">
        <h2 className="text-[#1976D2] text-[24px] font-semibold">
          Smart <span className="font-normal">Expense Management</span>
        </h2>
        <p className="mt-3 text-[14px]">
          Control spending, eliminate manual errors, and boost accountability. Modernize every step of expense processing with automation, policy enforcement, and real-time tracking.
        </p>

        <div className="mt-4 space-y-4">
          {expenseDropdowns.map((item, index) => (
            <div key={index} className="max-w-[250px]">
              <div
                onClick={() => toggleDropdown("exp", index)}
                className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
              >
                <span className="font-normal text-[16px]">{item.title}</span>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === `exp-${index}` ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === `exp-${index}` && (
                <p className="text-[12px] mt-1">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <video className="rounded-lg w-full" autoPlay muted loop>
            <source src="videos/smart-expense.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ================= Financial Statements ================= */}
      <section className="bg-[#E8F1FB] font-inter py-6 px-4 rounded-xl max-w-md mx-auto">
        <h2 className="text-[#1976D2] text-[24px] font-semibold">
          Financial Statements -
          <span className="tracking-tight block text-[#1976D2] font-normal">
            Audit-Ready, Always-On
          </span>
        </h2>
        <p className="mt-3 text-[14px]">
          Move beyond monthly closings—generate real-time, regulation-ready financials anytime.
        </p>

        <div className="mt-4 space-y-4">
          {financialDropdowns.map((item, index) => (
            <div key={index} className="max-w-[250px]">
              <div
                onClick={() => toggleDropdown("fin", index)}
                className="flex justify-between items-center cursor-pointer border-b border-black pb-1"
              >
                <span className="font-normal text-[16px]">{item.title}</span>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === `fin-${index}` ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === `fin-${index}` && (
                <p className="text-[12px] mt-1">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <video className="rounded-lg w-full" autoPlay muted loop>
            <source src="videos/financial-statements.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
