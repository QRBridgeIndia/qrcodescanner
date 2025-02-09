import React from "react";

export function InputFieldReward({
  label,
  value,
  iconSrc,
  type = "text",
  onChange,
}) {
  const inputId = `${label.toLowerCase()}-input`;

  return (
    <>
      <label
        htmlFor={inputId}
        className="self-start mt-5 text-xs tracking-tight leading-relaxed text-zinc-500"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={inputId}
          value={value}
          onChange={onChange}
          className="w-full px-3.5 pt-3 pb-2 mt-2 rounded border border-gray-200 bg-neutral-50 text-zinc-900"
        />
      ) : (
        <div className="flex gap-5 justify-between px-3.5 py-4 mt-2 whitespace-nowrap rounded border border-gray-200 bg-neutral-50 text-zinc-900">
          <input
            type={type}
            id={inputId}
            value={value}
            onChange={onChange}
            className="flex-1 bg-transparent border-none outline-none"
          />
          {iconSrc && (
            <img
              loading="lazy"
              src={iconSrc}
              className="object-contain shrink-0 w-4 aspect-square"
              alt=""
            />
          )}
        </div>
      )}
    </>
  );
}
