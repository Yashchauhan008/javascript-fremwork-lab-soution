// student.model.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    enrollment: {
        type: String,
        required: true,
        unique: true // Ensure enrollment is unique
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
