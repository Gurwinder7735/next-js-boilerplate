import React from "react";
import { IChatBubble } from "./types";
import Image from "next/image";

const ChatBubbleComponent = ({ reverse }: IChatBubble) => {
  return (
    <div
      className={`flex gap-x-4 ${
        reverse ? "flex-row-reverse  mb-[30px]" : "mb-[10px]"
      }`}
    >
      <div className="flex-shrink-0">
        <Image
          src={
            "https://lh3.googleusercontent.com/a/ACg8ocJ_TOyMmm-DXglzGjOPDsRHQ7B0jhCMG_BefWnszlNRiQznzQ=s96-c"
          }
          height={44}
          width={44}
          alt="Profile"
          className="rounded-xl flex-shrink-0"
        />
      </div>

      <span
        className={`${
          reverse ? "bg-primary-400 text-white" : "bg-primary-700"
        } rounded-xl px-4 py-2`}
      >
        omg, this is amazing omg, this is amazing omg, this is amazing omg
      </span>
    </div>
  );
};

export default ChatBubbleComponent;
