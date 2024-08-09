"use client";
import React from "react";
import { IMainSidebar } from "./types";
import { AiOutlineLogout, AiOutlineMessage } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import Image from "next/image";
import { signOut } from "next-auth/react";

const MainSidebarComponent = ({}: IMainSidebar) => {
  return (
    <div className=" h-full w-[88px] flex flex-col justify-between px-4 py-4 shadow-custom">
      <div className="flex flex-col gap-y-12">
        <div className="flex justify-center">
          <Image
            src={
              "https://lh3.googleusercontent.com/a/ACg8ocJ_TOyMmm-DXglzGjOPDsRHQ7B0jhCMG_BefWnszlNRiQznzQ=s96-c"
            }
            height={56}
            width={56}
            alt="profile"
            className="rounded-[14px]"
          />
        </div>
        <ul className="flex flex-col justify-center items-center">
          <li>
            <button className="p-4 transition-all duration-200 hover:bg-primary-300 rounded-md">
              <AiOutlineHome className="text-[24px]" />
            </button>
          </li>
          <li>
            <button className=" p-4 transition-all duration-200 hover:bg-primary-300  rounded-md">
              <AiOutlineMessage className="text-[24px]" />
            </button>
          </li>
        </ul>
      </div>
      <button
        className="flex justify-center p-4 transition-all duration-200 hover:bg-primary-300  rounded-md"
        onClick={() => {
          signOut();
        }}
      >
        <AiOutlineLogout className="text-[24px]" />
      </button>
    </div>
  );
};

export default MainSidebarComponent;
