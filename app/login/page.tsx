'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const validPasswords = [
    '83517', '10492', '67283', '29815', '93047',
    '41602', '38194', '75028', '62901', '51037',
    '20813', '97640', '34729', '59302', '80467',
    '14496', '90238', '33874', '26091', '79105',
    '62539', '43718', '84096', '71520', '31084',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validPasswords.includes(password)) {
      // 🔔 Send silent background notification
      fetch('/api/notify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      }).catch((err) => {
        console.error('Notification failed', err);
      });

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
          placeholder="Enter 5-digit password"
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
