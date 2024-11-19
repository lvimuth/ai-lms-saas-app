"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

function DashboardHeader() {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="flex justify-between p-5 shadow-md">
      {user && <span className="text-gray-600">Welcome, {user?.fullName}</span>}
      <UserButton />
    </div>
  );
}

export default DashboardHeader;
