import React from "react";
import { Link } from "react-router-dom";

const WhyConnect = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6">
          Why Do You Need to Connect With Us?
        </h2>
        <p className="text-md sm:text-lg text-black/70 mb-10 max-w-3xl mx-auto">
          We're not just building a network—we're shaping the future. At Campus
          Connect, we bridge the gap between students, industry leaders, and
          opportunities that make a real impact.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Real-World Projects",
              desc: "Work on live industry challenges and enhance your practical skills beyond classroom learning.",
              icon: "🖥️",
            },
            {
              title: "Mentorship Access",
              desc: "Connect with professionals and mentors who guide your growth and career path.",
              icon: "🧠",
            },
            {
              title: "Internships & Placements",
              desc: "Be the first to know about exclusive job and internship opportunities through our network.",
              icon: "💼",
            },
            {
              title: "Tech Events & Workshops",
              desc: "Participate in coding bootcamps, hackathons, and expert-led sessions to sharpen your edge.",
              icon: "📚",
            },
            {
              title: "Campus Ambassadors",
              desc: "Become a leader in your college and represent your peers while building your profile.",
              icon: "🎓",
            },
            {
              title: "Innovation Support",
              desc: "Got a startup idea? We’ll help you turn it into reality with guidance and resources.",
              icon: "💡",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/get-in-touch"
            className="bg-blue-600 text-white px-8 py-2 rounded-xl text-sm sm:text-lg font-medium hover:bg-blue-700 transition"
          >
            Let’s Build the Future Together
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyConnect;
