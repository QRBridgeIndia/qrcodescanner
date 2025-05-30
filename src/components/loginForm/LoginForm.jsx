import React, { useEffect, useRef, useState } from "react";
import { PhoneInput } from "./PhoneInput";
import { Header } from "./Header";
import { useCustomNavigate } from "../../functions/navigate";
import apiClient from "../../api/apiClient";

function LoginForm() {
  const navigate = useCustomNavigate();
  const phoneInputRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false); 

  useEffect(() => {
    phoneInputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    let phone = phoneInputRef.current.value;
    if (!phone.startsWith("+91")) {
      phone = `+91${phone}`;
    }

    try {
      await apiClient.post("/auth/login/", { phone });
      navigate("/number-verification", { phone });
    } catch (err) {
      navigate("/account-setup", { phone });
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <Header title={"Login or Signup"} />
      <div className="flex-grow flex flex-col px-5 relative">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <PhoneInput ref={phoneInputRef} />
          <button
            type="submit"
            disabled={isSubmitting} 
            className={`w-full px-6 py-4 mt-8 text-center text-white text-base font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
            }`}
            aria-label="Continue with login"
          >
            {isSubmitting ? "Processing..." : "Continue"}
          </button>
        </form>
        <p className="mt-5 text-sm text-center text-gray-600">
          By Signing In, I agree to
          <a href="/terms" className="text-blue-500 hover:underline mx-1">
            Terms & Conditions
          </a>
          and
          <a href="/privacy" className="text-blue-500 hover:underline mx-1">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
