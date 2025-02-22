import React from "react";
import { Header } from "../loginForm/Header";

function TermsAndConditions() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Header title="Terms and Conditions" />
      <p className="mb-2">
        Welcome to our platform! These Terms and Conditions outline the rules and regulations for using our services.
      </p>
      <h2 className="text-lg font-semibold mt-4">1. Acceptance of Terms</h2>
      <p className="mb-2">By using our website, you agree to abide by these terms and conditions.</p>
      <h2 className="text-lg font-semibold mt-4">2. User Responsibilities</h2>
      <p className="mb-2">You must provide accurate information and comply with our policies.</p>
      <h2 className="text-lg font-semibold mt-4">3. Updates to Terms</h2>
      <p>We may update these terms from time to time. Continued use means acceptance of the changes.</p>
    </div>
  );
}

export default TermsAndConditions;
