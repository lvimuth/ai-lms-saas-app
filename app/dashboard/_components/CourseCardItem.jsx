import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RefreshCw } from "lucide-react";
import Image from "next/image";
import React from "react";

function CourseCardItem({ course }) {
  return (
    <div className="border shadow-sm rounded-lg p-4">
      <div>
        <div className="flex justify-between items-center">
          <Image src={"/graduation.png"} alt="other" width={50} height={50} />
          <h2 className="text-[10px] rounded-full p-1 px-2 bg-blue-100 ">
            date
          </h2>
        </div>
        <h2>{course?.courseLayout?.courseTitle}</h2>
        <div className="w-ful flex justify-end mb-1">
          <div className=" bg-blue-100 flex rounded-xl w-fit justify-end">
            <h2 className="p-2 py-1 text-xs">{course?.topic}</h2>
          </div>
        </div>

        <p className="text-xs line-clamp-2 text-gray-500">
          {course?.courseLayout?.courseSummary}
        </p>

        <div className="mt-3">
          <Progress value={10} />
        </div>
        <div className="mt-3 flex justify-end">
          {course?.status == "generating" ? (
            <h2 className="text-[12px] p-1 flex items-center gap-2 px-2 rounded-full bg-gray-500 text-white">
              <RefreshCw className="h-3 w-3" /> Generating...
            </h2>
          ) : (
            <Button>View</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCardItem;
