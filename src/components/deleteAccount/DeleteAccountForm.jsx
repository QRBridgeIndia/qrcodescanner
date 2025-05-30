import * as React from "react";
import { AlertBanner } from "./AlertBanner";
import { Header } from "../loginForm/Header";
import apiClient from "../../api/apiClient";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function DeleteAccountForm() {
  const [reason, setReason] = React.useState("");
  const [otherReason, setOtherReason] = React.useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalReason = reason === "Other Reason" ? otherReason : reason;

    if (!finalReason) {
      alert("Please provide a reason for deactivating your account.");
      return;
    }

    if (finalReason.length > 100) {
      alert("Reason must be 100 characters or less.");
      return;
    }

    try {
      await apiClient.post("/auth/deactivate/", {
        feedback: finalReason
      });
      Cookies.remove("authToken");
      delete apiClient.defaults.headers.common["Authorization"];
      navigate('/');
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

        {/* Reason dropdown */}
        <label className="text-base md:text-sm font-medium text-gray-700">Reason</label>
        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="mt-2 px-4 py-3 md:px-3 border border-gray-300 rounded w-full max-w-full text-base md:text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>Select a reason</option>
          <option className="text-sm md:text-base h-auto" value="No Longer Need the Service">
            No Longer Need the Service
          </option>
          <option className="text-sm md:text-base h-auto" value="Switching to a Different Solution">
            Switching to a Different Solution
          </option>
          <option className="text-sm md:text-base h-auto" value="Unsatisfied with the Service">
            Unsatisfied with the Service
          </option>
          <option className="text-sm md:text-base h-auto" value="Temporary Use Only">
            Temporary Use Only
          </option>
          <option className="text-sm md:text-base h-auto" value="Testing the Service">
            Testing the Service
          </option>
          <option className="text-sm md:text-base h-auto" value="Privacy Concerns">
            Privacy Concerns
          </option>
          <option className="text-sm md:text-base h-auto" value="Other Reason">
            Other Reason
          </option>
        </select>

        {/* Show input field only when "Other Reason" is selected */}
        {reason === "Other Reason" && (
          <input
            type="text"
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
            placeholder="Please specify your reason"
            className="mt-2 p-3 border border-gray-300 rounded w-full"
          />
        )}

        <button
          type="submit"
          className="mt-4 p-3 bg-red-600 text-white rounded w-full"
        >
          Delete
        </button>
      </div>
    </form>
  );
}

export default DeleteAccountForm;
