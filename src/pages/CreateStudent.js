import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StudentForm from "../components/StudentForm";

function CreateStudent() {
  const navigate = useNavigate();
  const API = "https://stud-record-assingment-back.onrender.com/students";

  const handleSubmit = async (student) => {
    await axios.post(API, student);
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Add New Student</h2>
      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateStudent;
