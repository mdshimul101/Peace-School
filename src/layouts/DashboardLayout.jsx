/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaBars, FaHome, FaSignOutAlt } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

import { PiExamFill } from "react-icons/pi";

import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("Select Class");
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path) => location.pathname === path;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClassSelect = (className) => {
    setSelectedClass(className);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-300 to-purple-300 text-white p-4 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold text-gray-100 ml-10">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-white tracking-wide hover:text-pink-500 transition-colors duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Peace School
          </Link>
        </div>
        <div className="md:hidden">
          {isSidebarOpen ? (
            <button className="btn btn-secondary" onClick={toggleSidebar}>
              <RxCross2 />
            </button>
          ) : (
            <button className="btn btn-secondary" onClick={toggleSidebar}>
              <FaBars />
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-pink-500 text-white w-64 p-6 md:p-10 fixed bottom-0 top-20 md:top-0 left-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-50`}
        >
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-2 p-2 rounded-md ${
                    isActive("/dashboard")
                      ? "bg-white text-gray-800"
                      : "hover:bg-white hover:text-gray-800"
                  }`}
                >
                  <FaHome className="text-lg" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/teacher"
                  className={`flex items-center space-x-2 p-2 rounded-md ${
                    isActive("/dashboard/teacher")
                      ? "bg-white text-gray-800"
                      : "hover:bg-white hover:text-gray-800"
                  }`}
                >
                  <GiTeacher className="text-lg" />
                  <span>Teacher</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/admission-form"
                  className={`flex items-center space-x-2 p-2 rounded-md ${
                    isActive("/dashboard/admission-form")
                      ? "bg-white text-gray-800"
                      : "hover:bg-white hover:text-gray-800"
                  }`}
                >
                  <IoMdSchool className="text-lg" />
                  <span>Admission Form</span>
                </Link>
              </li>
              <li>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-between w-full p-2 rounded-md bg-white text-gray-800 hover:bg-gray-100"
                  >
                    <span>Class</span>
                    <span className="ml-2">{isDropdownOpen ? "▲" : "▼"}</span>
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-full">
                      <li>
                        <button
                          onClick={() => handleClassSelect("Class One")}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >
                          Class One
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleClassSelect("Class Two")}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >
                          Class Two
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleClassSelect("Class Three")}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100"
                        >
                          Class Three
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link
                  to="/dashboard/exams"
                  className={`flex items-center space-x-2 p-2 rounded-md ${
                    isActive("/dashboard/exams")
                      ? "bg-white text-gray-800"
                      : "hover:bg-white hover:text-gray-800"
                  }`}
                >
                  <PiExamFill className="text-lg" />
                  <span>Exam</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={`flex items-center space-x-2 p-2 rounded-md ${
                    isActive("/")
                      ? "bg-white text-gray-800"
                      : "hover:bg-white hover:text-gray-800"
                  }`}
                >
                  <FaSignOutAlt className="text-lg" />
                  <span>Home</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-20 bg-gray-100">
          <h1 className="text-xl font-bold">Selected Class: {selectedClass}</h1>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
