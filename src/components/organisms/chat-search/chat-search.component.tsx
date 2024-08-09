import React from "react";
import { IChatSearch } from "./types";

const ChatSearchComponent = ({}: IChatSearch) => {
  return (
    <div className="my-4">
      <input
        className="bg-primary-500 rounded-[12px] w-full outline-none py-[10px] px-[20px]"
        placeholder="Search messages"
      ></input>
    </div>
  );
};

export default ChatSearchComponent;
