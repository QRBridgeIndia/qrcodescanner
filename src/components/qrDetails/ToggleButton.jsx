export function ToggleButton({ label, isChecked }) {
    return (
      <div className="flex flex-wrap gap-5 justify-between p-5 bg-white border-t border-b border-gray-200 max-md:max-w-full">
        <label className="my-auto text-sm font-medium tracking-normal leading-snug text-zinc-900">
          {label}
        </label>
        <div
          role="switch"
          aria-checked={isChecked}
          className={`flex w-12 h-6 items-center px-1.5 rounded-3xl ${isChecked ? "bg-indigo-500" : "bg-gray-300"}`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
              isChecked ? "translate-x-6" : ""
            }`}
          />
        </div>
      </div>
    );
  }
  