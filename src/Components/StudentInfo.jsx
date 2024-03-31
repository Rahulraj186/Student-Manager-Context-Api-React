import React, { useState } from "react";

const StudentInfo = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount();
  };
  return (
    <>
      <h1>Student Manager</h1>
      <p>All students = {count}</p>
      <button onClick={increaseCount}> Add New Student </button>
      <h2>All Students</h2>
    </>
  );
};
export default StudentInfo;
