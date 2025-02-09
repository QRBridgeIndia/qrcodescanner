import React from "react";
import { InputField } from "./InputField";

export function AddressSection({ data, onInputChange }) {
  const addressFields = [
    { label: "Address", value: data.address, type: "text", field: "address" },
    { label: "City", value: data.city, type: "text", field: "city" },
    { label: "State", value: data.state, type: "text", field: "state" },
    { label: "Zip / Pincode", value: data.pincode, type: "text", field: "pincode" },
  ];

  return (
    <div className="mt-5">
      <div className="px-5 py-4 whitespace-nowrap bg-gray-200 text-zinc-900 max-md:max-w-full">
        Address
      </div>
      {addressFields.map((field, index) => (
        <InputField
          key={index}
          label={field.label}
          value={field.value}
          type={field.type}
          onChange={(e) => onInputChange(field.field, e.target.value)}
        />
      ))}
    </div>
  );
}
