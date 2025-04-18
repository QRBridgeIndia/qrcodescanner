import * as React from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { GenderSelector } from "./GenderSelector";
import { useQueryData } from "../../functions/useQueryData";
import { Header } from "../loginForm/Header";
import { useCustomNavigate } from "../../functions/navigate";
import apiClient from "../../api/apiClient";

function AccountSetup() {
  const [otpSent, setOtpSent] = React.useState(false);
  const { phone } = useQueryData();
  const navigate = useCustomNavigate();
  // State to store form data
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    gender: "Male",
    phone: phone,
  });

  // Handle input changes
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Submitted:", formData);
    try {
      const response = await apiClient.post("/auth/register/", { ...formData });
      // console.log(response);
      navigate("/number-verification", { phone });
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditClick = () => {
    navigate("/");
  };

  return (
    <form
      className="flex flex-col w-full bg-white pb-[461px] max-md:pb-24 max-md:max-w-full"
      onSubmit={handleSubmit}
    >
      <Header title="Please Set Up Your Account" />
      <div className="flex flex-col px-5 mt-5 mb-0 w-full max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start w-full max-md:max-w-full">
          <div className="flex flex-col items-start text-xs tracking-tight leading-relaxed text-zinc-500">
            <div className="text-base tracking-normal leading-snug text-ellipsis text-zinc-900">
              {phone}
            </div>
            <div className="self-stretch mt-3">
              OTP will be sent to your number for verification
            </div>
          </div>
          <Button
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b24799aecdfe4a1b92731d8ac0c70091e018b9d24dd1e497e327c81a1a307b0e?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            text="Edit"
            variant="primary"
            onClick={handleEditClick}
          />
        </div>

        {/* Input Fields */}
        <InputField
          label="Name"
          value={formData.name}
          type="text"
          onChange={(value) => handleInputChange("name", value)}
        />
        <InputField
          label="Email"
          value={formData.email}
          type="email"
          onChange={(value) => handleInputChange("email", value)}
        />

        {/* Gender Selector */}
        <GenderSelector
          selectedGender={formData.gender}
          onChange={(gender) => handleInputChange("gender", gender)}
        />

        {/* <Button text="Send OTP" variant="full" className="mt-10" /> */}
        <Button
          text="Send OTP"
          variant="full"
          className="mt-10"
          onClick={() => setOtpSent(true)}
          disabled={otpSent}
        />
      </div>
    </form>
  );
}

export default AccountSetup;
