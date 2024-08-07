"use client";
import { signIn, useSession } from "next-auth/react";
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
