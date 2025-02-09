import * as React from "react";

export function InputField({ label, value, type, onChange }) {
  const inputId = `${label.toLowerCase()}Input`;

  return (
    <>
      <label
        htmlFor={inputId}
        className="self-start mt-5 text-xs tracking-tight leading-relaxed text-zinc-500"
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="px-3.5 py-5 mt-2 text-sm tracking-normal leading-snug whitespace-nowrap rounded border border-gray-200 border-solid bg-neutral-50 text-ellipsis text-zinc-900 max-md:pr-5 max-md:max-w-full"
      />
    </>
  );
}
