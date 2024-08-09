import React from "react";
import { IChatItem } from "./types";
import Image from "next/image";

const ChatItemComponent = ({}: IChatItem) => {
  return (
    <div className="flex gap-x-4 w-full p-3 transition-all duration-200 hover:bg-primary-300 cursor-pointer rounded-md">
      <Image
        src={
          "https://lh3.googleusercontent.com/a/ACg8ocJ_TOyMmm-DXglzGjOPDsRHQ7B0jhCMG_BefWnszlNRiQznzQ=s96-c"
        }
        height={48}
        width={48}
        alt="Profile"
        className="rounded-xl"
      />
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <span className="text-[14px] font-semibold leading-[1.5]">
            Gurwinder Singh
          </span>
          <span className="text-[12px] font-bold leading-3 text-gray-500">
            12m
          </span>
        </div>
        <span className="text-[12px] font-bold leading-3 text-gray-500">
          Haha oh man
        </span>
      </div>
    </div>
  );
};

export default ChatItemComponent;
