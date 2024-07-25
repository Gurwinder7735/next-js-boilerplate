import { getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return <div>DashboardPage</div>;
};

export default DashboardPage;
