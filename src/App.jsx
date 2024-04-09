import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import StudentForm from "./Components/StudentForm";
import StudentInfo from "./Components/StudentInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StudentInfo />
    </>
  );
}

export default App;
