import React from "react";
import Card from "./Card";

const StudentCourseDetails = () => {
  return (
    <div className="flex flex-col mobileM:flex-row gap-3">
      <Card label="Total Students" value="102" />
      <Card label="Course Average Mark" value="85%" />
    </div>
  );
};

export default StudentCourseDetails;
