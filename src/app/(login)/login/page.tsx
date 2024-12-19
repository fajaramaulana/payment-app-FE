// src/app/login/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send login request to the server
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }
      // Handle successful login (e.g., store token, redirect, etc.)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div id="formLogin" className="bg-[#6ba5ff] rounded w-[400px] py-2 p-1 ">
        <p className="text-white text-md mb-2 px-2">Login SMILE System</p>
        <div className="items-center flex flex-col bg-white px-2 py-2">
          <div className="w-[95%]">
            <Image
              alt="logo"
              src="/images/smile-login.png"
              width={100000}
              height={1000000}
              className="w-[100%] h-auto"
            />
            <form onSubmit={handleSubmit} className="w-100">
              {error && <p className="text-red-500">{error}</p>}
              <div className="mb-4 grid grid-cols-12 gap-1">
                <label htmlFor="email" className="block text-sm mb-1 col-span-3 p-1 text-right text-[#0d0a0a]">
                  Username:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border col-span-9 p-1 text-[#0d0a0a] border-[#0d0a0a]"
                  required
                />
                <p className=""><i className="fa fa-icon-circle"></i></p>
              </div>
              <div className="mb-4 grid grid-cols-12 gap-1">
                <label htmlFor="password" className="block text-sm mb-1 col-span-3 p-1 text-right text-[#0d0a0a]">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border col-span-9 p-1 text-[#0d0a0a] border-[#0d0a0a]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
