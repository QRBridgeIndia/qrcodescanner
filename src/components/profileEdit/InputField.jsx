import React from "react";

export function InputField({ label, value, type, hasIcon, onChange }) {
  const inputId = `${label.toLowerCase().replace(/\s+/g, "-")}-input`;

  return (
    <div className="mt-5">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-600"
      >
        {label}
      </label>
      <div className="flex flex-wrap gap-5 justify-between px-3.5 py-4 mt-2 rounded border border-gray-200 border-solid bg-neutral-50 text-gray-600 max-md:max-w-full">
        <input
          type={type}
          id={inputId}
          maxLength={type === "tel" ? "10" : undefined}          value={value}
          onChange={onChange}
          className="my-auto text-ellipsis bg-transparent border-none w-full focus:outline-none"
          aria-label={label}
        />
        {hasIcon && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91e1cc0208358d63ed9771069bb37ef78810104d1940f371f0ab07f497a83d72?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            alt=""
            className="object-contain shrink-0 w-4 aspect-square"
          />
        )}
      </div>
    </div>
  );
}
