"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const validPasscodes = new Set([
  "j87t", "f3q2", "r1k9", "d6b4", "x0z1",           // Set 1
  "l8m2", "h5w7", "n4c6", "q2v9", "t3y8",           // Set 2
  "w7p1", "k6d3", "a9f5", "u2z7", "m3e1",           // Set 3
  "z4r8", "b5x6", "v7l0", "s1q3", "g9h2",           // Set 4
  "p6w8", "e4j0", "c7m5", "y1n2", "l3f4"            // Set 5
]);

export default function AccessPage() {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = passcode.trim().toLowerCase();
    if (validPasscodes.has(trimmed)) {
      setError("");
      router.push("/overview");
    } else {
      setError("Invalid passcode. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <img
        src="/static/header-banner.png"
        alt="Header Banner"
        style={{ width: '100%', maxWidth: '850px', marginBottom: '2rem' }}
      />
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <label htmlFor="passcode" className="text-lg font-medium">
          Please enter passcode to proceed:
        </label>
        <input
          id="passcode"
          type="text"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-64 text-center"
        />
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded"
        >
          Submit
        </button>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </div>
  );
}
