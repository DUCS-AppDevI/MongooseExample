# MongooseExample
Code used in class to illustrate the use of the Mongoose package.

Prerequisite
>MongoDB is required to run this code.

Running the example
1. Clone the repo
2. In VS code or from a terminal issue the command ```npm install```.  Note that if you use a terminal, the working directory must be the directory contining the server.js file.
3. If MongoDB is not running as a service, open a terminal and start the MongoDB server, *mongod*.
4. Open a second terminal and start the server using the command ```npm start```.
5. You need to add students to the studb database in MongoDB by running the application from the web page at *localhost:3000*.
6. You can list the students you have added to the database by *Postman* or your browser at *localhost:3000/list*.

## Example using a RESTful API
An example of the code implementing a RESTful API is included in the branch RESTfulAPI.  
