"use client";

import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    user && CheckIsNewUser();
  }, [user]);

  const CheckIsNewUser = async () => {
    // Check if the user already exists
    // const result = await db
    //   .select()
    //   .from(USER_TABLE)
    //   .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
    // // If not then create a new
    // if (result.length == 0) {
    //   const userResp = await db
    //     .insert(USER_TABLE)
    //     .values({
    //       name: user?.fullName,
    //       email: user?.primaryEmailAddress?.emailAddress,
    //     })
    //     .returning({ id: USER_TABLE.id });
    //   console.log("New user created with ID:", userResp);
    // }

    const resp = await axios.post("/api/create-user", { user: user });
    console.log(resp.data);
  };

  const GenerateNotes = async () => {
    // const Chapters = course?.courseLayout?.chapters;
    // let index = 0;
    // Chapters.forEach(async (chapter) => {
    //   const PROMPT = `Generate exam material detail content for each chapter , Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTML , Head, Body, title tag), The chapters : ${JSON.stringify(
    //     chapter
    //   )}}`;
    //   const result = await generateNotesAIModel.sendMessage(PROMPT);
    //   const aiResp = result?.response.text();
    //   await db.insert(CHAPTER_NOTES).values({
    //     chapterId: index,
    //     courseId: course?.courseId,
    //     notes: aiResp,
    //   });
    //   index = index + 1;
    // });
  };

  return <div>{children}</div>;
}

export default Provider;
