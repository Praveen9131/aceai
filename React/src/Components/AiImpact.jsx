import React from "react";
import AiImg from "../../public/homeImgs/AI.png";

const data = [
  {
    icon: "🤖",
    title: "AI-Powered Code Generation",
    description:
      "Boost delivery speed with 30% of code written using AI reliable, clean, and production-ready.",
  },
  {
    icon: "📈",
    title: "85% Increase in ROI",
    description:
      "Experience significant business gains through AI accelerated development cycles and smarter decisions.",
  },
  {
    icon: "🚀",
    title: "Launch 40% Faster",
    description:
      "Speed up your go-to-market timeline by weeks through AI-optimized workflows and automation.",
  },
  {
    icon: "💰",
    title: "Save $150K+ Per Product",
    description:
      "Automated QA, CI/CD, and testing reduce manual hours, delivering major cost efficiency per product.",
  },
  {
    icon: "⚡",
    title: "70% Reduction in Review Time",
    description:
      "AI-assisted reviews enable faster pull requests, quicker feedback loops, and rapid delivery.",
  },
  {
    icon: "🌐",
    title: "AI Across the Stack",
    description:
      "From backend to frontend, AI enhances every layer enabling smarter, scalable digital products.",
  },
];

const AiImpact = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-black to-blue-800 text-white py-16 px-4 lg:px-20 ">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight lg:mb-20">
            Empowering Innovation: How AI Enhances Every Layer of Our Stack{" "}
          </h2>
          <div className="flex justify-center">
            <img src={AiImg} alt="AI-imge" className="h-96 w-96 lg:mb-30 " />
          </div>
        </div>
        <div className="lg:mt-16 grid md:grid-cols-2 gap-6">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-blue-100">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiImpact;
