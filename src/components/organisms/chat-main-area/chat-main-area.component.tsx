import React from "react";
import { IChatMainArea } from "./types";
import Image from "next/image";
import { IoMdAttach } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import ChatBubble from "@/components/molecules/chat-bubble";

const ChatMainAreaComponent = ({}: IChatMainArea) => {
  return (
    <>
      <div className="flex justify-between p-6 items-center ">
        <div className="flex gap-x-2 items-center">
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
            </div>
            <span className="text-[12px] font-bold leading-3 text-gray-500">
              online
            </span>
          </div>
        </div>
        <div>
          <button className="bg-primary-600 text-primary-400 rounded-lg py-[10px] px-6">
            Call
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-start h-[calc(100%-176px)] overflow-y-auto px-6">
        <ChatBubble reverse={true} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={true} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={true} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={true} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={true} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={false} />
        <ChatBubble reverse={true} />
        <ChatBubble reverse={false} />
      </div>
      <div className="px-6 flex items-center py-4">
        <button className="p-4">
          <IoMdAttach className="text-primary-400" />
        </button>
        <div className="w-full relative">
          <textarea
            rows={1}
            className="border border-primary-500 rounded-[12px] w-full outline-none py-[10px] px-[20px] pr-10"
            placeholder="Type a message"
          ></textarea>
          <button className="absolute right-4 top-[14px]">
            <BsFillSendFill className="text-primary-400" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatMainAreaComponent;
