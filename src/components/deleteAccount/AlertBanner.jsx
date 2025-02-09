import * as React from "react";

export function AlertBanner({ message }) {
  return (
    <div 
      role="alert"
      className="px-5 py-4 leading-5 text-amber-400 bg-yellow-500	 max-md:max-w-full"
    >
      {message}
    </div>
  );
}