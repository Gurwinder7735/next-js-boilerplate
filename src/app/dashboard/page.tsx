import { getServerSession } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import CustomButton from "@/components/atoms/custom-button";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  console.log(session, "session>>");

  return (
    <div>
      DashboardPage
      <CustomButton />
    </div>
  );
};

export default DashboardPage;
