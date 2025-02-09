import React from "react";
import { useCustomNavigate } from "../../functions/navigate";

export function FormButtons() {
  const navigate = useCustomNavigate();
  return (
    <div className="flex flex-wrap gap-5 mt-5 w-full text-center whitespace-nowrap max-md:max-w-full">
      <button
        type="button"
        className="overflow-hidden flex-auto gap-2 self-stretch px-6 py-5 text-sky-600 bg-white rounded border border-sky-600 border-solid min-h-[48px] max-md:px-5"
        onClick={() => navigate("/profile")}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="overflow-hidden flex-auto gap-2 self-stretch px-6 py-5 text-white bg-indigo-600 rounded min-h-[48px] max-md:px-5"
      >
        Submit
      </button>
    </div>
  );
}
