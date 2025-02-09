import * as React from "react";

export function ActionButton({ text, icon, bgColor, onClick }) {
  return (
    <div
      className={`flex flex-1 gap-1.5 px-6 py-3 text-white ${bgColor} rounded max-md:px-5 cursor-pointer`}
      onClick={onClick}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-3.5 aspect-square"
      />
      <div className="my-auto">{text}</div>
    </div>
  );
}
