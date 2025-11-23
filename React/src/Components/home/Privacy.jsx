import React from "react";

const Privacy = () => {
  return (
    <section className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Privacy Policy
      </h1>

      <p className="text-gray-700 mb-6">
        At <strong>Ace AI</strong>, we value your privacy and are committed to
        protecting your personal data. This Privacy Policy outlines how we
        collect, use, and safeguard your information when you visit our website
        or use our services.
      </p>

      <div className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Personal identification information (Name, Email, etc.)</li>
            <li>Usage data such as pages visited and time spent</li>
            <li>Technical data (IP address, browser type, etc.)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To improve our website and services</li>
            <li>To communicate with you about updates and offers</li>
            <li>To respond to your queries or customer service requests</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal data against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Third-Party Services
          </h2>
          <p>
            We may use third-party services (e.g., analytics tools) that
            collect, monitor, and analyze this type of information to improve
            our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw your consent at any time</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this policy, please
            contact us at{" "}
            <a
              href="mailto:director@aceai.in"
              className="text-blue-600 underline"
            >
              director@aceai.in{" "}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
