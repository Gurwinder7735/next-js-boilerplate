"use client";

import { userSelector } from "@/store/features/auth/selectors";
import { useAppSelector } from "@/store/hook";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const session = useSession();

  return <main className="">Welcome</main>;
}
