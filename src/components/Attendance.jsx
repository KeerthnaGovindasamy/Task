/* 
Component 3
Used Line component from react-chartjs-2 library to create line graph. 
This line graph represents students' attendance percentage on weekly basis
*/

import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import studentsAttendanceData from "../data/studentsAttendanceData.json";

Chart.register(CategoryScale);

const Attendance = () => {
  return (
    <div>
      <p className="font-bold text-xl pb-2">Student's Attendance</p>
      <div className="border border-gray-300 rounded-lg p-3 h-72 w-[calc(100vw-18%)] sm:w-[calc(100vw-12%)] md:w-[calc(100vw-9%)] lg:w-[calc(100vw-60%)] xl:w-[calc(100vw-42%)] laptopL:w-[calc(100vw-38%)]">
        <Line
          data={{
            labels: studentsAttendanceData.map((data) => data.label),
            datasets: [
              {
                data: studentsAttendanceData
                  .slice(0, 15)
                  .map((data) => data.attendancePercentage),

                borderColor: "#9333ea",
                borderWidth: 1,
                pointBorderColor: "black",
                pointBackgroundColor: "black",
                pointRadius: 3,
              },
              // For creating dotted line representation from week 30/9 to 14/10
              {
                data: new Array(14)
                  .fill(null)
                  .concat(
                    studentsAttendanceData
                      .slice(14)
                      .map((data) => data.attendancePercentage)
                  ),
                borderDash: [4, 8.5], // creates dotted line
                borderColor: "#9333ea",
                borderWidth: 1,
                pointBorderColor: "black",
                pointBackgroundColor: "black",
                pointRadius: 0,
              },
            ],
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
                title: {
                  display: true,
                  text: "Weeks",
                  color: "black",
                },
                ticks: {
                  color: "black",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Attendance",
                  color: "black",
                },
                min: 0,
                max: 100,
                ticks: {
                  color: "black",
                  stepSize: 25, //customises step count
                  callback: function (value) {
                    return value + "%";
                  },
                },
                grid: {
                  display: false, //to remove horizontal lines in graph
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Attendance;
