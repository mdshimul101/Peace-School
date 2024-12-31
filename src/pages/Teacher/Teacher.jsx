/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
    address: "",
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Update teacher
      const updatedTeachers = [...teachers];
      updatedTeachers[editingIndex] = formData;
      setTeachers(updatedTeachers);
      setEditingIndex(null);
    } else {
      // Add teacher
      setTeachers([...teachers, formData]);
    }

    setFormData({ name: "", subject: "", phone: "", email: "", address: "" });
  };

  const handleEdit = (index) => {
    setFormData(teachers[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTeachers = teachers.filter((_, i) => i !== index);
    setTeachers(updatedTeachers);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Teacher Information Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Teacher Information</h2>
        <form onSubmit={handleAddOrUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter teacher's name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter subject"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter phone number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter address"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-500 transition-colors duration-300"
          >
            {editingIndex !== null ? "Update Teacher" : "Add Teacher"}
          </button>
        </form>
      </div>

      {/* Teacher List Table */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Teacher List</h2>
        {teachers.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left text-gray-600">Name</th>
                <th className="border px-4 py-2 text-left text-gray-600">Subject</th>
                <th className="border px-4 py-2 text-left text-gray-600">Phone</th>
                <th className="border px-4 py-2 text-left text-gray-600">Email</th>
                <th className="border px-4 py-2 text-left text-gray-600">Address</th>
                <th className="border px-4 py-2 text-center text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{teacher.name}</td>
                  <td className="border px-4 py-2">{teacher.subject}</td>
                  <td className="border px-4 py-2">{teacher.phone}</td>
                  <td className="border px-4 py-2">{teacher.email}</td>
                  <td className="border px-4 py-2">{teacher.address}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-pink-500 font-bold hover:underline mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 font-bold hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No teachers added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Teacher;
