import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Button>Start</Button>
      <UserButton />
    </div>
  );
}
