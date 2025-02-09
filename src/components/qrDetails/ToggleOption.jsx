import * as React from "react";

export function ToggleOption({ label }) {
  return (
    <div className="flex flex-wrap gap-5 justify-between p-5 bg-white border-b border-gray-200 max-md:max-w-full">
      <div className="my-auto text-sm font-medium tracking-normal leading-snug text-zinc-900">
        {label}
      </div>
      <div className="flex flex-col justify-center items-start px-1.5 py-1 bg-gray-600 rounded-3xl">
        <div className="flex shrink-0 w-2.5 h-2.5 bg-white rounded-full" />
      </div>
    </div>
  );
}