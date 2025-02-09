import React from "react";

// Utility function to convert text to Camel Case
function toCamelCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function InfoSection({ title, items, emergency = false }) {
  return (
    <>
      <div className="px-5 py-4 mt-5 min-w-full text-sm font-medium tracking-normal leading-snug bg-gray-200 text-zinc-900 w-[560px]">
        {title}
      </div>
      {items.length > 0 ? (
        items.map((item, index) =>
          emergency
            ? Object.entries(item).map(([key, value]) => {
                // Skip rendering the "id" field when emergency is true
                if (key === "id") return null;
                return (
                  <div
                    key={`${index}-${key}`}
                    className="flex flex-wrap gap-5 justify-between p-5 w-full text-sm tracking-normal leading-snug bg-white border-b border-gray-200 max-w-[560px] max-md:max-w-full"
                  >
                    <div className="text-zinc-500">{toCamelCase(key)}</div>
                    <div
                      className={`${
                        value === "-- Not Provided --"
                          ? "text-gray-300"
                          : "font-medium text-zinc-900"
                      } text-right`}
                    >
                      {value}
                    </div>
                  </div>
                );
              })
            : (
              <div
                key={index}
                className="flex flex-wrap gap-5 justify-between p-5 w-full text-sm tracking-normal leading-snug bg-white border-b border-gray-200 max-w-[560px] max-md:max-w-full"
              >
                <div className="text-zinc-500">{item.label}</div>
                <div
                  className={`${
                    item.value === "-- Not Provided --"
                      ? "text-gray-300"
                      : "font-medium text-zinc-900"
                  } text-right`}
                >
                  {item.value}
                </div>
              </div>
            )
        )
      ) : (
        <div className="px-5 py-4 mt-5 min-w-full text-sm font-medium tracking-normal leading-snug text-zinc-900 w-[560px] text-center">
          No Data Available
        </div>
      )}
    </>
  );
}

export default InfoSection;
