import * as React from "react";
import NumberInput from "./NumberInput";
import { Header } from "../loginForm/Header";
import { useCustomNavigate } from "../../functions/navigate";
import { useQueryData } from "../../functions/useQueryData";
import apiClient, { setAuthToken } from "../../api/apiClient";


function NumberVerification() {
  const navigate = useCustomNavigate();
  const { phone } = useQueryData();
  const [verificationCode, setVerificationCode] = React.useState([
    "",
    "",
    "",
    "",
  ]);
  const [cooldown, setCooldown] = React.useState(0); // Track cooldown in seconds
  const [expire, setExpire] = React.useState(false);
  // Handle individual digit input
  const handleChange = (index, value) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);
  };

  React.useEffect(() => {
    const firstInput = document.querySelector("input");
    if (firstInput) {
      firstInput.focus(); // Set focus to the first input
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = verificationCode.join("");
    let myData = {
      phone,
      otp,
    };
    try {
      const response = await apiClient.post("/auth/verify-otp/", {
        ...myData,
      });
      console.log(response);
      setAuthToken(response.data.access);
      
      // localStorage.setItem("user", response.data);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setExpire(true);
    }
  };

  // Resend OTP logic
  const handleResendOTP = async () => {
    try {
      const response = await apiClient.post("/auth/login/", { phone });
    } catch (err) {
      console.log(err);
    }

    setCooldown(60); // Start with 60 seconds cooldown

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center w-full bg-white pb-[647px] max-md:pb-24 max-md:max-w-full">
      <Header title="Number Verification" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full px-5"
      >
        <div className="flex gap-5 mt-10 max-w-full whitespace-nowrap w-[252px]">
          {verificationCode.map((digit, index) => (
            <NumberInput
              key={index}
              value={digit}
              index={index}
              onChange={handleChange}
            />
          ))}
        </div>
        {expire ? (
          <p className="text-red-700 mt-2">
            Your OTP has expired or is incorrect, please retry.
          </p>
        ) : null}

        <button
          type="submit"
          className="overflow-hidden gap-2 self-stretch px-6 py-5 mt-10 w-full text-sm tracking-normal text-center text-white whitespace-nowrap bg-blue-500 rounded max-w-[560px] min-h-[48px] max-md:px-5 max-md:max-w-full"
        >
          Verify
        </button>

        {cooldown > 0 ? (
          `Resend OTP in ${cooldown}s`
        ) : (
          <button
            type="button"
            onClick={handleResendOTP}
            disabled={cooldown > 0} // Disable button if cooldown is active
            className="mt-6 mb-0 text-xs font-semibold tracking-normal text-sky-600 max-md:mb-2.5"
          >
            Resend OTP
          </button>
        )}
      </form>
    </div>
  );
}

export default NumberVerification;
