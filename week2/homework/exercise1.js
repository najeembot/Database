const express = require("express")
const app = express()
const mysql = require("mysql")
const mysql_import = require('mysql-import');

// creating the connection

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Abcd123!@#',
        database: 'mydb',
        port: '3306'
    })
    connection.connect(function(err){
        if (!err) {
            console.log("Connected!");

        } else {
            console.log("Failed to connect: "+err)
        }
    })
    // creating the employee table
    connection.query("create table if not exists employee(id int not null auto_increment, full_name varchar(255), salary double not null, address varchar(255), manager_id int not null, dep_id int not null, primary key(id))", function(err, result){
                if (err) {
                    console.log(err)
                } else {
                    console.log("Table created successfully!")
                }
    })
    // creating the Department table
    connection.query("create table if not exists Department(id int not null auto_increment, title varchar(255), description varchar(255), address varchar(255), primary key(id))", function(err, result){
                if (err) {
                    console.log(err)
                } else {
                    console.log("Table created successfully!")
                }
    })
    app.get("/ex1", function(req, res) {
        res.write("<h1>Tables employee, and Department created successfully!")
        // dumping the table with data from iqueries.sql file
        const mydb_importer = mysql_import.config({
            host: 'localhost',
            user: 'root',
            password: 'Abcd123!@#',
            database: 'mydb',
            onerror: err=>console.log(err.message)
        });
        mydb_importer.import('iqueries.sql').then(function() {console.log("Dumped!")})
        res.end()
    })
    app.listen(3000, function() {
      console.log(`${"Server is running at port: "+this.address().port}`)
    })
