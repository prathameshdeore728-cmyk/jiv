import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentDisplay from "./StudentDisplay";

function App() {
    const [student, setStudent] = useState(null);
    return (
        <div>
            <h2>Student Details</h2>
            <StudentForm onSubmit={setStudent} />
            <StudentDisplay student={student} />
        </div>
    );
}
export default App;