import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./StudentForm.css";

const StudentForm = ({ open, onClose, addStudent, editingIndex, students }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (editingIndex !== null) {
      const studentToEdit = students[editingIndex];
      setName(studentToEdit.name);
      setNumber(studentToEdit.number);
      setAddress(studentToEdit.address);
    }
  }, [editingIndex, students]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, number, address };
    addStudent(newStudent);
    setName("");
    setNumber("");
    setAddress("");
    onClose();
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <div className="modal-overlay">
      <div>
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="Name">Name</label>
                <br />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="number">Number</label>
                <br />
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <br />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button type="submit">
                {editingIndex !== null ? "Update" : "Save"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>,

    document.getElementById("modal-root")
  );
};

export default StudentForm;
