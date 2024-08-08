"use client";

import GoogleLogin from "@/components/atoms/google-login";
import { useSession } from "next-auth/react";
import { permanentRedirect } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const session = useSession();

  console.log(session, "session");

  if (session?.data) {
    permanentRedirect("/dashboard");
  }
  console.log(session, "sesion");

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 py-[119px] px-12 md:px-24 lg:px-[144px] gap-x-[190px]">
      <div className="hidden lg:block col-span-1 overflow-hidden">
        {/* <div className=""> */}
        <img
          className="h-full w-full object-contain"
          src="/assets/images/cover.png"
          // width={487}
          // height={445}
          // objectFit="cover"
          alt="Promotion"
          loading="eager"
        />
        {/* </div> */}
      </div>
      <div className="col-span-1 flex items-center">
        <div className="text-center flex flex-col gap-y-10 items-center w-full">
          <div className="flex flex-col gap-y-3">
            <h1 className="text-[39px] font-semibold leading-[1.2] tracking-[-0.78px]">
              Welcome Back
            </h1>
            <p className="text-primary-100 w-[273px] text-center">
              We've missed you! Please sign in to catch up on what you've missed
            </p>
          </div>
          <div className="w-full flex justify-center">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
