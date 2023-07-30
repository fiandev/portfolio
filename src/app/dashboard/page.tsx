"use client";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data, status } = useSession();
  if (status === "unauthenticated") return void signIn("okta");

  return <div>dashboard</div>;
}
