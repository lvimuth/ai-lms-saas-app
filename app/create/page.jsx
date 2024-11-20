"use client";
import React, { useEffect, useState } from "react";
import SelectOptions from "./_components/SelectOptions";
import { Button } from "@/components/ui/button";
import TopicInput from "./_components/TopicInput";

function Create() {
  const [step, setStep] = useState(0);
    const handleUserInput = (fieldName, fieldValue) => {
      
  }
  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
      <h2 className="font-bold text-4xl text-primary">
        Start Building Your Personal Study Material
      </h2>
      <p className="text-gray-500 text-lg">
        Fill the details in order to generate study material for you
      </p>

      <div className="mt-10">
        {step == 0 ? <SelectOptions /> : step == 1 ? <TopicInput /> : null}
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
          <Button>Generate</Button>
        )}
      </div>
    </div>
  );
}

export default Create;
