import React, { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Chatbot Integration System",
    category: "AI",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    description: "Intelligent chatbot system for customer support",
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    description: "Complete website redesign with modern technologies",
  },
  {
    id: 3,
    title: "Mobile App UI Design",
    category: "Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    description: "Stunning mobile app interface design",
  },
  {
    id: 4,
    title: "AI-Powered Analytics Platform",
    category: "AI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    description: "Advanced analytics platform with machine learning capabilities",
  },
  {
    id: 5,
    title: "E-Commerce Web Application",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    description: "Modern e-commerce solution with seamless user experience",
  },
  {
    id: 6,
    title: "Healthcare Dashboard Design",
    category: "Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    description: "Intuitive healthcare dashboard with beautiful UI/UX",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

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

  const categories = ["All", "AI", "Web Dev", "Design"];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 px-6 lg:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all"
                >
                  View Case Study
                  <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
