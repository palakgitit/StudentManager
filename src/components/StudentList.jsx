import React from "react";
import StudentCard from "../components/StudentCard";

function StudentList({ students, deleteStudent, toggleDetails, markStatus }) {

    if (students.length === 0) {
        return <p className="empty">No Students Found</p>;
    }

    return (
        <>
            {students.map((student) => (
                <StudentCard
                    key={student.id}
                    student={student}
                    deleteStudent={deleteStudent}
                    toggleDetails={toggleDetails}
                    markStatus={markStatus}
                />
            ))}
        </>
    );
}

export default StudentList;