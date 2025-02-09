import * as React from "react";

export function Button({ icon, text, variant, className = "",onClick }) {
  const baseStyles = "text-sm tracking-normal leading-snug text-center text-white";
  const variants = {
    primary: "flex overflow-hidden gap-1.5 px-6 py-3 whitespace-nowrap bg-blue-500 rounded max-md:px-5",
    full: "overflow-hidden gap-2 self-stretch px-6 py-5 bg-indigo-500 rounded min-h-[48px] max-md:px-5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      type={variant === "full" ? "submit" : "button"}
      onClick={onClick}
    >
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 w-3.5 aspect-square"
        />
      )}
      <span className="my-auto">{text}</span>
    </button>
  );
}