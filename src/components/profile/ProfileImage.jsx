import React from "react";
import { useCustomNavigate } from "../../functions/navigate";

function ProfileImage({ data }) {
  const navigate = useCustomNavigate();

  return (
    <div className="py-5 px-5 mt-5 bg-zinc-100 w-full max-w-[560px] rounded-lg max-md:px-3">
      <div className="flex items-center gap-4 max-md:gap-3 max-sm:flex-col max-sm:items-center max-sm:text-center">
        {/* Profile Image */}
        <div className="w-16 h-16 max-sm:w-10 max-sm:h-10 max-xs:w-5 max-xs:h-5 flex-shrink-0">
          <img
            loading="lazy"
            src={
              `${data?.image}` ||
              "https://cdn.builder.io/api/v1/image/assets/TEMP/8bee59c66a78f4a059f878bb1cf2e9b0c595c6419042035b5c5cbcbbd24be278?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            }
            className="object-cover w-full h-full rounded-full"
            alt="Profile"
          />
        </div>

        {/* User Info */}
        <div className="flex-1 text-sm font-medium text-zinc-900 min-w-0">
          <div className="break-words text-lg max-sm:text-base max-xs:text-sm">
            {data?.name}
          </div>
          <div className="mt-1 text-gray-600 break-words text-sm max-sm:text-xs max-xs:text-[11px]">
            {data?.email}
          </div>
        </div>

        {/* Edit Button (Fixed Visibility & Size) */}
        <button
          onClick={() => navigate("/profile-edit", { data })}
          className="p-2 rounded-full hover:bg-zinc-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Edit Profile"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/977b8b25580354a03b105dacc3ec5f15d877c8c43cfd8597e1b6a48966fcae88?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7"
            alt="Edit"
            className="w-12 h-12 max-sm:w-10 max-sm:h-10 max-xs:w-9 max-xs:h-9"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}

export default ProfileImage;
