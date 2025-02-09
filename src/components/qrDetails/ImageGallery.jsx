import * as React from "react";
import { baseURL } from "../../api/apiClient";

export function ImageGallery({ product, qr }) {
  console.log(product);
  return (
    <div className="flex gap-5 self-center max-w-full w-[100px]">
      <img
        loading="lazy"
        src={baseURL + qr}
        alt="QR code preview"
        className="object-contain shrink-0 max-w-full rounded aspect-square shadow-[0px_8px_16px_rgba(0,0,0,0.06)] w-24"
      />
      <img
        loading="lazy"
        src={
          product ||
          "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
        }
        alt="Item preview"
        className="object-contain shrink-0 max-w-full rounded aspect-square shadow-[0px_8px_16px_rgba(0,0,0,0.06)] w-24"
      />
    </div>
  );
}
