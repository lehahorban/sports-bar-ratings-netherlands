"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const PrivacyPolicy = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isPrivacyPolicyAccepted = Cookies.get("privacy_policy_accepted");
    if (!isPrivacyPolicyAccepted) {
      setShowModal(true);
    }
  }, []);

  const acceptPrivacyPolicy = () => {
    Cookies.set("privacy_policy_accepted", "true", { expires: 365 });
    setShowModal(false);
  };

  return (
    <section className="pt-36 pb-20">
      <div className="container">
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                Privacy Policy Confirmation
              </h2>
              <p className="mb-4">
                Please read and accept our Privacy Policy before continuing to
                use our website.
              </p>
              <button
                onClick={acceptPrivacyPolicy}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Accept Privacy Policy
              </button>
            </div>
          </div>
        )}

        <div className="bg-white text-main p-8">
          <h1 className="text-orange text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-accent text-lg mb-2">
            Your privacy is important to us. It is our policy to respect your
            privacy regarding any information we may collect from you across our
            website. We only ask for personal information when we truly need it
            to provide a service to you.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              We collect it by fair and lawful means, with your knowledge and
              consent.
            </li>
            <li>
              We only retain collected information for as long as necessary to
              provide you with your requested service.
            </li>
            <li>
              We don’t share any personally identifying information publicly or
              with third-parties, except when required to by law.
            </li>
          </ul>

          <h2 className="text-orange text-3xl font-bold mb-4">
            Terms and Conditions
          </h2>
          <p className="text-accent text-lg mb-2">
            By accessing this website, you are agreeing to be bound by these
            website Terms and Conditions of Use, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              If you do not agree with any of these terms, you are prohibited
              from using or accessing this site.
            </li>
            <li>
              The materials contained in this website are protected by
              applicable copyright and trademark law.
            </li>
          </ul>

          <h2 className="text-orange text-3xl font-bold mb-4">Disclaimer</h2>
          <p className="text-accent text-lg mb-2">
            The materials on this website are provided &quot;as is&quot;. We
            make no warranties, expressed or implied, and hereby disclaim and
            negate all other warranties, including without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
