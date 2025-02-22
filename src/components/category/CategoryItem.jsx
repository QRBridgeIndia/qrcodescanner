import React from "react";
import { useCustomNavigate } from "../../functions/navigate";

function CategoryItem({ id,title, items,qrCodeId, className = "" }) {
  const navigate = useCustomNavigate();
  return (
    <div
      onClick={() => navigate("/qr-details-form",{qr_code_id:qrCodeId ,category_id:id})}
      className={`flex flex-wrap gap-5 justify-between p-5 mt-5 rounded border border-gray-200 bg-gray-50 shadow-[0px_4px_16px_rgba(0,0,0,0.04)] max-md:max-w-full ${className}`}
    >
      <div className="flex flex-col">
        <div className="self-start text-sm font-medium tracking-normal text-zinc-500">
          {title}
        </div>
        {items.length > 0 && (
          <div className="flex gap-3 items-center mt-4 text-xs tracking-normal text-zinc-500">
            {items.map((item, index) => (
              <div
                key={index}
                className="gap-1.5 self-stretch my-auto whitespace-nowrap"
              >
                🔘 {item}
              </div>
            ))}
          </div>
        )}
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

export default CategoryItem;
