import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUpload } from "react-icons/fa";
import Navbar from "./Navbar";

// Import images correctly
import ccs from '../assets/ccs.png';
import coted from '../assets/coted.png';
import cbm from '../assets/hm.png';
import caf from '../assets/agri.png';
import ccje from '../assets/crim.png';

const Documents = () => {
    const navigate = useNavigate();
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [isAdmin, setIsAdmin] = useState(true);

    const departments = [
        { name: "College of Computer Studies", logo: ccs, color: "bg-purple-300", hoverColor: "hover:bg-purple-500" },
        { name: "College of Teacher Education", logo: coted, color: "bg-blue-300", hoverColor: "hover:bg-blue-500" },
        { name: "College of Criminal Justice Education", logo: ccje, color: "bg-red-300", hoverColor: "hover:bg-red-500" },
        { name: "College of Hospitality and Management", logo: cbm, color: "bg-yellow-200", hoverColor: "hover:bg-yellow-400" },
        { name: "College of Agriculture and Forestry", logo: caf, color: "bg-green-200", hoverColor: "hover:bg-green-400" },
    ];

    const handleDepartmentClick = (dept) => {
        if (isAdmin) {
            setSelectedDepartment(dept);
        } else {
            alert("Access Denied! Only admins can manage documents.");
        }
    };

    const resetDashboard = () => {
        setSelectedDepartment(null);
    };

    return (
        <div className="flex flex-col h-screen bg-white">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex-1 px-6 pt-24 pb-6">
                {selectedDepartment ? (
                    isAdmin ? (
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <button
                                onClick={resetDashboard}
                                className="flex items-center justify-center px-4 py-2 rounded-lg mb-4"
                            >
                                <FaArrowLeft className="text-lg" />
                            </button>

                            <h2 className="text-3xl font-bold text-center mb-6">
                                Documents - {selectedDepartment.name}
                            </h2>

                            {/* Upload File Button */}
                            <label className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-800 transition w-fit mx-auto">
                                <FaUpload className="mr-2" /> Upload Document
                                <input type="file" multiple onChange={() => {}} className="hidden" />
                            </label>

                            {/* File List */}
                            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                                <p className="text-gray-500 text-center">No documents uploaded yet.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-red-500 text-xl font-bold">Access Denied. Admins Only.</div>
                    )
                ) : (
                    <>
                        {/* Department Title */}
                        <h1 className="text-3xl font-bold text-center text-green-600 mb-8">DEPARTMENTS</h1>

                        {/* Department List - Single Column Layout */}
                        <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
                            {departments.map((dept, index) => (
                                <div
                                    key={index}
                                    className={`${dept.color} p-4 rounded-lg shadow-md cursor-pointer ${dept.hoverColor} transition-colors duration-300 flex items-center`}
                                    onClick={() => handleDepartmentClick(dept)}
                                >
                                    <img src={dept.logo} alt={dept.name} className="w-14 h-14 mr-6" />
                                    <h2 className="text-xl font-bold text-white uppercase tracking-wide">{dept.name}</h2>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Documents;
