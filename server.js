// File: server.js    Date: 11/24/2019
// Author: S. Sigman
// 
// Server illustrates using a node web server with a
// MongoDB database.  The server serves static files
// from the public directory and provides a create
// route.
// API
// URL       HTTP Verb   Description
// create    POST        Creates a user from the data
//                       passed in the HTTP request.
// list      POST        1. Returns JSON list of students
//                       with gpa greater than 3.0
//                       2. Returns 404 and err msg if no
//                       students found.
//
// Modification Log
// 11/17/2022 Updated Mongoose and Express packages to eliminate 
//            a Mongoose driver error (Circular reference) S. Sigman
// 11/17/2022 Added documentation. S. Sigman
// 11/17/2022 Updated var declarations to const and let to 
//            better protect code objects. S. Sigman
// 11/15/2023 Added route to list all students

const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/api", require("./api/students"))

/* app.get('/list', async (req, res)=>{
    // Retrieve a list of all students
    const students = await (Student.find({gpa: {$gte: 3}}).sort({'gpa': 'desc'}))
    let returnData = []
    students.forEach((stu)=> {
        let newStu = {student: stu.name, gpa: stu.gpa}
        returnData.push(newStu)
        console.log(`Student: ${stu.name} GPA: ${stu.gpa}`)
    })
    
    // send the data back as an array of JSON objects
    // accounting for an error
    if (returnData.length > 0) {
        res.status(200).json(returnData)
    }
    else {
        res.status(404).json({err: 'Students not found'})
    }
}) */

app.listen(PORT, (err)=>{
    if (err)
      console.log(`Server failed to start on port ${PORT}.`);
    else
      console.log(`Server started on port ${PORT}`);
});