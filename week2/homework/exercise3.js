// joins
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
// joining the two tables data into one table self join and inner join
app.get("/ex3", function(req, res) {
  let sql = "select e.full_name as employee, b.full_name as boss, d.title as department from employee e inner join Department d on e.dep_id = d.id inner join employee b on e.id = b.manager_id"
  connection.query(sql, function(err, results, fields){
      if (err) console.log(err)
      res.write("<h1>Employee&nbsp;Boss&nbsp;Department")
      results.map(function(value, key) {
        res.write("<p style='color:pink'>"+value['employee']+" "+value['boss']+" "+value['department']+"</p><br />")
      })
      res.end()
   })

})
app.listen(3000, function() {
  console.log(`${"Server is running at port: "+this.address().port}`)
})
