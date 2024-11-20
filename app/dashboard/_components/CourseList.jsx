"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect } from "react";

function CourseList() {
  const { user } = useUser();

  useEffect(() => {
    user && GetCourseList();
  }, [user]);
  const GetCourseList = async () => {
    const result = await axios.post("api/courses", {
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });
    console.log(result);
  };
  return <div>CourseList</div>;
}

export default CourseList;
