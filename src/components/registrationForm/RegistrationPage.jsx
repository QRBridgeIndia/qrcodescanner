import * as React from "react";
import { RegistrationButton } from "./RegistrationButton";

export function RegistrationPage() {
  return (
    <div className="flex flex-col items-center px-5 mt-40 w-full bg-white max-md:py-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/44b8c58b2e6a24beca5290c9a5944fc7d44be9e9925360ed5c38980a06ed49a7?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
        className="object-contain max-w-full aspect-square w-[140px]"
        alt="Registration QR Code"
      />
      <div
        className="mt-20 text-lg tracking-normal leading-6 text-zinc-900 w-[353px] max-md:mt-10 text-center"
        role="text"
      >
        Register your QR code here to link it with your item for easy recovery
      </div>
      <RegistrationButton />
    </div>
  );
}
