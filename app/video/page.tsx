import React from "react";
import Link from "next/link";

export default function VideoPage() {
  return (
    <div>
      <img
        src="/static/header-banner.png"
        alt="Header Banner"
        style={{ width: '100%', maxWidth: '850px', display: 'block', margin: '0 auto' }}
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
          width="850"
          height="auto"
          controls
          style={{ border: '1px solid #ccc', borderRadius: '12px' }}
        >
          <source src="/product-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
