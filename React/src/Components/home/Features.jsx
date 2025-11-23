import React, { useEffect, useRef, useState } from "react";
import {
  FaRocket,
  FaBrain,
  FaUsers,
  FaAward,
  FaCog,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket size={48} />,
    number: "01",
    title: "Fast Delivery",
    description:
      "We deliver projects on time without compromising quality. Our agile methodology ensures rapid iteration and quick turnaround.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaBrain size={48} />,
    number: "02",
    title: "AI-Powered Solutions",
    description:
      "Leverage cutting-edge AI technology to automate processes, gain insights, and stay ahead of the competition.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaUsers size={48} />,
    number: "03",
    title: "Expert Team",
    description:
      "Work with a team of experienced developers, designers, and AI specialists dedicated to your success.",
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: <FaAward size={48} />,
    number: "04",
    title: "Custom Designs",
    description:
      "Every project is tailored to your brand identity and business goals. No templates, only unique solutions.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: <FaCog size={48} />,
    number: "05",
    title: "Ongoing Support",
    description:
      "We provide continuous support and maintenance to ensure your solutions remain optimal and up-to-date.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const Features = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll(".feature-item");
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 px-6 lg:px-12 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose Aceai
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the difference with our comprehensive approach
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-item flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                  ? "opacity-0 -translate-x-20"
                  : "opacity-0 translate-x-20"
              } transition-all duration-1000`}
            >
              {/* Icon/Number */}
              <div className="flex-shrink-0 w-full lg:w-1/3">
                <div className="relative">
                  <div className="text-8xl font-bold text-white/10 absolute -top-8 -left-8">
                    {feature.number}
                  </div>
                  <div
                    className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-500`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;






