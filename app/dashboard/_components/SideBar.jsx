import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
// import { HiMiniXMark } from "react-icons/hi2";

function SideBar() {
  return (
    <div className="h-screen shadow-md p-5">
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h2 className="font-bold text-2xl">Easy Study</h2>
      </div>
      <div className="mt-10">
        <Button className="w-full">+ Create New</Button>
      </div>
    </div>
  );
}

export default SideBar;
