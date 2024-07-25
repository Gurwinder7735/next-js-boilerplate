"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  const session = useSession();

  console.log(session, "sesion");

  return (
    <div>
      LoginPage
      <button
        onClick={() => {
          signIn("google");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
