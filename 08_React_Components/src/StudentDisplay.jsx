import React from "react";
function StudentDisplay({ student }) {
    if (student == null) {
        return <p>No details submitted.</p>;
    }
    return (
        <div>
            <h3>Submitted Details</h3>
            <p>Name: {student.name}</p>
            <p>Course: {student.course}</p>
        </div>
    );
}
export default StudentDisplay;