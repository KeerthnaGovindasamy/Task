/* 
This component creates a layout integrating all the three components (Component1, Component2, Component3)
*/

import React from "react";
import Assessment from "./Assessment";
import Attendance from "./Attendance";
import CourseDetails from "./CourseDetails";
import StudentCourseDetails from "./StudentCourseDetails";

const MainLyout = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <CourseDetails />
      <div className="flex-1 lg:ml-72 lg:pl-7">
        <div className="flex flex-col gap-5">
          <StudentCourseDetails />
          <Assessment />
          <Attendance />
        </div>
      </div>
    </div>
  );
};

export default MainLyout;
