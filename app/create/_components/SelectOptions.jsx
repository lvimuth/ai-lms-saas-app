import Image from "next/image";
import React, { useState } from "react";

function SelectOptions({selectedStudyType}) {
  const [selectedOption, setSelectedOption] = useState();
  const Options = [
    {
      name: "Exam",
      icon: "/exam-results.png",
    },
    {
      name: "Job Interview",
      icon: "/interview.png",
    },
    {
      name: "Practice",
      icon: "/tennis.png",
    },
    {
      name: "Coding Prep",
      icon: "/coding.png",
    },
    {
      name: "Other",
      icon: "/brain.png",
    },
  ];
  return (
    <div className="">
      <h2 className="text-center mb-2 text-lg">
        For Which you want to create your personal study material?
      </h2>
      <div className="grid grid-cols-2 mt-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {Options.map((option, index) => (
          <div
            key={index}
            className={`p-4 flex flex-col items-center justify-center border rounded-xl hover:border-primary cursor-pointer ${
              option?.name == selectedOption && "border-primary bg-blue-50"
            }`}
            onClick={() => {setSelectedOption(option?.name);selectedStudyType(option?.name)}}
          >
            <Image src={option?.icon} alt={option?.name} width={50} height={50} />
            <h2 className="text-sm mt-2">{option?.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectOptions;
