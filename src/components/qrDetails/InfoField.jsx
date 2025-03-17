import * as React from "react";

export function InfoField({ label, value }) {
  return (
    <div className="flex flex-col rounded-none whitespace-pre-line break-words">
      <div className="self-start text-xs tracking-tight leading-relaxed text-gray-500">
        {label}
      </div>
      <div className="mt-1 text-sm tracking-normal leading-snug whitespace-pre-line break-words text-zinc-900">
        {value}
      </div>
    </div>
  );
}
