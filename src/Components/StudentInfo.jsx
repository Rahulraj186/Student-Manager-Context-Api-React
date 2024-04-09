import React, { useState, useEffect } from "react";
import "./StudentInfo.css";
import StudentForm from "./StudentForm";

const StudentInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const savedStudents = localStorage.getItem("students");
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
      setCount(JSON.parse(savedStudents).length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const increaseCount = () => {
    setIsOpen(true);
    setEditingIndex(null);
  };

  const addStudent = (student) => {
    if (editingIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = student;
      setStudents(updatedStudents);
      setEditingIndex(null);
    } else {
      setStudents([...students, student]);
      setCount(count + 1);
    }
    setIsOpen(false);
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
    setCount(count - 1);
  };

  const editStudent = (index) => {
    const studentToEdit = students[index];
    setIsOpen(true);
    setEditingIndex(index);
  };

  return (
    <div>
      <div className="container">
        <h1>Student Manager</h1>
        <p>All students = {count}</p>
        <div className="btn-container">
          <button onClick={increaseCount}>Add New Student</button>
        </div>

        <h2>All Students</h2>
      </div>

      <div>
        <StudentForm
          open={isOpen}
          onClose={() => setIsOpen(false)}
          addStudent={addStudent}
          editingIndex={editingIndex}
          students={students}
        />
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              Name: {student.name}, Number: {student.number}, Address:
              {student.address}
              <button onClick={() => deleteStudent(index)}>Delete</button>
              <button onClick={() => editStudent(index)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentInfo;
