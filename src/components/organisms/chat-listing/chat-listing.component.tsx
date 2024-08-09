import React from "react";
import { IChatListing } from "./types";
import { AiFillPlusCircle } from "react-icons/ai";
import ChatSearch from "../chat-search";
import ChatItem from "../chat-item";

const ChatListingComponent = ({}: IChatListing) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between py-[29px] items-center border-b px-6">
        <h3 className="flex justify-between items-center gap-2">
          <span className="font-bold">Messages </span>
          <div className="flex items-center">
            <span className="px-2 py-1 bg-gray-200 rounded-[11px] text-[12px] font-bold">
              12
            </span>
          </div>
        </h3>
        <button>
          <AiFillPlusCircle className="text-primary-400 text-[40px]" />
        </button>
      </div>
      <div>
        {/* <ChatSearch /> */}
        <div>
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </div>
      </div>
    </div>
  );
};

export default ChatListingComponent;
