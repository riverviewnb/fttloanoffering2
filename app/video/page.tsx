import React from "react";
import Link from "next/link";

export default function VideoPage() {
  return (
    <div>
      <img
        src="/static/header-banner.png"
        alt="Header Banner"
        style={{
          width: '100%',
          maxWidth: '850px',
          border: '2px solid #ccc',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          margin: '0 auto',
          display: 'block'
        }}
      />

      <nav className="flex justify-center my-4">
        <Link href="/overview" className="border px-4 py-2 mx-1">Overview</Link>
        <Link href="/product" className="border px-4 py-2 mx-1">The Product</Link>
        <Link href="/video" className="border px-4 py-2 mx-1 bg-gray-200">G CAN Promo Video</Link>
        <Link href="/technology" className="border px-4 py-2 mx-1">The Technology</Link>
        <Link href="/market" className="border px-4 py-2 mx-1">Market</Link>
        <Link href="/return" className="border px-4 py-2 mx-1">Return</Link>
        <Link href="/nextsteps" className="border px-4 py-2 mx-1">Next Steps</Link>
      </nav>

      <div className="flex justify-center">
        <video
          controls
          preload="auto"
          width="100%"
          style={{
            maxWidth: '850px',
            border: '2px solid #ccc',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            margin: '0 auto',
            display: 'block'
          }}
        >
          <source src="/videos/product-video.mp4" type="video/mp4" />
          Sorry, your browser doesn’t support embedded videos.
        </video>
      </div>

      {/* 🔴 Oval Red Download Button */}
<div className="flex justify-center mt-8">
  <a
    href="/APR-Overview.pdf"
    download
    className="px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-full shadow hover:bg-red-700 transition text-center text-wrap max-w-[800px]"
  >
    Click Here to Download APR Industries Inc. Overview – Manufacturer of the G CAN®
  </a>
</div>

{/* 📷 New Image Below Download Button */}
<div className="flex justify-center mt-6">
  <img
    src="/seadoo.png"
    alt="Sea-Doo G CAN Usage"
    style={{
      maxWidth: '850px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    }}
  />
</div>
