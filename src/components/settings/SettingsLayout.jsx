import * as React from "react";
import SettingsItem from "./SettingsItem";
import { Header } from "../loginForm/Header";

const settingsItems = [
  {
    label: "Logout",
    navigate: "/",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0b5fcb3f07039e0c713c2b343706baf79a4ab8f605cb4b45e02aef3d6e3601dc?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
  },
  {
    label: "Delete Account",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0b5fcb3f07039e0c713c2b343706baf79a4ab8f605cb4b45e02aef3d6e3601dc?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
    navigate: "/delete-account",
  },
];

function SettingsLayout() {
  return (
    <div className="flex flex-col items-center w-full bg-white pb-[637px] max-md:pb-24 max-md:max-w-full">
      <Header title="Settings" />
      <div className="flex flex-col gap-5 w-full max-w-[560px] mt-5">
        {settingsItems.map((item, index) => (
          <SettingsItem
            key={index}
            label={item.label}
            iconSrc={item.iconSrc}
            url={item.navigate}
          />
        ))}
      </div>
    </div>
  );
}

export default SettingsLayout;
