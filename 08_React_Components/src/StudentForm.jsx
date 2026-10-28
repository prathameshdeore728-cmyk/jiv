import React, { useState } from "react";

function StudentForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");

    function submitForm(event) {
        event.preventDefault();
        onSubmit({ name: name, course: course });
    }

    return (
        <form onSubmit={submitForm}>
            <input placeholder="Name" value={name}
                onChange={(e) => setName(e.target.value)} required />
            <input placeholder="Course" value={course}
                onChange={(e) => setCourse(e.target.value)} required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default StudentForm;
