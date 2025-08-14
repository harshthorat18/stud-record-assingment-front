import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function StudentForm({ onSubmit, editingStudent }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    english: "",
    marathi: "",
    math: "",
    physics: "",
    computer: "",
  });

  useEffect(() => {
    if (editingStudent) setForm(editingStudent);
  }, [editingStudent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.age ||
      !form.english ||
      !form.marathi ||
      !form.math ||
      !form.physics ||
      !form.computer
    ) {
      toast.error("Please fill all fields correctly!");
      return;
    }

    onSubmit(form);
    toast.success(`Student ${editingStudent ? "updated" : "added"} successfully!`);

    if (!editingStudent) {
      setForm({
        name: "",
        age: "",
        english: "",
        marathi: "",
        math: "",
        physics: "",
        computer: "",
      });
    }
  };

  return (
    <div className="card shadow p-4 mb-4 bg-light rounded">
      <h3 className="text-primary mb-4">{editingStudent ? "Update Student" : "Add Student"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          {/* Row 1 */}
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter name"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Age</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter age"
              min="1"
              required
            />
          </div>

          {/* Row 2 */}
          <div className="col-md-6">
            <label className="form-label">English</label>
            <input
              type="number"
              name="english"
              value={form.english}
              onChange={handleChange}
              className="form-control"
              placeholder="Marks 0-100"
              min="0"
              max="100"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Marathi</label>
            <input
              type="number"
              name="marathi"
              value={form.marathi}
              onChange={handleChange}
              className="form-control"
              placeholder="Marks 0-100"
              min="0"
              max="100"
              required
            />
          </div>

          {/* Row 3 */}
          <div className="col-md-6">
            <label className="form-label">Math</label>
            <input
              type="number"
              name="math"
              value={form.math}
              onChange={handleChange}
              className="form-control"
              placeholder="Marks 0-100"
              min="0"
              max="100"
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Physics</label>
            <input
              type="number"
              name="physics"
              value={form.physics}
              onChange={handleChange}
              className="form-control"
              placeholder="Marks 0-100"
              min="0"
              max="100"
              required
            />
          </div>

          {/* Row 4 */}
          <div className="col-md-6">
            <label className="form-label">Computer</label>
            <input
              type="number"
              name="computer"
              value={form.computer}
              onChange={handleChange}
              className="form-control"
              placeholder="Marks 0-100"
              min="0"
              max="100"
              required
            />
          </div>

          <div className="col-md-6 d-flex align-items-end">
            <button type="submit" className="btn btn-primary w-100">
              {editingStudent ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
