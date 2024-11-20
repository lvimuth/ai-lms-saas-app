import { courseOutlineAIModel } from "@/configs/AIModels";
import { db } from "@/configs/db";
import { STUDY_MATERIAL } from "@/configs/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { courseId, topic, courseType, difficultyLevel, createdBy } =
    await req.json();

  const PROMPT = `Generate a study material for ${topic} for ${courseType} and level of difficulty will be ${difficultyLevel} with summary of course, List of Chapters along with summery  for each chapter, Topic list in each chapter and all result in JSON format`;

  // Generate the course Layout
  const aiResponse = await courseOutlineAIModel.sendMessage(PROMPT);
  const aiResult = JSON.parse(aiResponse.response.text());

  // Save the result along with user input
  const dbResult = await db
    .insert(STUDY_MATERIAL)
    .values({
      courseId: courseId,
      courseType: courseType,
      createdBy: createdBy,
      topic: topic,
      difficultyLevel: difficultyLevel,
      courseLayout: aiResult,
    })
    .returning({ resp:STUDY_MATERIAL });

  console.log(dbResult);
  return NextResponse.json({ result: dbResult[0] });
}
