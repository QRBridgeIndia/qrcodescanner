import * as React from "react";

export function SelectInput({ label, value, onChange }) {
  return (
    <>
      <label
        htmlFor="reasonInput"
        className="self-start mt-5 text-xs tracking-tight leading-relaxed text-zinc-500"
      >
        {label}
      </label>
      <div className="flex flex-wrap gap-5 justify-between px-4 py-4 mt-2 whitespace-nowrap rounded border border-gray-200 border-solid bg-neutral-50 text-zinc-900 max-md:max-w-full">
        {/* Replace select with input */}
        <input
          id="reasonInput"
          type="text"
          value={value}
          onChange={onChange}
          className="bg-transparent w-full border-none outline-none"
          placeholder="Please provide a reason"
        />
        {/* Optional image */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4da46d1da21f20eada3486cc46f894475fc43703fbab788d0368777440f56a2c?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
          alt=""
          className="object-contain shrink-0 w-4 aspect-square"
        />
      </div>
    </>
  );
}
