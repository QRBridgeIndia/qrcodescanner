import React, { useState, useEffect } from "react";
import { InputFieldReward } from "./InputFieldReward";
import apiClient from "../../api/apiClient";

function RewardForm({ onClose, id, reward, note, onUpdate }) {
  const [rewardAmount, setRewardAmount] = useState("");
  const [noteContent, setNoteContent] = useState("");

  useEffect(() => {
    setRewardAmount(reward || "");
    setNoteContent(note || "");
  }, [reward, note]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myData = {
      is_missing: true,
      bounty_amount: rewardAmount,
      note: noteContent,
    };

    try {
      const response = await apiClient.post(`/api/products/${id}/report-lost/`,{ ...myData });
      console.log(response,"response from report lost")
      onUpdate(rewardAmount, noteContent);
      onClose();
    } catch (err) {
      console.error("Error submitting data:", err);
    }
  };

  const handleReportAsFound = async () => {
    const myData = {
      is_missing: false,
      bounty_amount: 0,
      note: '',
    };

    try {
      const response = await apiClient.post(`/api/products/${id}/report-lost/`,{ ...myData });
      console.log(response,"response from report found")
      onUpdate(0, '');
      onClose();
    } catch (err) {
      console.error("Error submitting data:", err);
    }
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-5 w-[90%] sm:max-w-lg md:max-w-lg bg-white rounded-lg shadow-lg relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-6 h-6"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a738a8f436e484faec3589780532b1eb7ad316396dd6c0f47abe14d9815664d?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            className="w-full h-full object-contain"
            alt="Close"
          />
        </button>
  
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b99a832da9ae050cc1c703329a3b42ce4014d7d97c7da5cf796e57b444565443?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
          className="object-contain self-center mt-5 w-16 sm:w-20"
          alt="Reward item icon"
        />
  
        <div className="self-center mt-3 text-sm sm:text-base text-center text-zinc-900 w-full">
          Raise a Reward for the Lost Item
          <br />
          <span className="text-xs italic text-zinc-500">
            " You can post without offering a reward "
          </span>
        </div>
  
        <InputFieldReward
          label="Reward"
          value={rewardAmount}
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4d44f638486f4a68f0abf78c7b3e5d0e9b5b6c593c53f3d1fbef454f0dab1e?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
          type="text"
          onChange={(e) => setRewardAmount(e.target.value)}
          className="w-full"
        />
  
        <InputFieldReward
          label="Note"
          value={noteContent}
          type="textarea"
          onChange={(e) => setNoteContent(e.target.value)}
          className="w-full"
        />
        <button
            type="submit"
            className="w-full px-6 py-3 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Save Changes
          </button>
           {/* Report as Found Button */}
        <button
          type="button"
          onClick={handleReportAsFound}
          className="w-full px-6 py-3 mt-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
        >
          Report as Found
        </button>
      </form>
    </div>
  );
}  

export default RewardForm;