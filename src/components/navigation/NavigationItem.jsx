import * as React from "react";
import { useCustomNavigate } from "../../functions/navigate";

export const NavigationItem = ({ icon, label, url }) => {
  const navigate = useCustomNavigate();
  return (
    <div
      onClick={() => navigate(url)}
      className="flex flex-col items-center text-xs whitespace-nowrap text-zinc-500"
    >
      <img
        loading="lazy"
        src={icon}
        alt={`${label} navigation icon`}
        className="object-contain w-6 aspect-square"
      />
      <div className="mt-3">{label}</div>
    </div>
  );
};
