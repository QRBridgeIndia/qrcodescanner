import React from "react";
import { Header } from "../loginForm/Header";

function PrivacyPolicy() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Header title="Privacy Policy" />
      <p className="mb-2">
        Your privacy is important to us. This Privacy Policy explains how we handle your personal information.
      </p>
      <h2 className="text-lg font-semibold mt-4">1. Information We Collect</h2>
      <p className="mb-2">We collect personal data such as name, phone number, and email for authentication purposes.</p>
      <h2 className="text-lg font-semibold mt-4">2. How We Use Your Data</h2>
      <p className="mb-2">Your information is used to provide and improve our services.</p>
      <h2 className="text-lg font-semibold mt-4">3. Security Measures</h2>
      <p>We take reasonable precautions to protect your data but cannot guarantee absolute security.</p>
    </div>
  );
}

export default PrivacyPolicy;
