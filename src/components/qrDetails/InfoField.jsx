import * as React from "react";

export function InfoField({ label, value }) {
  return (
    <div className="flex flex-col rounded-none">
      <div className="self-start text-xs tracking-tight leading-relaxed text-zinc-500">
        {label}
      </div>
      <div className="mt-3 text-sm tracking-normal leading-snug text-ellipsis text-zinc-900">
        {value}
      </div>
    </div>
  );
}
