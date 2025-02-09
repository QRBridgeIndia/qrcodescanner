import * as React from "react";

export function GenderSelector({ selectedGender, onChange }) {
  const genderOptions = ["Male", "Female"];

  return (
    <>
      <label className="self-start mt-5 text-xs tracking-tight leading-relaxed text-zinc-500">
        Gender
      </label>
      <div className="flex gap-2 self-start mt-2 text-sm tracking-normal leading-snug whitespace-nowrap">
        {genderOptions.map((gender) => (
          <button
            key={gender}
            type="button"
            onClick={() => onChange(gender)}
            className={`p-5 rounded ${
              selectedGender === gender
                ? "text-white bg-blue-800"
                : "border border-gray-200 border-solid bg-neutral-50 text-zinc-900"
            }`}
            aria-pressed={selectedGender === gender}
          >
            {gender}
          </button>
        ))}
      </div>
    </>
  );
}
