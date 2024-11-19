import Image from "next/image";
import React from "react";
// import { HiMiniXMark } from "react-icons/hi2";

function SideBar() {
  return (
    <div className="h-screen shadow-md">
      <div>
        <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
      </div>
    </div>
  );
}

export default SideBar;
