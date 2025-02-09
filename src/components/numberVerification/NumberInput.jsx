import * as React from "react";

const NumberInput = ({ value, index, onChange }) => {
  const inputRef = React.useRef();

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && value === "") {
      // Move focus to the previous input when deleting
      if (inputRef.current.previousElementSibling) {
        inputRef.current.previousElementSibling.focus();
      }
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, ""); // Allow only digits
    if (newValue.length <= 1) {
      onChange(index, newValue);

      // Move focus to the next input if valid digit entered
      if (newValue && inputRef.current.nextElementSibling) {
        inputRef.current.nextElementSibling.focus();
      }
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      maxLength="1"
      value={value}
      required
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      aria-label={`Enter verification digit ${index + 1}`}
      className="px-5 w-14 h-14 rounded border border-gray-400 border-solid bg-neutral-50 text-center text-lg"
    />
  );
};

export default NumberInput;
