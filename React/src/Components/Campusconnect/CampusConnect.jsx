import React from "react";
import Aiworkshops from "./Aiworkshops";
import Research from "./Research";
import Footer from "../home/Footer";
import Collaboration from "./Collaboration";
import WhyConnect from "./WhyConnect";
import ContactForm from "../../Components/ContactForm";
import { Link } from "react-router-dom";

function CampusConnect() {
  return (
    <>
      <section className="bg-gradient-to-t from-blue-100 to-blue-200 py-16 md:py-30">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
          <div className="w-full md:w-full text-center md:text-left">
            <h1 className="text-3xl md:text-6xl text-center font-bold text-black leading-tight">
              Empowering Students Through
              <br />
              <span className="bg-gradient-to-b from-blue-900 to-blue-500 text-transparent md:text-7xl bg-clip-text font-extrabold mt-10">
                Campus Connect
              </span>
            </h1>
            <div className="w-full flex justify-center items-center">
              <p className="mt-4 text-gray-700 text-center md:w-1/2 text-lg md:text-xl">
                Bridge the gap between students, companies, and opportunities.
                Discover internships, and collaborations that shape your future.
              </p>
            </div>
            <div className="mt-10 flex justify-center md:justify-center gap-10">
              <Link
                to="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <WhyConnect />
      </section>

      {/* our courses */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl text-black md:text-5xl font-bold text-center mb-4 mt-4">
            Our Courses
          </h1>
          <div className="flex items-center justify-center">
            <p className=" text-md md:text-lg w-full md:w-2/3 lg:w-1/2 text-center text-black/70 py-4 md:py-6">
              Discover our expertly crafted courses in DevOps, MLOps, AI,
              Python, Frontend Development, Backend Development, Machine
              Learning, and Complete AI Master Class with clear pricing and
              detailed plans.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-3 w-full">
            {/* Python Course */}
            <div className="animate_top group relative h-fit shadow-xl bg-white p-6 sm:p-7.5">
              <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-black">
                Python
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-bold text-black">
                INR 4.5k
                <span className="text-xs sm:text-sm text-gray-700 px-2 py-1  rounded-full">
                  One Time
                </span>
              </h3>
              <p className="text-black/80 text-sm sm:text-base">
                Master Python programming, covering fundamentals, data analysis,
                and AI libraries like TensorFlow and PyTorch.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 border-0">
                <ul>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Java Course */}
            <div className="animate_top group relative h-fit p-6 sm:p-7.5 shadow-xl bg-white">
              <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-black">
                Java
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-bold text-black">
                INR 5k
                <span className="text-xs sm:text-sm text-gray-700 px-2 py-1  rounded-full">
                  One Time
                </span>
              </h3>
              <p className="text-black/80 text-sm sm:text-base">
                Learn Java programming from basics to advanced, including OOP,
                data structures, algorithms, and building robust backend
                applications.
              </p>
              <div className="mt-5 sm:mt-5 border-t border-stroke pb-8 sm:pb-10 pt-6 sm:pt-9">
                <ul>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Machine Learning Course */}
            <div className="animate_top group relative h-fit p-6 sm:p-7.5 shadow-xl bg-white">
              <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-black">
                Machine Learning
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-bold text-black">
                INR 4.5k
                <span className="text-xs sm:text-sm text-gray-700 px-2 py-1  rounded-full">
                  One Time
                </span>
              </h3>
              <p className="text-black/80 text-sm sm:text-base">
                Explore algorithms, neural networks, and data modeling
                techniques to build predictive systems with tools like
                Scikit-learn and Keras.
              </p>
              <div className="mt-5 sm:mt-5 border-t border-stroke pb-8 sm:pb-10 pt-6 sm:pt-9">
                <ul>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* AI Master Class Course */}
            <div className="animate_top group relative h-fit p-6 sm:p-7.5 shadow-xl">
              <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-black">
                AI Master Class
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-bold text-black">
                INR 12.5k
                <span className="text-xs sm:text-sm text-gray-700 px-2 py-1  rounded-full">
                  One Time
                </span>
              </h3>
              <p className="text-black text-sm sm:text-base">
                A comprehensive course covering AI fundamentals, machine
                learning, generative AI, and agentic systems for a holistic AI
                education.
              </p>
              <div className="mt-5 sm:mt-5 border-t border-stroke pb-8 sm:pb-10 pt-6 sm:pt-9">
                <ul>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Generative AI Course */}
            <div className="animate_top group relative h-fit  p-6 sm:p-7.5 shadow-xl">
              <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-black">
                Generative AI
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-bold text-black">
                INR 5k
                <span className="text-xs sm:text-sm text-gray-700 px-2 py-1  rounded-full">
                  One Time
                </span>
              </h3>
              <p className="text-black text-sm sm:text-base">
                Build advanced generative models like GANs and LLMs to create
                innovative AI applications for creative industries.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9">
                <ul>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Agentics AI Course */}
            <div className="animate_top group relative h-fit  p-6 sm:p-7.5 shadow-xl">
              <h3 className="mb-4 text-2xl sm:text-4xl font-bold text-black">
                Agentics AI
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-bold text-black">
                INR 7k
                <span className="text-xs sm:text-sm text-gray-700 px-2 py-1  rounded-full">
                  One Time
                </span>
              </h3>
              <p className="text-black/80 text-sm sm:text-base">
                Develop intelligent AI agents capable of autonomous
                decision-making and task automation.
              </p>
              <div className="mt-6 sm:mt-7 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9">
                <ul>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Frontend Development Course */}
            <div className="animate_top group relative h-fit  p-6 sm:p-7.5 shadow-xl">
              <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-black">
                Frontend
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-bold text-black">
                INR 5k
                <span className="text-xs sm:text-sm text-gray-700 px-2 py-1  rounded-full">
                  One Time
                </span>
              </h3>
              <p className="text-black/80 text-sm sm:text-base">
                Design responsive, user-friendly web interfaces using modern
                frameworks like React, Vue.js, and Angular.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9">
                <ul>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Backend Development Course */}
            <div className="animate_top group relative h-fit p-6 sm:p-7.5 shadow-xl">
              <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-black">
                Backend
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-bold text-black">
                INR 6.5k
                <span className="text-xs sm:text-sm text-gray-700 px-2 py-1  rounded-full">
                  One Time
                </span>
              </h3>
              <p className="text-black/80 text-sm sm:text-base">
                Develop scalable backend systems with Node.js, Django, and
                databases like MongoDB and PostgreSQL.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9">
                <ul>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* MLOps Course */}
            <div className="animate_top group relative h-fit p-6 sm:p-7.5 shadow-xl">
              <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-black">
                MLOps
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-bold text-black">
                INR 5.5k
                <span className="text-xs sm:text-sm text-gray-700 px-2 py-1  rounded-full">
                  One Time
                </span>
              </h3>
              <p className="text-black text-sm sm:text-base">
                Learn to deploy and manage machine learning models at scale
                using MLOps tools and best practices.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9">
                <ul>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Devops Course */}
            <div className="animate_top group relative h-fit shadow-xl p-6 sm:p-7.5 ">
              <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-black">
                Devops
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-bold text-black">
                INR 10k
                <span className="text-xs sm:text-sm text-gray-700 px-2 py-1  rounded-full">
                  One Time
                </span>
              </h3>
              <p className="text-black text-sm sm:text-base">
                Master DevOps practices, including CI/CD pipelines,
                containerization with Docker, and orchestration with Kubernetes.
              </p>
              <div className="mt-6 sm:mt-9 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9">
                <ul>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Cloud Computing Course */}
            <div className="animate_top group relative h-fit p-6 sm:p-7 shadow-xl">
              <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-black">
                Cloud Computing
              </h3>
              <h3 className="mb-2 text-xl sm:text-2xl font-bold text-black">
                INR 8k
                <span className="text-xs sm:text-sm text-gray-700 px-2 py-1  rounded-full">
                  One Time
                </span>
              </h3>
              <p className="text-black text-sm sm:text-base">
                Learn cloud architecture, deployment, and management using AWS,
                Azure, and Google Cloud with hands-on projects.
              </p>
              <div className="mt-6 sm:mt-10 border-t border-stroke pb-10 sm:pb-12 pt-6 sm:pt-9 ">
                <ul>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Live Classes
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    3 months course
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Lifetime of access
                  </li>
                  <li className="mb-3 sm:mb-4 text-black text-sm sm:text-base">
                    Project Based Learning
                  </li>
                </ul>
              </div>
              <a
                href="#"
                aria-label="Buy button"
                className="group/btn inline-flex items-center gap-2.5 font-medium transition-all duration-300 text-blue-600 text-sm sm:text-base"
              >
                <span className="duration-300 group-hover/btn:pr-2">Buy</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Aiworkshops />
        <Research />
        <Collaboration />
      </section>
      <div>
        <ContactForm />
      </div>
      <Footer></Footer>
    </>
  );
}

export default CampusConnect;
