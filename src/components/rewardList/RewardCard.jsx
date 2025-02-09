import * as React from "react";

const RewardCard = ({ reward, note }) => {
  return (
    <div className="flex flex-col items-center py-5 w-full rounded border border-gray-200 border-solid bg-neutral-50 shadow-[0px_4px_16px_rgba(0,0,0,0.04)] max-md:max-w-full">
      <div className="flex gap-3 max-w-full w-[101px]">
        <div className="my-auto text-xs tracking-tight leading-relaxed text-zinc-500">
          Reward
        </div>
        <div className="text-lg tracking-normal leading-snug text-ellipsis text-zinc-900">
          ₹ {reward}
        </div>
      </div>
      <div className="flex shrink-0 self-stretch mt-5 h-1 bg-gray-200 max-md:max-w-full" />
      <div className="mt-5 text-xs tracking-tight leading-relaxed text-zinc-500">
        Note
      </div>
      <div className="mt-3 text-sm tracking-normal leading-snug text-ellipsis text-zinc-900">
        {note}
      </div>
    </div>
  );
};

export default RewardCard;
