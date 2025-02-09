import React from "react";
import Logo from "../logo/Logo"; 

const FloatingHeader = () => {
  return (
    <header className="top-0 left-0 w-full h-16 bg-white shadow-md flex items-center px-4 z-50">
      <Logo />
    </header>
  );
};

export default FloatingHeader;
