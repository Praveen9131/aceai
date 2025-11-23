import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAward,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const growthItems = [
  {
    icon: <FaChartLine className="text-5xl text-indigo-500" />,
    title: "Career Paths",
    description:
      "Explore multiple career tracks tailored to your skills and interests.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: <FaChalkboardTeacher className="text-5xl text-green-500" />,
    title: "Training Programs",
    description:
      "Get access to hands-on training and Real World industry workshops.",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: <FaAward className="text-5xl text-yellow-500" />,
    title: "Certifications",
    description:
      "Earn globally recognized certifications to boost your career.",
    color: "from-yellow-500 to-amber-600",
  },
  {
    icon: <FaUserGraduate className="text-5xl text-pink-500" />,
    title: "Mentorship",
    description:
      "Work with experienced mentors for personal and professional growth.",
    color: "from-pink-500 to-rose-600",
  },
];

const CareerGrowth = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Elevate Your Career With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just offer jobs we build careers. Our comprehensive growth
            ecosystem is designed to propel you forward.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12">
            {growthItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-26 h-26 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition duration-300 shadow-lg group-hover:shadow-xl">
                  {item.icon}
                </div>
                <div className="text-center max-w-xs">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/get-in-touch"
            className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Grow Your Career →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerGrowth;
