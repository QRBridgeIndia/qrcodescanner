import * as React from "react";
import { SelectInput } from "./SelectInput";
import { AlertBanner } from "./AlertBanner";
import { Header } from "../loginForm/Header";
import apiClient from "../../api/apiClient";
import { useNavigate } from "react-router-dom";

function DeleteAccountForm() {
  const [reason, setReason] = React.useState(""); 
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reason) {
      alert("Please provide a reason for deactivating your account.");
      return;
    }

    try {
      const response = await apiClient.post("/auth/deactivate/",{
        feedback:reason
      });

      console.log("Account deactivated successfully", response.data);
      navigate('/', { replace: true });
    } catch (error) {
      console.error("Error deactivating account:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col pt-6 w-full bg-white pb-[536px] max-md:pb-24 max-md:max-w-full"
    >
      <Header title="Delete Account" />
      <div className="flex flex-col px-5 mt-11 mb-0 w-full text-sm tracking-normal max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        <AlertBanner message="We're sorry to see you go. Please let us know why you're leaving to help us improve" />
        
        {/* Reason input field */}
        <SelectInput
          label="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)} 
        />
        
        <button
          type="submit"
          className="overflow-hidden gap-2 self-stretch px-6 py-5 mt-10 text-center text-white whitespace-nowrap bg-red-600 rounded min-h-[48px] max-md:px-5"
        >
          Delete
        </button>
      </div>
    </form>
  );
}

export default DeleteAccountForm;
