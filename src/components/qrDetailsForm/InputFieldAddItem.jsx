import * as React from "react";

export function InputFieldAddItem({
  label,
  value,
  id,
  multiline,
  disabled,
  onChange,
}) {
  return (
    <>
      <label
        htmlFor={id}
        className="self-start text-xs font-medium tracking-tight leading-relaxed text-gray-500"
      >
        {label}
      </label>
      {!multiline ? (
        <input
          id={id}
          required
          type="text"
          value={value}
          disabled={disabled}
          onChange={onChange}
          className="px-3.5 py-5 mt-2 text-sm font-medium tracking-normal leading-snug rounded border border-gray-200 border-solid bg-neutral-50 text-ellipsis text-zinc-900 max-md:pr-5 max-md:max-w-full"
        />
      ) : (
        <textarea
          required
          id={id}
          value={value}
          disabled={disabled}
          onChange={onChange}
          className="px-3.5 py-5 mt-2 text-sm font-medium tracking-normal leading-snug rounded border border-gray-200 border-solid bg-neutral-50 text-ellipsis text-zinc-900 max-md:pr-5 max-md:max-w-full pb-24 max-md:pb-28"
        />
      )}
    </>
  );
}
