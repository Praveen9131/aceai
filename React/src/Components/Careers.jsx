import React from "react";
import ApplyBtn from "./ApplyBtn.jsx";
import Footer from "./home/Footer.jsx";
import CareerGrowth from "./CareerGrowth.jsx";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAward,
  FaProjectDiagram,
} from "react-icons/fa";

const jobListings = [
  {
    title: "Frontend Developer",
    type: ["Interns", "FullTime"],
    description:
      "Work with modern frontend frameworks and enhance your skills in React.js while building real-world UI experiences.",
  },
  {
    title: "Backend Developer ",
    type: ["Interns", "FullTime"],
    description:
      "Get hands-on experience with Node.js or Python-based backend systems and contribute to scalable APIs and services.",
  },
  {
    title: "UI/UX Designer",
    type: ["Interns", "FullTime"],
    description:
      "Design intuitive user experiences and work alongside developers to bring wireframes and visual concepts to life.",
  },
  {
    title: "AI/ML Engineer",
    type: ["Interns", "FullTime"],
    description:
      "Develop, test, and deploy machine learning models. Work on LLMs, data pipelines, and intelligent features in production systems.",
  },
  {
    title: "Cloud Engineer",
    type: ["Interns", "FullTime"],
    description:
      "Architect and manage cloud-based deployments using AWS, Azure, or GCP for scalable and secure applications.",
  },
  {
    title: "DevOps Engineer",
    type: ["Interns", "FullTime"],
    description:
      "Streamline CI/CD pipelines, automate infrastructure, and ensure smooth deployment and monitoring workflows.",
  },
];

const Careers = () => {
  return (
    <>
      <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About AceAI Technology</h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            At AceAI Technology, we're building the future of AI-powered collaboration.
            Our mission is to bridge the gap between human creativity and
            artificial intelligence, creating tools that enhance productivity
            and innovation.
          </p>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-blue-800 to-blue-600 rounded-xl p-6 text-left shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Our Culture
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                We foster a culture of curiosity, experimentation, and
                continuous learning. Every team member is encouraged to
                contribute ideas and take ownership of their work.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-b from-blue-800 to-blue-600 rounded-xl p-6 text-left shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Our Values
              </h3>
              <ul className="text-gray-200 text-sm sm:text-base list-disc pl-5 space-y-1">
                <li>
                  <strong>Innovation:</strong> We push boundaries and challenge
                  the status quo
                </li>
                <li>
                  <strong>Collaboration:</strong> We believe in the power of
                  diverse perspectives
                </li>
                <li>
                  <strong>Impact:</strong> We focus on creating meaningful
                  change
                </li>
                <li>
                  <strong>Transparency:</strong> We communicate openly and
                  honestly
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-b from-blue-800 to-blue-600 rounded-xl p-6 text-left shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Sprint-Driven Approach
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                We work in focused weekly sprints, allowing us to iterate
                quickly, gather feedback, and continuously improve our products.
                This agile approach keeps us nimble and responsive to changing
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 text-black min-h-fit py-20 px-4 md:px-16 ">
          <h1 className="text-4xl font-bold mb-8 text-center">Open Roles</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobListings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white text-black rounded-xl p-6 shadow-sm shadow-gray-400 hover:shadow-2xl transition-all duration-300"
              >
                <h2 className="text-lg md:text-2xl font-semibold mb-3">
                  {job.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.type.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-200 text-blue-900 text-sm font-medium px-2.5 py-0.5 rounded border border-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-6 line-clamp-3">
                  {job.description}
                </p>
                <ApplyBtn />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <CareerGrowth />
      </section>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Careers;
