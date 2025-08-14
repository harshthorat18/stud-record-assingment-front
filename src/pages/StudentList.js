import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StudentTable from "../components/StudentTable";
import SearchFilter from "../components/SearchFilter";
import { toast } from "react-toastify";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [filterDivision, setFilterDivision] = useState("");
  const API = "https://stud-record-assingment-back.onrender.com/students";

  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await axios.delete(`${API}/${id}`);
        toast.success("Student deleted successfully!");
        fetchStudents();
      } catch (err) {
        toast.error("Failed to delete student!");
      }
    }
  };

  const filteredStudents = students.filter(
    (s) =>
     

      s.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterDivision ? s.division === filterDivision : true)
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student List</h2>

      <Link to="/create" className="btn btn-primary mb-3">
        Add New Student
      </Link>

      <SearchFilter
        search={search}
        setSearch={setSearch}
        filterDivision={filterDivision}
        setFilterDivision={setFilterDivision}
      />

      <StudentTable
        students={filteredStudents}
        handleEdit={(student) => {}}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default StudentList;
