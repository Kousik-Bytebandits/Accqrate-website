"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white hidden md:block border-t border-gray-300 mt-[2%]">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm  font-inter">
          
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-3 text-fluid-body">Accqrate-erp.com</h4>
            <ul className="space-y-6 text-[#525252] text-[16px]">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#">Success Stories</Link></li>
              <li><Link href="#">E-Invoicing solution</Link></li>
              <li><Link href="#">Business solution</Link></li>
              <li><Link href="#">ERP solution</Link></li>
              <li><Link href="#">Testimonials</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-3 text-fluid-body">About</h4>
            <ul className="space-y-6 text-[#525252] text-[16px]">
              <li><Link href="#">Company</Link></li>
              <li><Link href="#">Demo Videos</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Blogs</Link></li>
              <li><Link href="#">Announcements</Link></li>
              <li><Link href="#">Webinars</Link></li>
              <li><Link href="#">Partner with Us</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-3 text-fluid-body">Featured Modules</h4>
            <ul className="space-y-6 text-[#525252] text-[16px]">
              <li><Link href="#">E-Invoicing Software</Link></li>
              <li><Link href="#">E-Invoicing Middleware</Link></li>
              <li><Link href="#">Accounting Solutions</Link></li>
              <li><Link href="#">Sales Management</Link></li>
              <li><Link href="#">Purchase Management</Link></li>
              <li><Link href="#">Inventory Management</Link></li>
              <li><Link href="#">Fixed Asset Management</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-3 text-fluid-body">More Modules</h4>
            <ul className="space-y-6 text-[#525252] text-[16px]">
              <li><Link href="#">Production Management</Link></li>
              <li><Link href="#">Document Management</Link></li>
              <li><Link href="#">HR & Payroll</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">POS</Link></li>
              <li><Link href="#">CRM</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-semibold mb-3 text-fluid-body">Data & Safety Management</h4>
            <ul className="space-y-6 text-[#525252] text-[16px]">
              <li><Link href="#">Data Security</Link></li>
              <li><Link href="#">Disaster Recovery</Link></li>
              <li><Link href="#">Enhancements and Upgrades</Link></li>
              <li><Link href="#">Application Support and Maintenance</Link></li>
              <li><Link href="#">Terms and Conditions</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Contact Support</Link></li>
            </ul>
          </div>

          {/* Column 6 */}
          <div>
            <h4 className="font-semibold mb-3 text-fluid-body">Integrations</h4>
            <ul className="space-y-6 text-[#525252] text-[16px]">
              <li><Link href="#">SAP suits</Link></li>
              <li><Link href="#">Oracle suits</Link></li>
              <li><Link href="#">Microsoft suits</Link></li>
              <li><Link href="#">VAT Calculator</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-[16px] text-gray-600 max-w-5xl mx-auto">
          © Copyright 2021 - 2025{" "}
          <Link href="#" className="text-[#194BED] hover:underline">Accqrate</Link>, All rights reserved.
        </div>
      </div>
    </footer>
  );
}
