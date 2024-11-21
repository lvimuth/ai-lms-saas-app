import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("Received a POST request to create a new user");
  const { user } = await req.json();
  const result = await inngest.send({
    name: "user.create",
    data: {
      user: user,
    },
  });
  // console.log("Created new user:", result);
  return NextResponse.json({ result: result });
}
