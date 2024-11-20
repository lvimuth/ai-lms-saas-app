"use client";
import React, { useState } from "react";
import SelectOptions from "./_components/SelectOptions";

function Create() {
  const [step, setStep] = useState(0);
  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
      <h2 className="font-bold text-4xl text-primary">
        Start Building Your Personal Study Material
      </h2>
      <p className="text-gray-500 text-lg">
        Fill the details in order to generate study material for you
      </p>

      <div className="mt-10">{step == 0 ? <SelectOptions /> : null}</div>
    </div>
  );
}

export default Create;
