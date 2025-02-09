import * as React from "react";

export function Header({ title }) {
  return (
    <header className="flex justify-center items-center px-16 py-6 w-full bg-white shadow-md max-md:px-5 mb-2">
      <h1 className="text-base font-medium text-zinc-900 tracking-normal">
        {title}
      </h1>
    </header>
  );
}
