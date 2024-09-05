//Component 1

import React from "react";
import BasicDetail from "./BasicDetail";
import courseDetails from "../data/courseDetails.json";

const CourseDetails = () => {
  const credits =
    courseDetails.credits.lecture +
    courseDetails.credits.tutorial +
    courseDetails.credits.practical +
    courseDetails.credits.project;
  return (
    <div className="border-[1.5px] border-gray-300 rounded-lg p-4 lg:fixed lg:w-72 lg:overflow-auto scrollable-container lg:h-[calc(100vh-9%)] bg-white">
      <BasicDetail title="Course Code" value={courseDetails.courseCode} />
      <BasicDetail title="Course Name" value={courseDetails.courseName} />
      <BasicDetail title="Course Type" value={courseDetails.courseType} />
      <BasicDetail title="Course Period" value={courseDetails.coursePeriod} />
      <div className="border-b border-gray-300 mb-3 text-left">
        <p className="pb-1 font-bold">Credits ({credits})</p>
        <p className="pb-2">
          Lecture -{" "}
          <span className="font-bold">{courseDetails.credits.lecture}</span>
        </p>
        <p className="pb-2">
          Tutorial -{" "}
          <span className="font-bold">{courseDetails.credits.tutorial}</span>
        </p>
        <p className="pb-2">
          Practical -{" "}
          <span className="font-bold">{courseDetails.credits.practical}</span>
        </p>
        <p className="pb-2">
          Project -{" "}
          <span className="font-bold">{courseDetails.credits.project}</span>
        </p>
      </div>
      <div className="border-b border-gray-300 mb-3 text-left">
        <p className="pb-2 font-bold">Course Outcomes (COs)</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 gap-3 pb-2">
          {courseDetails.courseOutcomes.map((outcome, index) => {
            return (
              <div key={index}>
                <p
                  className={`p-1 text-sm rounded-md font-semibold bg-[#91B07C] text-center`}
                >
                  {outcome}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-left">
        <p className="pb-2 font-bold">Mapped to this course</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-3 gap-3">
          {courseDetails.mappedTo.map((data, index) => {
            return (
              <div key={index}>
                <p
                  className={`p-1 text-sm rounded-md font-semibold bg-[#2E6995] text-white text-center`}
                >
                  {data}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
