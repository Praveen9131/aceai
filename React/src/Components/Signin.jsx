import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin({ onClose, onSwitchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    try {
      const response = await fetch("https://api.aceai.in/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login success:", data);

        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        alert("Login successful!");
        navigate("/dashboard");
      } else {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        alert("Login failed. Check credentials or try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An unexpected error occurred.");
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Welcome Back</h2>
          <p className="text-sm text-white/50">Sign in to your account</p>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/20 text-sm py-2 rounded-lg hover:bg-white hover:text-black transition">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
          Sign in with Google
        </button>

        <div className="my-4 text-center text-xs text-white/50">OR</div>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md bg-[#212630] border border-white/10 text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="you@example.com"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md bg-[#212630] border border-white/10 text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#0D1220] py-2 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Continue
          </button>
        </form>

        <div className="text-center mt-4">
          <button className="text-sm text-white/50 hover:underline">
            Forgot password?
          </button>
          <div className="mt-2 text-sm">
            Don’t have an account?{" "}
            <span
              className="text-blue-400 hover:underline cursor-pointer"
              onClick={onSwitchToSignup}
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
