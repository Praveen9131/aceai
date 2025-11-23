import React, { useEffect, useRef, useState } from "react";
import { FaRobot, FaCode, FaPalette } from "react-icons/fa";

const services = [
  {
    icon: <FaRobot size={64} />,
    title: "AI Services",
    description:
      "Harness the power of artificial intelligence with custom AI solutions, machine learning models, and intelligent automation that transform your business operations.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: <FaCode size={64} />,
    title: "Website Development",
    description:
      "Build stunning, responsive websites and web applications with modern technologies. From landing pages to complex platforms, we deliver scalable solutions.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: <FaPalette size={64} />,
    title: "UX/UI Design",
    description:
      "Create intuitive, beautiful user experiences that engage and convert. Our designs combine aesthetics with functionality for maximum impact.",
    gradient: "from-teal-500 to-green-500",
    bgGradient: "from-teal-500/10 to-green-500/10",
  },
];

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 px-6 lg:px-12 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to elevate your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Gradient Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
