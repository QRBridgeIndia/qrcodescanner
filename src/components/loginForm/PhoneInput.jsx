import React, { forwardRef, useState } from "react";

export const PhoneInput = forwardRef((props, ref) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  return (
    <div className="w-full">
      <label 
        htmlFor="phone" 
        className="block text-xs text-zinc-500 tracking-tight leading-relaxed mb-2"
      >
        Mobile Number
      </label>
      <div className="flex items-center gap-3.5 px-3.5 py-4 rounded border border-gray-200 bg-neutral-50 focus-within:ring-2 focus-within:ring-sky-500 focus-within:border-transparent">
        <span 
          className="text-gray-400 text-sm font-medium" 
          aria-hidden="true"
        >
          +91
        </span>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phoneNumber}
          onChange={handlePhoneChange}
          ref={ref}
          className="flex-1 bg-transparent border-none outline-none text-sm text-zinc-900 placeholder-gray-400"
          placeholder="Enter your mobile number"
          pattern="[0-9]{10}"
          maxLength="10"
          required
          aria-label="Phone number"
        />
      </div>
    </div>
  );
});
