import * as React from "react";
import QrFeatureCard from "./QrFeatureCard";
import scan from "../../assets/Frame 1971.svg";
import { useCustomNavigate } from "../../functions/navigate";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/74706c72ba4284636b58b4618db7d65dd6c18869bfd073b648bcbd6c80eaf00e?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
    text: "Activate New QR Code",
    bgColor: "#D3FCD2",
    textColor: "text-green-600",
    navigate: "/register",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aeb5bca2f24022b99ed5ed789ed9da5284b11a18965ed149c96c7ca556ed8519?placeholderIfAbsent=true&apiKey=877e8cc34e814577be2645c5cab8e8b7",
    text: "Manage QR Codes",
    bgColor: "#FEF5CC",
    textColor: "text-yellow-500",
    navigate: "/qr-manager",
  },
];

function QrDashboard() {
  const navigate = useCustomNavigate();
  return (
    <div className="flex flex-col px-5 pt-5 w-full pb-[538px] max-md:pb-24 max-md:max-w-full">
      <div
      style={{
        background: "#DFF2FF",
      }}
      className={`flex flex-col justify-center items-center px-16 py-4 w-full text-sm font-medium tracking-normal leading-snug text-blue-900 bg-[#DFF2FF] rounded max-md:px-5 max-md:max-w-full mb-5`}
      onClick={() => navigate('/scan-qr')}
      role="button"
      tabIndex={0}
    >
      <div className="flex gap-6 max-w-full w-[171px]">
        <img
          loading="lazy"
          src={scan}
          alt="Scan Old QR Code"
          className="object-contain w-8 md:w-8 aspect-square"
        />
        <div className="grow shrink my-auto">Scan QR Code</div>
      </div>
    </div>
      {features.map((feature, index) => (
        <div key={feature.text} className={index > 0 ? "mt-5" : ""}>
          <QrFeatureCard
            icon={feature.icon}
            text={feature.text}
            bgColor={feature.bgColor}
            textColor={feature.textColor}
            url = {feature.navigate}
          />
        </div>
      ))}
    </div>
  );
}

export default QrDashboard;