import * as React from "react";

export function InfoField({ label, value }) {
  return (
    <div className="flex flex-col rounded-none">
      <div className="self-start text-xs tracking-tight leading-relaxed text-gray-500">
        {label}
      </div>
      <div className="mt-1 text-sm tracking-normal leading-snug max-w-xs mx-auto sm:max-w-md text-zinc-900 overflow-hidden text-ellipsis line-clamp-2">
        {value}
      </div>
    </div>
  );
}
