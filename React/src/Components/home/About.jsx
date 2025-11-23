import React from "react";

const features = [
  {
    title: "Expert AI Development",
    description:
      "Our team builds intelligent systems, machine learning models, and AI agents that automate workflows and drive innovation.",
    icon: "🤖",
  },
  {
    title: "World-Class Education",
    description:
      "Learn AI, Generative AI, and AI Agent development from industry experts with hands-on projects and real-world applications.",
    icon: "🎓",
  },
  {
    title: "Full-Stack Solutions",
    description:
      "From website development to AI training, we provide end-to-end solutions that transform your business operations.",
    icon: "💼",
  },
  {
    title: "Social Media Excellence",
    description:
      "We manage your social presence, create engaging content, and build your brand online with strategic management.",
    icon: "📱",
  },
  {
    title: "Modern Design",
    description:
      "We create beautiful, user-centered designs that enhance user experience and boost engagement across all platforms.",
    icon: "🎨",
  },
  {
    title: "Continuous Support",
    description:
      "From initial consultation to deployment and training, we provide comprehensive support at every stage of your journey.",
    icon: "🚀",
  },
];

function About() {
  return (
    <section id="about" className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Ace AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with comprehensive education
            services to help businesses transform digitally and achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
