import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import './app.css'

function App() {

  const [students, setStudents] = useState([]);

  function addStudent(name) {
    const newStudent = {
      id: Date.now(),
      name: name,
      showDetails: false,
      status: "absent"
    };

    setStudents([...students, newStudent]);
  }

  function deleteStudent(id) {
    const updatedList = students.filter((student) => student.id !== id);
    setStudents(updatedList);
  }

  function toggleDetails(id) {
    const updatedList = students.map((student) => {
      if (student.id === id) {
        return { ...student, showDetails: !student.showDetails };
      }
      return student;
    });

    setStudents(updatedList);
  }

  function markStatus(id, status) {
    const updatedList = students.map((student) => {
      if (student.id === id) {
        return { ...student, status: status };
      }
      return student;
    });

    setStudents(updatedList);
  }

  const totalStudents = students.length;

  const presentStudents = students.filter(
    (student) => student.status === "present"
  ).length;

  const absentStudents = students.filter(
    (student) => student.status === "absent"
  ).length;

  return (
    <div className="container">

      <div className="dashboard">
        <h1>Student Activity Overview</h1>
        <p>Total Students: {totalStudents}</p>
        <p>Present: {presentStudents}</p>
        <p>Absent: {absentStudents}</p>
      </div>

      <h1>Student Activity Manager</h1>

      <StudentForm addStudent={addStudent} />

      

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        toggleDetails={toggleDetails}
        markStatus={markStatus}
      />

    </div>
  );
}

export default App;