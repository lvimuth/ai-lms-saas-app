"use client";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

function SideBar() {
  const MenuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
    {
      name: "Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
  ];
  const path = usePathname();
  return (
    <div className="h-screen shadow-md p-5">
      <div className="flex gap-10 items-center">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h2 className="font-bold text-2xl">AI LMS</h2>
      </div>
      <div className="mt-10">
        <Link href={"/create"} className="w-full">
          <Button className="w-full">+ Create New</Button>
        </Link>

        <div className="mt-5">
          {MenuList.map((menu, index) => (
            <div
              key={index}
              className={`flex gap-5 items-center p-3 hover:bg-gray-200 rounded-lg cursor-pointer mt-3 ${
                path == menu.path && "bg-gray-200"
              }`}
            >
              <menu.icon />

              <h2>{menu.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="border p-3 bg-gray-100 rounded-lg absolute bottom-10 w-[85%]">
        <h2 className="text-lg">Available Credits: 5</h2>
        <Progress value={33} />
        <h2 className="text-sm">1 out of 5 credits used</h2>
        <Link
          href={MenuList[MenuList.length - 2].path}
          className="text-primary text-xs mt-3"
        >
          Upgrade to create more
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
