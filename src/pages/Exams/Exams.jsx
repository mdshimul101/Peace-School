/* eslint-disable no-unused-vars */
import React from "react";

const Exams = () => {
  const exams = [
    {
      id: 1,
      subject: "Mathematics",
      date: "2024-01-15",
      time: "10:00 AM - 12:00 PM",
      venue: "Room 101",
    },
    {
      id: 2,
      subject: "English",
      date: "2024-01-16",
      time: "1:00 PM - 3:00 PM",
      venue: "Room 102",
    },
    {
      id: 3,
      subject: "Science",
      date: "2024-01-17",
      time: "9:00 AM - 11:00 AM",
      venue: "Room 103",
    },
  ];

  return (
    <div className="flex justify-center items-center  bg-gray-100 ">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">Upcoming Exams</h2>
        <div className="space-y-4">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-pink-300 to-pink-500 text-white p-4 rounded-lg shadow-md"
            >
              <div>
                <h3 className="text-lg font-bold">{exam.subject}</h3>
                <p className="text-sm">
                  Date: <span className="font-medium">{exam.date}</span>
                </p>
                <p className="text-sm">
                  Time: <span className="font-medium">{exam.time}</span>
                </p>
                <p className="text-sm">
                  Venue: <span className="font-medium">{exam.venue}</span>
                </p>
              </div>
              <button className="mt-4 md:mt-0 bg-white text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exams;
