// src/Components/TermsAndConditions.jsx
import React from "react";

const Terms = () => {
  return (
    <section className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Terms and Conditions
      </h1>

      <p className="text-gray-700 mb-6">
        Welcome to <strong>Ace AI</strong>. These terms and conditions outline
        the rules and regulations for the use of our website and services. By
        accessing or using our services, you agree to comply with and be bound
        by these terms.
      </p>

      <div className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Use of Our Services</h2>
          <p>
            You agree to use our website and services only for lawful purposes
            and in a way that does not infringe the rights of others or restrict
            their use of the site.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Intellectual Property
          </h2>
          <p>
            All content, branding, logos, and intellectual property on this
            website are the property of Ace AI or its licensors. Unauthorized
            use is strictly prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
          <p>
            If you create an account with us, you are responsible for
            maintaining the confidentiality of your account and password. You
            agree to accept responsibility for all activities under your
            account.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Limitation of Liability
          </h2>
          <p>
            Ace AI will not be held liable for any direct, indirect, incidental,
            or consequential damages arising from your use of our website or
            services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our services
            at any time, without prior notice or liability, for any reason
            whatsoever.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
          <p>
            Ace AI may update these Terms and Conditions at any time. Your
            continued use of the website after any changes indicates your
            acceptance of the new terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes will be
            resolved under Indian jurisdiction.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p>
            For any questions about these Terms, contact us at{" "}
            <a
              href="mailto: director@aceai.in"
              className="text-blue-600 underline"
            >
              director@aceai.in
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
