import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

import MainSidebar from "@/components/organisms/main-sidebar";
import ChatListing from "@/components/organisms/chat-listing";
import ChatMainArea from "@/components/organisms/chat-main-area";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  console.log(session, "session>>");

  return (
    <div className="h-screen flex">
      <MainSidebar />
      <div className="bg-red-400f w-[calc(100vw-88px)] h-full flex">
        <div className="w-[317px] h-full  border-r">
          <ChatListing />
        </div>
        {/* <div className="bg-red-500 w-[calc(100vw-404px)] h-full"> */}
        <div className="bg-red-5000 w-[calc(100%-317px)] h-full flex flex-col justify-between">
          <ChatMainArea />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
