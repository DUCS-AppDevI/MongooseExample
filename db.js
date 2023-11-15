// File db.js   Date: 11/24/2019
// Author: S. Sigman
//
// Creates a connection to the database.
//
// Modification Log
// 11/17/2022 Updated documentation. S. Sigman
// 11/17/2022 Changed localhost to loop back ip.  Solves
//            error on Mac OS X. S. Sigman
// 11/18/2022 Updated var to const to meet current style. 
//            S. Sigman
// 11/18/2023 Removed deprecated parameters to the connect
//            command.  S. Sigman

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/studb");
module.exports = mongoose;