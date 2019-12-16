const express = require("express")
const app = express()
const mysql = require("mysql")
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

    // adding FOREIGN KEY to two columns relational columns
    connection.query("ALTER TABLE employee ADD FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE CASCADE ON UPDATE CASCADE ", function(err, result){
        if (err) console.log(err)
        console.log("Foriegn key added successfully!")
    })
    // adding the relation between table employee to point to Department table
    connection.query("alter table employee add foreign key (dep_id) references Department (id) on delete no action on update cascade", function(err, result){
      if (err) console.log(err)
      console.log("Foreign key added successfully!")
    })

app.get("/ex2", function(req, res) {
  res.send("<h1>Table updated successfully!</h1>")
})
app.listen(3000, function() {
  console.log(`${"Server is running at port: "+this.address().port}`)
})
