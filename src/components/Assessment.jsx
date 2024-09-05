/* 
Component 2
Used Bar component from react-chartjs-2 library to create bar graph. 
Bar graph is created with json data.
JSON data is made with the following understanding:
*There are 5 categories of assessment - Assignment, Quiz, Presentation, Lab, Viva
*Each category has multiple number of asssessments which is of two types - completed, pending.
*/

import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import assessmentData from "../data/assessmentProgressData.json";

Chart.register(CategoryScale);

const Assessment = () => {
  return (
    <div>
      <p className="font-bold text-xl pb-2">Assessment Progress</p>
      <div className="border border-gray-300 rounded-lg px-5 pt-4 pb-8 h-[22rem] w-[calc(100vw-18%)] sm:w-[calc(100vw-12%)] md:w-[calc(100vw-9%)] lg:w-[calc(100vw-60%)] xl:w-[calc(100vw-42%)] laptopL:w-[calc(100vw-38%)]">
        <div className=" flex gap-4 justify-center pb-1">
          <div className="flex gap-3 text-sm items-center">
            <div className={`w-5 h-3 bg-[#E8E8E8]`}></div>
            <p>Pending</p>
          </div>
          <div className="flex gap-3 text-sm items-center">
            <div className={`w-5 h-3 bg-[#91B07C]`}></div>
            <p>Completed</p>
          </div>
        </div>
        {/* Bar graph representation based on JSON data */}
        <Bar
          data={{
            labels: assessmentData.assessmentCategory,
            datasets: assessmentData.assessmentDetails.map((assessment, i) => {
              return {
                data: assessment.assessmentStatus.map(
                  (data, i) => data?.percentage
                ),
                backgroundColor: assessment?.assessmentStatus?.map((data, i) =>
                  data?.status === "completed" ? "#91B07C" : "#E8E8E8"
                ),
                barPercentage: 0.8,
                categoryPercentage: 0.9,
              };
            }),
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false, //to remove labels being displayed at top by default
              },
            },
            scales: {
              x: {
                ticks: {
                  color: "black",
                },
              },
              y: {
                min: 0,
                max: 100,
                ticks: {
                  color: "black",
                  stepSize: 25, //customises step count
                  callback: function (value) {
                    return value + "%";
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Assessment;
