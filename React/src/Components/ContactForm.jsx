// src/Components/ContactUs.jsx
import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f8f9ff] px-4 py-12">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Email, call, or complete the form to learn how Ace AI can solve your
            AI needs.
          </p>

          <p className="text-gray-800 mb-2">support@aceai.in</p>
          <p className="text-gray-800 font-semibold mb-6">9962264760</p>

          <div className="grid sm:grid-cols-1 gap-8 text-sm text-gray-700 mt-10">
            <div>
              <h4 className="font-semibold mb-1">Customer Support</h4>
              <p>Available 24/7 to assist with your queries or issues.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Feedback & Suggestions</h4>
              <p>Your feedback helps us shape the future of Ace AI.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Media Inquiries</h4>
              <p>
                For media-related questions, contact us at{" "}
                <a
                  href="mailto:media@aceai.in"
                  className="underline text-blue-600"
                >
                  director@aceai.in{" "}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
          <p className="text-gray-600 mb-6">You can reach us anytime</p>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-3 border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-3 border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex gap-2">
              <select className="border px-3 py-3 rounded-lg border-gray-200 bg-gray-50 focus:outline-none">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              rows="4"
              maxLength="120"
              placeholder="How can we help?"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By contacting us, you agree to our{" "}
              <Link to="/terms" className="font-semibold text-blue-600">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="font-semibold text-blue-600">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
