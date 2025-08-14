//src>pages>UpdateStudent.js


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import StudentForm from "../components/StudentForm";

function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const API = "http://localhost:5000/students";

  useEffect(() => {
    const fetchStudent = async () => {
      const res = await axios.get(`${API}/${id}`);
      setStudent(res.data);
    };
    fetchStudent();
  }, [id]);

  const handleSubmit = async (updatedStudent) => {
    await axios.put(`${API}/${id}`, updatedStudent);
    navigate("/"); // go back to list after update
  };

  return (
    <div className="container mt-5">
      <h2>Update Student</h2>
      {student && <StudentForm onSubmit={handleSubmit} editingStudent={student} />}
    </div>
  );
}

export default UpdateStudent;
