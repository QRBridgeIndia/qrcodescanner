import * as React from "react";
import { NavigationItem } from "./NavigationItem";
import { useLocation } from "react-router-dom";

const navigationItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d03d737099abaf88752791493345cea829a02710f63f3c97b495904b7189dd82?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
    label: "Home",
    navigate: "/dashboard",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/17c96a9222a817bd2e76794ee82e5cb8bf21e222de3f3a3c4716420bd5cfc001?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
    label: "Shop",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbf5c8f996e7c3751f6f4ac54e35ca49210f38def1197ebca31fef4a22fc2ef9?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
    label: "Profile",
    navigate: "/profile",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0ed5a90ba939cb875d39e1707d449c1ebfaba06239453b7f20e802c4e7d3f19?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
    label: "Settings",
    navigate: "/settings",
  },
];

export function Navigation() {
  const location = useLocation();
  return (
    <div className="flex flex-col px-5 mb-2 w-full bg-white rounded-md border border-2 shadow-2xl max-md:max-w-full max-w-screen-lg bg-gray-100">
      <div className="flex gap-10 items-center w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between self-stretch px-5 py-3.5 w-full">
          {navigationItems.map((item, index) => (
            <NavigationItem
              key={index}
              icon={item.icon}
              label={item.label}
              url={item.navigate}
              isActive={location.pathname === item.navigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

