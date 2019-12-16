// joins
const express = require("express")
const app = express()
const mysql = require("mysql")
let data = "";
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

app.get("/agr", function(req, res) {
  res.write("<h1>All the data from aggregate functions</h1><br />")
  let sql1 = "select Department.id as DepartmentNumber, count(employee.id) as NEmployeesW from Department inner join employee on Department.id = employee.dep_id group by Department.id";
  connection.query(sql1, function(err, results, fields){
      if (err) console.log(err)
      console.table(results)
      results.map(function(value, key) {
        data += "<p style='color:#f19'>"+value['DepartmentNumber']+"-"+value['NEmployeesW']+"</p><br />"
      })
   })
   let sql2 = "select sum(`salary`) as `SummE` from `employee`"
   connection.query(sql2, function(err, results, fields){
       if (err) console.log(err)
       console.table(results)
       results.map(function(value, key) {
         data += "<p style='color:#f16'>"+value['SummE']+"</p><br />"
       })
    })
    let sql3 = "select avg(`salary`) as `AverageSalary` from `employee`"
    connection.query(sql3, function(err, results, fields){
        if (err) console.log(err)
        console.table(results)
        results.map(function(value, key) {
          data += "<p style='color:#f66'>"+value['AverageSalary']+"</p><br />"
        })
     })
     let sql4 = "select Department.id as `DNumber`, sum(`salary`) as `SummEpd` from `employee` inner join Department on employee.dep_id = Department.id group by Department.id"
     connection.query(sql4, function(err, results, fields){
         if (err) console.log(err)
         console.table(results)
         results.map(function(value, key) {
           data += "<p style='color:#f76'>"+value['DNumber']+" "+value['SummEpd']+"</p><br />"
         })
      })
      let sql5 = "select Department.id as `DNumber`, min(`salary`) as `MinimumOd`, max(`salary`) as `MaximumOd` from `employee` inner join Department on employee.dep_id = Department.id group by Department.id"
      connection.query(sql5, function(err, results, fields) {
          if (err) console.log(err)
          console.table(results)
          results.map(function(value, key) {
            data += "<p style='color:#f10'>"+value['DNumber']+" "+value['MinimumOd']+" "+value['MaximumOd']+"</p><br />"
          })
       })
       let sql6 = "select `salary` as `Salary`, count(`id`) as `NEmployeesP` from `employee` group by `salary`"
       connection.query(sql6, function(err, results, fields) {
         if (err) console.log(err)
         console.table(results)
         results.map(function(value, key) {
           data += "<p style='color:#f10'>"+value['Salary']+" "+value['NEmployeesP']+"</p><br />"
         })
        })
        res.write(data)
        res.end()

})
app.listen(3000, function() {
  console.log(`${"Server is running at port: "+this.address().port}`)
})
