// File: models/student.js   Date: 11/15/2023
// Declares a model for the student document type
//
// Modification Log
// 11/18/2023  Added Proper documentation.  S. Sigman
// 11/18/2023  Updated var to const to match the 
//             current style.  S. Sigman

const db = require("../db");

const Student = db.model("Student", {
    name:      String,
    gpa:       { type: Number, min: 0, max: 4 },
    birthDate: { type: Date, default: Date.now },
    interests: [ String ]
});

module.exports = Student;