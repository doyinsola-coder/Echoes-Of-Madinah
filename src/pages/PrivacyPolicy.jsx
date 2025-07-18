// pages/PrivacyPolicy.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserShield } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="pt-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-100 text-gray-900 min-h-screen">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-md space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FaUserShield className="text-gray-600" /> Privacy Policy
        </h1>
        <p>
          We value your privacy. Echoes of Madinah does not collect personal information unless you contact us directly. We do not track, store, or share your data with third parties.
        </p>
        <p>
          By using this website, you agree to our terms. If we make any changes to this policy, we will notify users on this page.
        </p>
      </motion.div>
    </main>
  );
};

export default PrivacyPolicy;
