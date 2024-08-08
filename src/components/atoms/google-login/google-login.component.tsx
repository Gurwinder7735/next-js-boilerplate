import React from "react";
import { IGoogleLogin } from "./types";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const GoogleLoginComponent = ({}: IGoogleLogin) => {
  return (
    <button
      className="justify-center text-[16px] font-medium leading-[1.2] py-[18px] border border-primary-100 w-full rounded-md flex gap-x-4 items-center"
      onClick={() => {
        signIn("google");
      }}
    >
      <FcGoogle className="text-[30px]" />
      Continue with Google
    </button>
  );
};

export default GoogleLoginComponent;
