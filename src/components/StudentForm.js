import React from "react";

function StudentTable({ students, onEdit, onDelete }) {
  return (
    <table className="table table-bordered table-striped">
      <thead>
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
        {students.map((student) => {
          let rowStyle = {};
          if (student.division === "First Division") {
            rowStyle = { backgroundColor: "#d4edda" }; // light green
          } else if (student.division === "Second Division") {
            rowStyle = { backgroundColor: "#d1ecf1" }; // light blue
          } else if (student.division === "Third Division") {
            rowStyle = { backgroundColor: "#fff3cd" }; // light yellow
          } else {
            rowStyle = { backgroundColor: "#f8d7da" }; // light red
          }

          return (
            <tr key={student._id} style={rowStyle}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.english}</td>
              <td>{student.marathi}</td>
              <td>{student.math}</td>
              <td>{student.physics}</td>
              <td>{student.computer}</td>
              <td>{student.percentage}</td>
              <td>{student.division}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(student)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StudentTable;
