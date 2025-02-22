import React from "react";
import { InputField } from "./InputField";

export function EmergencyContact({
  contacts,
  onInputChange,
  }) {
  // Predefined list of relationship options
  const relationships = [
    "Father", "Mother", "Brother", "Sister", "Spouse", "Friend", "Colleague", "Other"
  ];

  return (
    <>
      <div className="px-5 py-4 mt-5 bg-gray-200 text-zinc-900 max-md:max-w-full">
        Emergency Contacts
      </div>
      {contacts && contacts.map((contact, index) => (
        <div key={index} className="mb-4 border p-4 rounded ">
          {/* Emergency Contact Fields */}
          <InputField
            label="Name"
            value={contact.name}
            type="text"
            onChange={(e) => onInputChange(index, "name", e.target.value)}
          />
          <InputField
            label="Phone No"
            value={contact.phone}
            type="tel"
            onChange={(e) => onInputChange(index, "phone", e.target.value)}
          />
          
          {/* Relationship dropdown */}
          <div className="my-4">
            <label htmlFor={`relationship-${index}`} className="block text-sm font-medium text-gray-600">
              Relationship
            </label>
            <select
              id={`relationship-${index}`}
              value={contact.relationship}
              onChange={(e) => onInputChange(index, "relationship", e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Relationship</option>
              {relationships.map((relationship, idx) => (
                <option key={idx} value={relationship}>
                  {relationship}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </>
  );
}
