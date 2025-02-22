import * as React from "react";

export function ActionButton({ text, icon, bgColor, onClick }) {
  return (
    <div
      className={`flex flex-1 items-center justify-center gap-2 px-6 py-3 text-white ${bgColor} rounded max-md:px-3 cursor-pointer`}
      onClick={onClick}
    >
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain w-4 h-4"
        />
      )}
      <span className="text-center">{text}</span>
    </div>
  );
}
