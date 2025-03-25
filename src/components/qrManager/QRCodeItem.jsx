import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function QRCodeItem({ id, image, title, category }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/qr-details/${id}`)}
      className="flex flex-wrap gap-5 justify-between px-5 py-4 mt-5 w-full h-[50px] rounded border border-gray-200 border-solid bg-neutral-50 max-w-[560px] shadow-md max-md:max-w-full"
    >
      <div className="flex gap-5">
        <img
          width="50"
          height="50"
          loading="lazy"
          src={image}
          alt={`QR Code for ${title}`}
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover shrink-0 rounded shadow-md"
        />

        <div className="flex flex-col my-auto">
          <div className="self-start text-sm font-medium tracking-normal text-zinc-900 break-words whitespace-normal">
            {title}
          </div>
          <div className="flex gap-3 items-center mt-4 text-xs tracking-normal text-zinc-500">
            <div className="gap-1.5 self-stretch my-auto">{category}</div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b5fcb3f07039e0c713c2b343706baf79a4ab8f605cb4b45e02aef3d6e3601dc?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
        alt=""
        className="object-contain shrink-0 my-auto w-4 aspect-square"
      />
    </div>
  );
}
