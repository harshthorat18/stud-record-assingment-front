import React from "react";
import { useNavigate } from "react-router-dom";

function StudentTable({ students, handleDelete }) {
  const navigate = useNavigate();

  return (
    <div className="table-responsive shadow rounded p-3 bg-white">
      <table className="table table-hover align-middle">
        <thead className="table-primary text-center">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>English</th>
            <th>Marathi</th>
            <th>Math</th>
            <th>Physics</th>
            <th>Computer</th>
            <th>Percentage</th>
            <th>Division</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="text-center">
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.english}</td>
              <td>{student.marathi}</td>
              <td>{student.math}</td>
              <td>{student.physics}</td>
              <td>{student.computer}</td>
              <td>{student.percentage.toFixed(2)}</td>
              <td>{student.division}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-warning me-2"
                  onClick={() => navigate(`/update/${student._id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {students.length === 0 && (
            <tr>
              <td colSpan="10" className="text-center text-muted">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
