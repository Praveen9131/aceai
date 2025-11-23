import React from "react";

const Research = () => {
  const data = [
    {
      title: "Joint Research Projects",
      description:
        "Collaborative projects with PhD students, faculty, and industry in cutting-edge AI domains.",
      tags: ["PhD Support", "Faculty Collaboration", "AI Projects"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0 0-14h-1" />
          <path d="M9 14h2" />
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
      ),
      iconBg: "bg-gradient-to-r from-blue-500 to-blue-700",
    },
    {
      title: "Resources & Labs",
      description:
        "Access to GPU-powered computing, datasets, cloud-based tools, and model experimentation labs.",
      tags: ["Datasets", "GPU Labs", "Experimentation"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path d="M3 3v18h18" />
          <path d="M7 14h8v2H7zM7 10h8v2H7z" />
          <path d="M11 6h4v2h-4z" />
        </svg>
      ),
      iconBg: "bg-gradient-to-r from-green-500 to-green-700",
    },
    {
      title: "Publications & Patents",
      description:
        "Guidance for publishing papers, filing patents, and executing research-based capstone projects.",
      tags: ["Publishing", "Patents", "Capstone"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path d="M6 2h9l3 3v17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
          <path d="M9 7h6" />
          <path d="M9 11h6" />
          <path d="M9 15h3" />
        </svg>
      ),
      iconBg: "bg-gradient-to-r from-pink-500 to-pink-700",
    },
    {
      title: "Innovation & Excellence",
      description:
        "Support for AI clubs, innovation cells, and Centers of Excellence focused on real-world impact.",
      tags: ["AI Clubs", "Innovation Labs", "CoE"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path d="M12 2l4 8h8l-6.5 5.5L19 22l-7-4-7 4 1.5-6.5L0 10h8z" />
        </svg>
      ),
      iconBg: "bg-gradient-to-r from-purple-500 to-purple-700",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
          Research & Innovation Engagement
        </h2>
        <p className="text-black/70 mb-12 md:text-lg max-w-3xl mx-auto">
          Empowering academic and industry collaboration through knowledge,
          tools, and innovation. We actively support PhD students, researchers,
          and faculty in AI-focused domains.
        </p>

        <div className="grid md:grid-cols-2 gap-8 w-fit">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-lg ${item.iconBg} mb-4`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl text-left font-semibold text-black mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 text-left mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 border border-blue-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
