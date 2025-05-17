import React from "react";
import Link from "next/link";

export default function ReturnIntroPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <div className="flex justify-center">
        <img
          src="/static/header-banner.png"
          alt="FTT Loan Proposal Header"
          className="h-[108px] w-auto"
        />
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-center gap-2 py-4 mx-auto max-w-5xl flex-wrap">
        <Link href="/overview" className="border px-4 py-2 hover:bg-gray-100">Overview</Link>
        <Link href="/product" className="border px-4 py-2 hover:bg-gray-100">The Product</Link>
        <Link href="/video" className="border px-4 py-2 hover:bg-gray-100">G CAN Promo Video</Link>
        <Link href="/technology" className="border px-4 py-2 hover:bg-gray-100">The Technology</Link>
        <Link href="/market" className="border px-4 py-2 hover:bg-gray-100">Market</Link>
        <Link href="/return" className="border px-4 py-2 bg-gray-200 font-semibold">Return</Link>
        <Link href="/nextsteps" className="border px-4 py-2 hover:bg-gray-100">Next Steps</Link>
      </nav>

      {/* Content Section */}
      <section className="px-6 flex justify-center">
        <div className="max-w-3xl w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Projected ROI Overview</h2>
            <a
              href="/2025-05-02 FTT Loan Proposal.pdf"
              download
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Download PDF of FTT Loan Proposal
            </a>
          </div>

          <p className="mb-2 font-semibold">FTT seeking US$250,000 Loan</p>

          <p className="mb-2 font-semibold">Use of Funds:</p>
          <ul className="list-disc list-inside mb-4">
            <li>FTT to loan US$250,000 to APR</li>
            <li>APR to use the funds for the launch of the G CAN® in the U.S.</li>
          </ul>

          {/* Loan Benefits */}
          <div className="bg-blue-100 rounded-lg p-4 mb-6">
            <p className="mb-2 font-semibold">Loan Benefits:</p>
            <ul className="list-disc list-inside">
              <li>Interest: 15% per annum (to accrue)</li>
              <li>Consideration: Lender receives 2.5% of APR’s total economic value in equity via an Equity Participation Agreement from FTT</li>
              <li>Security: GSA from FTT on loan principal</li>
              <li>Loan repaid from:
                <ul className="list-disc list-inside ml-6">
                  <li>A percentage of G CAN® Licensing Fees FTT receives from APR</li>
                  <li>A percentage of monies FTT raises exceeding US$3M</li>
                  <li>Full repayment upon FTT excess cash flow exceeds US$5M</li>
                  <li>Full repayment upon FTT and/or APR being sold</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Projected Upswing */}
          <div className="bg-blue-100 rounded-lg p-4 mb-6">
            <p className="mb-2 font-semibold">Projected Upswing: US$2.9M (11.62X loan)</p>
            <p>
              Based on:<br />
              APR reaching annual G CAN® unit sales of 100,000 G CAN® by Year 5<br />
              APR exiting in Year 5 for ~US$98.7M (3X sales)
            </p>
          </div>

          {/* ROI Calculator */}
          <div className="bg-green-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">ROI Calculator</h3>
            <p className="mb-4">
              This ROI calculator helps estimate your potential return from FTT based on different variable inputs such as:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Your loan amount</li>
              <li>APR’s projected G CAN unit sales</li>
              <li>The anticipated year of APR exit</li>
            </ul>
            <p className="mb-4">
              For Example:<br />
              Loan Amount: US$250,000<br />
              APR achieves 30,000 G CAN unit sales by Year 3<br />
              APR exit in Year 3 → Estimated ROI multiple: 4.41
            </p>
            <div className="text-center">
              <Link href="/calculator">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
                  ROI Calculator
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}