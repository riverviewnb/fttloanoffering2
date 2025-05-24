'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const validPasswords = [
    // Original numeric passwords
    '83517', '10492', '67283', '29815', '93047',
    '41602', '38194', '75028', '62901', '51037',
    '20813', '97640', '34729', '59302', '80467',
    '14496', '90238', '33874', '26091', '79105',
    '62539', '43718', '84096', '71520', '31084',

    // mike###
    'mike475', 'mike823', 'mike129', 'mike638', 'mike204',
    'mike350', 'mike777', 'mike991', 'mike442', 'mike615',

    // will###
    'will899', 'will523', 'will741', 'will368', 'will157',
    'will290', 'will884', 'will119', 'will630', 'will774',

    // anthony###
    'anthony434', 'anthony287', 'anthony901', 'anthony612', 'anthony378',
    'anthony865', 'anthony199', 'anthony743', 'anthony058', 'anthony320',

    // james###
    'james143', 'james589', 'james420', 'james731', 'james204',
    'james356', 'james002', 'james648', 'james771', 'james908',

    // rick###
    'rick333', 'rick781', 'rick090', 'rick244', 'rick501',
    'rick607', 'rick899', 'rick123', 'rick415', 'rick662',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔔 Send silent notification
    fetch('/api/notify-password', {
      method: 'POST',
      body: JSON.stringify({ password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (validPasswords.includes(password)) {
      document.cookie = "authorized=true; path=/";
      router.push('/');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Enter Password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-sm">
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
