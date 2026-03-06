import React, { useRef, useState } from "react";

function StudentForm({ addStudent }) {

    const inputRef = useRef();
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const name = inputRef.current.value.trim();

        if (name === "") {
            setError("Student name is required");
            inputRef.current.focus();
            return;
        }

        addStudent(name);

        inputRef.current.value = "";
        inputRef.current.focus();
        setError("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">

                <input
                    type="text"
                    placeholder="Enter student name"
                    ref={inputRef}
                />

                <button type="submit">
                    Add Student
                </button>

            </form>

            {error && <p className="error">{error}</p>}
        </>
    );
}

export default StudentForm;