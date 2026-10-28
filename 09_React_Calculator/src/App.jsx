import React, { useState } from "react";
function App() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState("");
    function calculate(operator) {
        let a = Number(first);
        let b = Number(second);
        if (first === "" || second === "") {
            setResult("Enter both numbers");
        } else if (operator === "+") {
            setResult(a + b);
        } else if (operator === "-") {
            setResult(a - b);
        } else if (operator === "*") {
            setResult(a * b);
        } else if (operator === "/") {
            setResult(b === 0 ? "Cannot divide by zero" : a / b);
        }
    }
    return (
        <div>
            <h2>Simple Calculator</h2>
            <input type="number" value={first}
                onChange={(e) => setFirst(e.target.value)} placeholder="First number" />
            <input type="number" value={second}
                onChange={(e) => setSecond(e.target.value)} placeholder="Second number" />
            <br /><br />
            <button onClick={() => calculate("+")}>+</button>
            <button onClick={() => calculate("-")}>-</button>
            <button onClick={() => calculate("*")}>*</button>
            <button onClick={() => calculate("/")}>/</button>
            <h3>Result: {result}</h3>
        </div>
    );
}
export default App;