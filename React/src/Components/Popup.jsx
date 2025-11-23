import { useState, useEffect } from "react";
import Ideathon from "../../public/homeImgs/ideathon.png";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // 👉 Hide popup if not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-11/12 p-6 relative">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-600 mb-3 text-center">
          ACE AI Ideathon 2025
        </h2>
        <p className="text-gray-700 mb-5 text-center">
          Join our upcoming <strong>Ideathon</strong> and be part of the next
          wave of AI innovation. <br />
          Download the <strong>Brochure</strong> and Register now!
        </p>

        {/* Image Section */}
        <img
          src={Ideathon}
          alt="ACE AI Ideathon"
          className="w-full h-fit object-cover rounded-lg mb-4"
        />

        {/* ✅ Register Button */}
        <a
          href="https://forms.gle/qWZeFYEZ2FkBmm8D6"
          className="block text-center bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default Popup;
