/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    class: "",
    phoneNumber: "",
    fatherName: "",
    admissionFees: "",
    admissionDate: "",
    village: "",
    postOffice: "",
    thana: "",
    postCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-pink-500 mb-4 text-center">
          Admission Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your full name"
              required
            />
          </div>
          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          {/* Class */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Class
            </label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter class"
              required
            />
          </div>
          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter phone number"
              required
            />
          </div>
          {/* Father Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Father Name
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter father's name"
              required
            />
          </div>
          {/* Admission Fees Amount */}

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Admission Fees Amount
            </label>
            <input
              type="number"
              name="admissionFees"
              value={formData.admissionFees}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter admission fees amount"
              required
            />
          </div>
          {/* Admission Date */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Admission Date
            </label>
            ring-pink-400
            <input
              type="date"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          {/* Village */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Village
            </label>
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter village"
              required
            />
          </div>
          {/* Post Office */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Post Office
            </label>
            <input
              type="text"
              name="postOffice"
              value={formData.postOffice}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter post office"
              required
            />
          </div>
          {/* Thana */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Thana
            </label>
            <input
              type="text"
              name="thana"
              value={formData.thana}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter thana"
              required
            />
          </div>
          {/* Post Code */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Post Code
            </label>
            <input
              type="text"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter post code"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-600 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
