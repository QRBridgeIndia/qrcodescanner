import * as React from "react";

export function Header({ title }) {
  return (
    <header className="flex justify-center items-center px-16 py-4 w-full h-[60px] bg-white shadow-md max-md:px-2 mb-2 sticky top-0 z-10">
      <h1 className="text-base font-medium text-zinc-900 tracking-normal">
        {title}
      </h1>
    </header>
  );
}