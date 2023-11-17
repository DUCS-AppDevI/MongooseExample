// File: students.js  Date: 11-16-2-23
// Author: S. Sigman
//
// This file defines routes that implement the student API.
//
// API
// route        HTTP Verb   Desc                      Return
// /api/create    POST      Creates a student object  201 - Created, if save suceedes, 
//                          and saves it to the db    Otherwise, 409 and  the error message
//                         
// /api/list       GET      Returns a list of all 
//                          students obj with GPA > 3 200 - OK & sorted JSON array of
//                                                    name, gpa objects, 
//                                                    Otherwise, 404 - not found and JSON
//                                                    message, 'No Students Found'
//
// Modification Log

const Student = require('../models/student')
const router = require('express').Router()

router.post('/create', (req, res) =>{

    // Create a student from the submitted form data
    let stu = new Student({
        name: req.body.name,
        gpa: req.body.gpa,
        birthDate: new Date(req.body.birthdate)
    });

    stu.save((err, stu) => {
        if (err) {
            res.status(409).json({err: err});
        } else {
            res.status(201).json({ msg: "Student was saved."})
        }
    })
})

router.get("/list", async (req, res) => {
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
})

module.exports = router