"use client";
import React, { useEffect, useState } from "react";
import SelectOptions from "./_components/SelectOptions";
import { Button } from "@/components/ui/button";
import TopicInput from "./_components/TopicInput";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

function Create() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Used to save user input and Generate AI course Layout
  const GenerateCourseOutline = async () => {
    const courseId = uuidv4();
    setLoading(true);
    const result = await axios.post("/api/generate-course-outline", {
      courseId: courseId,
      ...formData,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });
    setLoading(false);
    router.push("/dashboard");

    console.log(result.data.result.resp);
  };

  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
      <h2 className="font-bold text-4xl text-primary">
        Start Building Your Personal Study Material
      </h2>
      <p className="text-gray-500 text-lg">
        Fill the details in order to generate study material for you
      </p>

      <div className="mt-10">
        {step == 0 ? (
          <SelectOptions
            selectedStudyType={(value) => handleUserInput("courseType", value)}
          />
        ) : step == 1 ? (
          <TopicInput
            setTopic={(value) => handleUserInput("topic", value)}
            setDifficultyLevel={(value) =>
              handleUserInput("difficultyLevel", value)
            }
          />
        ) : null}
      </div>
      <div className="flex justify-between w-full mt-20">
        {step != 0 ? (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            Previous
          </Button>
        ) : (
          <div></div>
        )}
        {step == 0 ? (
          <Button onClick={() => setStep(step + 1)}>Next</Button>
        ) : (
          <Button onClick={GenerateCourseOutline} disabled={loading}>
            {loading ? <Loader className="animate-spin" /> : "Generate"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Create;
