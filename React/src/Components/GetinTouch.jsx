import React from "react";
import AiImpact from "./AiImpact";
import Footer from "./home/Footer";

const GetinTouch = () => {
  const steps = [
    {
      id: 1,
      title: "We Review Your Request",
      description:
        "Our team carefully evaluates the details you provide to understand your needs, goals, and potential project scope.",
    },
    {
      id: 2,
      title: "We Reach Out Within 1–2 Business Days",
      description:
        "You’ll receive a response from us shortly—either to request more information or to schedule an introductory call.",
    },
    {
      id: 3,
      title: "We Schedule a Discovery Call",
      description:
        "We’ll set up a quick, no-obligation call to dive deeper into your project, answer any questions, and explore potential solutions.",
    },
    {
      id: 4,
      title: "We Propose a Tailored Solution",
      description:
        "Based on your inputs, we craft a personalized approach—whether it’s a project plan, timeline, or next steps to move forward.",
    },
  ];
  return (
    <>
      <section className="w-full bg-black text-white px-6 py-16 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text Section */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Data to <span className="text-blue-500">decisions.</span>
              <br />
              <span className="text-blue-500"> Ideas </span>
              to impact. <br /> Let’s do it together.{" "}
            </h2>
            <p className="text-gray-300 text-lg">
              Have a data challenge, a brilliant idea, or just curious about
              what we can build together? We’re ready to listen and collaborate.
            </p>
          </div>

          {/* Right Form Section */}
          <div className="bg-white text-black rounded-2xl p-6 sm:p-10 shadow-xl">
            <h3 className="text-3xl font-semibold mb-2">Get in touch</h3>
            <p className="text-md text-gray-600 mb-6">
              Fill out the form and our team will reach out shortly.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white  py-12 px-4 sm:px-6 lg:px-8 my-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            What Happens After You Submit the Form
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-md text-lg font-bold">
                    {step.id}
                  </div>
                  <svg
                    className="w-5 h-5 ml-2 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-12">
        <AiImpact />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default GetinTouch;
