import React from "react";
import Link from "next/link";

export default function CalculatorPage() {
  return (
    <div className="flex flex-col items-center p-6">
      <img
        src="/static/header-banner.png"
        alt="Header Banner"
        style={{ width: '100%', maxWidth: '850px', marginBottom: '2rem' }}
      />

      <nav className="flex justify-center my-4">
        <Link href="/overview" className="border px-4 py-2 mx-1">Overview</Link>
        <Link href="/product" className="border px-4 py-2 mx-1">The Product</Link>
        <Link href="/video" className="border px-4 py-2 mx-1">G CAN Promo Video</Link>
        <Link href="/technology" className="border px-4 py-2 mx-1">The Technology</Link>
        <Link href="/market" className="border px-4 py-2 mx-1">Market</Link>
        <Link href="/return" className="border px-4 py-2 mx-1">Return</Link>
        <Link href="/nextsteps" className="border px-4 py-2 mx-1">Next Steps</Link>
      </nav>

      <div className="mb-6 text-center">
        <p className="text-lg font-semibold mb-2">Watch: How to Use This Calculator (20 sec)</p>
        <video width="640" height="360" controls>
  <source src="/videos/instruction-fixed.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>

      <iframe
        src="/roi-calculator.html"
        width="850"
        height="1700"
        style={{ border: '1px solid #ccc', borderRadius: '12px' }}
        title="Projected ROI Calculator"
      ></iframe>
    </div>
  );
}
