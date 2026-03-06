import React from "react";

function StudentCard({ student, deleteStudent, toggleDetails, markStatus }) {

    return (
        <div className="card">

            <h3>{student.name}</h3>

            <button onClick={() => toggleDetails(student.id)}>
                {student.showDetails ? "Hide Details" : "Show Details"}
            </button>

            <button onClick={() => deleteStudent(student.id)}>
                Delete
            </button>

            {student.showDetails && (
                <>
                    <p>Status: {student.status}</p>

                    <button onClick={() => markStatus(student.id, "present")}>
                        Mark Present
                    </button>

                    <button onClick={() => markStatus(student.id, "absent")}>
                        Mark Absent
                    </button>
                </>
            )}

        </div>
    );
}

export default StudentCard;