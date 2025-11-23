import React from "react";

const Collaboration = () => {
  return (
    <div className="max-w-7xl mx-auto text-center mt-12 mb-6">
      <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
        Our Collaborations
      </h2>
      <p className="text-black/70 md:text-lg mb-6 max-w-2xl mx-auto">
        We work hand-in-hand with institutions and individuals across the
        educational and industrial ecosystem to foster innovation, knowledge
        sharing, and real-world impact.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div class="group bg-blue-100 backdrop-blur-sm rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300  hover:-translate-y-1">
          <div class="text-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-building2 w-10 h-10 text-white"
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                <path d="M10 6h4"></path>
                <path d="M10 10h4"></path>
                <path d="M10 14h4"></path>
                <path d="M10 18h4"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
              For Industries
            </h3>
            <p class="text-muted-foreground text-md leading-relaxed">
              Partnering with tech companies, startups, and enterprises to
              bridge the gap between academia and real-world innovation.
            </p>
          </div>
          <div class="space-y-3"></div>
        </div>

        <div class="group bg-green-100 backdrop-blur-sm rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="text-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-users w-10 h-10 text-white"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
              For Students
            </h3>
            <p class="text-muted-foreground text-md leading-relaxed">
              Providing internships, project mentorship, and participation in AI
              labs, hackathons, and more.
            </p>
          </div>
          <div class="space-y-3"></div>
        </div>
        <div class="group bg-orange-100 backdrop-blur-sm rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div class="text-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-graduation-cap w-10 h-10 text-white"
              >
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
              For Colleges
            </h3>
            <p class="text-muted-foreground text-sm leading-relaxed"></p>
            Enabling skill-based learning, AI curriculum support, and campus
            connect programs
          </div>
          <div class="space-y-3"></div>
        </div>
        <div class="group bg-blue-50 backdrop-blur-sm rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="text-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-school w-10 h-10 text-white"
              >
                <path d="M14 22v-4a2 2 0 1 0-4 0v4"></path>
                <path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"></path>
                <path d="M18 5v17"></path>
                <path d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"></path>
                <path d="M6 5v17"></path>
                <circle cx="12" cy="9" r="2"></circle>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
              For Schools
            </h3>
            <p class="text-muted-foreground text-md leading-relaxed">
              Introducing AI foundations and digital literacy programs for
              school students and educators.{" "}
            </p>
          </div>
          <div class="space-y-3"></div>
        </div>
        <div class="group bg-pink-100 backdrop-blur-sm rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="text-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-university w-10 h-10 text-white"
              >
                <circle cx="12" cy="10" r="1"></circle>
                <path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"></path>
                <path d="M6 17v.01"></path>
                <path d="M6 13v.01"></path>
                <path d="M18 17v.01"></path>
                <path d="M18 13v.01"></path>
                <path d="M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
              For Universities
            </h3>
            <p class="text-muted-foreground text-md leading-relaxed">
              Co-developing research projects, hosting seminars, and innovation
              challenges.
            </p>
          </div>
          <div class="space-y-3"></div>
        </div>
        <div class="group bg-purple-100 backdrop-blur-sm rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="text-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-user-check w-10 h-10 text-white"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <polyline points="16 11 18 13 22 9"></polyline>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
              For Teachers
            </h3>
            <p class="text-muted-foreground text-md leading-relaxed">
              Empowering faculty with training, content, tools, and teaching
              resources in AI and emerging technologies.{" "}
            </p>
          </div>
          <div class="space-y-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
