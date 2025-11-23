import React from "react";
import { useState } from "react";

function SignupModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
      name,
      login_type_id: 0,
    };

    try {
      const response = await fetch("https://api.aceai.in/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data);

      if (response.status === 201) {
        alert("Account created successfully!");
        // You may close the signup modal or redirect to login
        console.log(data);
      } else {
        alert("Signup failed: " + (data?.detail || "Unknown error"));
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-[#0D1220] text-white w-full max-w-md rounded-2xl p-10 shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Create Account</h2>
          <p className="text-sm text-white/50">Sign up to get started</p>
        </div>

        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              className="w-full rounded-md bg-[#212630] border border-white/10 text-sm px-4 py-2 focus:outline-none"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-md bg-[#212630] border border-white/10 text-sm px-4 py-2 focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full rounded-md bg-[#212630] border border-white/10 text-sm px-4 py-2 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#0D1220] py-2 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-400 hover:underline cursor-pointer"
            onClick={onClose}
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
