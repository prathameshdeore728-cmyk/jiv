const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.log(error));
const studentSchema = new mongoose.Schema({
    name: String,
    rollNo: Number,
    marks: Number
});
const Student = mongoose.model("Student", studentSchema);
// CREATE student
app.post("/students", async (req, res) => {
    const student = await Student.create(req.body);
    res.json(student);
});
// READ all students
app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});
// UPDATE student - Question 10
app.put("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndUpdate(
        req.params.id, req.body, { new: true }
    );
    res.json(student);
});
// SEARCH student - Question 11
app.get("/students/search", async (req, res) => {
    const students = await Student.find({
        name: { $regex: req.query.name || "", $options: "i" }
    });
    res.json(students);
});
// DELETE student - Question 12
app.delete("/students/:id", async (req, res) => {
    const student = await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted", student: student });
});
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});