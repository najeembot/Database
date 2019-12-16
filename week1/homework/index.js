const express = require('express')
const db = require('mysql')
const app = express()
const SqlString = require("sqlstring")
const Sanitizer = require("sanitizer")

let todo = "something to do", todo_status = 1, todo_id = 0, query
const connection = db.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Abcd123!@#",
  database: "mydb"
})


// adding todos
app.get("/add/:todo", function(req, res, next) {
  if (req.params.todo != "" || req.params.todo != null) {
    todo = req.params.todo
    connection.connect(function(err){
      if (err) {
        console.log(err)
      } else {
        query = "INSERT INTO `todo` (`id`, `todo`, `status`) VALUES (NULL, '"+todo+"', "+todo_status+")"
        connection.query(query, function(err) {
          if (err) throw err
          res.write("<h1>One record is inserted!</h1>")
          console.log("One record inserted!")
        })
      }
    })
  }
})

// marking todos as done or not
app.get("/noteA/:todo_status-:todo_id", function(req, res, next) {
  if (req.params.todo_status != "" && req.params.todo_id != "") {
     todo_status = req.params.todo_status
     let todo_id = req.params.todo_id
     connection.connect(function(err){
       if (err) {
         console.log(err)
       } else {
         query = "UPDATE `todo` SET `status` = '"+todo_status+"' WHERE `id` = '"+todo_id+"'"
         connection.query(query, function(err, result) {
           if (err) throw err
           res.write("<h1>record is updated: "+result.affectedRows+"</h1>")
           console.log("One record updated: "+result.affectedRows)
         })
       }
     })
  }
})

app.listen(8080, function(port) {
  console.log(`The server is running on ${port}`)
})
