import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function QRCodeItem({ id, image, title, category }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/qr-details/${id}`)}
      className="flex flex-wrap gap-5 justify-between px-5 py-4 mt-5 w-full rounded border border-gray-200 border-solid bg-neutral-50 max-w-[560px] shadow-[0px_4px_16px_rgba(0,0,0,0.04)] max-md:max-w-full"
    >
      <div className="flex gap-5">
        <img
          width={"100px"}
          loading="lazy"
          src={image}
          alt={`QR Code for ${title}`}
          className="object-contain shrink-0 rounded shadow-[0px_8px_16px_rgba(0,0,0,0.06)] "
        />

        <div className="flex flex-col my-auto">
          <div className="self-start text-sm font-medium tracking-normal text-zinc-900">
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
