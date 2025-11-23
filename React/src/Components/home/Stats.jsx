import React from "react";
import { FaUsers, FaProjectDiagram, FaAward, FaGraduationCap } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={40} />,
    number: "200+",
    label: "Happy Clients",
    description: "Satisfied businesses worldwide",
  },
  {
    icon: <FaProjectDiagram size={40} />,
    number: "500+",
    label: "Projects Completed",
    description: "Successful implementations",
  },
  {
    icon: <FaGraduationCap size={40} />,
    number: "1000+",
    label: "Students Trained",
    description: "In AI and technology",
  },
  {
    icon: <FaAward size={40} />,
    number: "98%",
    label: "Client Satisfaction",
    description: "Rated excellent service",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center text-blue-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;






