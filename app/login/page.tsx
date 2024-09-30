"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      console.log('Logged in');
      const expires = new Date(Date.now() + 2000).toUTCString();
      document.cookie = `isLoggedIn=true; path=/; expires=${expires}`;
      router.push('/');
    }
  };

  return (
    <div className="flex justify-center items-center h-[75vh] w-[30vw] mx-auto bg-gray-300 rounded-md shadow-xl">
      <div className="bg-white p-8 shadow-md text-gray-700 rounded-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
