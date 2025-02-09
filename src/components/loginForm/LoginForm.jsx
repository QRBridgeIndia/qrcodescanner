import React, { useEffect, useRef } from "react";
import { PhoneInput } from "./PhoneInput";
import { Header } from "./Header";
import { useCustomNavigate } from "../../functions/navigate";
import apiClient from "../../api/apiClient";

function LoginForm() {
  const navigate = useCustomNavigate();
  const phoneInputRef = useRef();

  useEffect(() => {
    phoneInputRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let phone = phoneInputRef.current.value;
    if (!phone.startsWith("+91")) {
      phone = `+91${phone}`;
    }
    try {
      const response = await apiClient.post("/auth/login/", { phone });
      // setMessage(response.message);
      console.log(response);
      navigate("/number-verification", { phone });
    } catch (err) {
      // setError(err.response?.data?.error || "An error occurred");
      console.log(err);
      navigate("/account-setup", { phone });
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <Header title={"Login or Signup"} />
      <div className="flex-grow flex flex-col px-5">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <PhoneInput ref={phoneInputRef} />
          <button
            type="submit"
            className="w-full px-6 py-4 mt-8 text-center text-white text-base font-medium bg-indigo-500 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            aria-label="Continue with login"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
