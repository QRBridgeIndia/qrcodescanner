import React from "react";
import { InputField } from "./InputField";

export function PersonalInfo({ data, onInputChange }) {
  const personalFields = [
    { label: "Name", value: data.name, type: "text", field: "name" },
    { label: "Date of Birth", value: data.dob, type: "date", field: "dob" },
    { label: "Blood Group", value: data.blood_group, type: "dropdown", field: "blood_group" },
  ];

  const bloodGroups = [
    "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"
  ];

  return (
    <div>
      <div className="px-5 py-4 bg-gray-200 text-zinc-900 max-md:max-w-full">
        Personal Information
      </div>
      {personalFields.map((field, index) => {
        if (field.type === "date") {
          // Date input for DOB
          return (
            <div key={index} className="my-4">
              <label htmlFor={field.field} className="block text-sm font-medium text-zinc-700">
                {field.label}
              </label>
              <input
                type="date"
                id={field.field}
                value={data.dob}
                onChange={(e) => onInputChange(field.field, e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          );
        } else if (field.type === "dropdown") {
          // Dropdown for Blood Group
          return (
            <div key={index} className="my-4">
              <label htmlFor={field.field} className="block text-sm font-medium text-zinc-700">
                {field.label}
              </label>
              <select
                id={field.field}
                value={data.blood_group}
                onChange={(e) => onInputChange(field.field, e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select Blood Group</option>
                {bloodGroups.map((group, idx) => (
                  <option key={idx} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>
          );
        } else {
          // Default text input for Name
          return (
            <InputField
              key={index}
              label={field.label}
              value={field.value}
              type={field.type}
              onChange={(e) => onInputChange(field.field, e.target.value)}
            />
          );
        }
      })}
    </div>
  );
}
