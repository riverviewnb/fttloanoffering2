export const metadata = {
    title: 'Next Steps – FTT Loan Offering',
    description: 'Follow-up and contact details for the FTT Loan Offering.',
  };
  
  export default function Page() {
    return (
      <main className="min-h-screen bg-white text-gray-800">
        {/* Header Banner */}
        <div className="flex justify-center">
          <img
            src="/static/header-banner.png"
            alt="FTT Loan Proposal Header"
            className="h-[108px] w-auto"
          />
        </div>
  
        {/* Navigation Bar */}
        <nav className="flex justify-center flex-wrap gap-2 py-4">
          <a href="/overview" className="border px-4 py-2 mx-1 hover:bg-gray-100">Overview</a>
          <a href="/product" className="border px-4 py-2 mx-1 hover:bg-gray-100">The Product</a>
          <a href="/video" className="border px-4 py-2 mx-1 hover:bg-gray-100">G CAN Promo Video</a>
          <a href="/technology" className="border px-4 py-2 mx-1 hover:bg-gray-100">The Technology</a>
          <a href="/market" className="border px-4 py-2 mx-1 hover:bg-gray-100">Market</a>
          <a href="/return" className="border px-4 py-2 mx-1 hover:bg-gray-100">Return</a>
          <a href="/next-steps" className="border px-4 py-2 mx-1 bg-gray-300 font-semibold">Next Steps</a>
        </nav>
  
        {/* Page Content */}
        <section className="p-6 flex items-center justify-center">
          <div className="bg-gray-50 shadow-xl p-10 max-w-2xl w-full">
            <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
  
            <p className="mb-4 text-lg">
              Thank you for reviewing the FTT Loan Offering with Performance-Based Return Opportunity.
            </p>
  
            <p className="mb-6 text-lg">
              If you have any questions or would like to learn more, please email me at{' '}
              <a href="mailto:jamesw@fttproducts.com" className="text-blue-600 underline">
                jamesw@fttproducts.com
              </a>
            </p>
  
            <div className="mb-6">
              <a
                href="/2025-05-02 FTT Loan Proposal.pdf"
                download
                className="inline-block px-6 py-3 bg-green-600 text-white shadow hover:bg-green-700 transition"
              >
                Download FTT Loan Proposal
              </a>
            </div>
  
            <p className="mb-6 text-lg">
              We appreciate your interest and look forward to speaking with you soon.
            </p>
  
            <div className="text-sm text-gray-700 mt-8 border-t pt-4">
              <p><strong>Best regards,</strong></p>
              <p className="mt-2">James W. Wedderburn</p>
              <p>President & CEO</p>
              <p>Fuel Transfer Technologies Inc.</p>
              <p>Cell: 506-961-0000</p>
            </div>
          </div>
        </section>
      </main>
    );
  }