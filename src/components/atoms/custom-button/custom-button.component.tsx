"use client";
import React from "react";
import { ICustomButton } from "./types";
import { signOut } from "next-auth/react";

const CustomButtonComponent = ({}: ICustomButton) => {
  return (
    <>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
};

export default CustomButtonComponent;
