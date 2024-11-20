import Image from "next/image";
import React from "react";

function CourseCardItem({ course }) {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <Image src={"/graduation.png"} alt="other" width={50} height={50} />
          <h2 className="text-[10px] rounded-full p-1 px-2">date</h2>
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
      </div>
    </div>
  );
}

export default CourseCardItem;
