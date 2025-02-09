import * as React from "react";
import { useCustomNavigate } from "../../functions/navigate";

export function RegistrationButton() {
  const navigate = useCustomNavigate();
  return (
    <button
      onClick={() => navigate("/scan-qr")}
      className="flex overflow-hidden flex-wrap gap-2 justify-center items-center self-stretch px-6 py-4 mt-2 text-sm tracking-normal leading-snug text-white whitespace-nowrap bg-indigo-500 rounded min-h-[48px] max-md:px-5 max-md:mb-2.5"
      tabIndex="0"
    >
      <span className="self-stretch my-auto">Register</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8300b9a4a3e637e460e7c1e9d9ad5a9e55cf3980513bc44d3d7cc65f7f38ccbf?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        alt=""
      />
    </button>
  );
}
