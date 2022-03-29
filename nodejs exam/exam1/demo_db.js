const express = require("express");
var mysql = require("mysql");
var http = require("http");

// พชรพล นกอยู่
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "exam",
});

const app = express();
app.use(express.static(__dirname + "/img"));
app.set("view engine", "ejs");

connection.connect(function (err) {
    if (err) throw err;
    connection.query(
        "SELECT employee.id, employee.firstname, employee.lastname, job.job_name FROM employee Join job ON employee.job_id=job.id ",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            app.get("/employee", function (req, res) {
                res.render("homepage", {
                    detail: "Table",
                    data: result,
                });
            });
        }
    );

    connection.query(
        "SELECT id, job_name FROM job",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);

            app.set("view engine", "ejs");

            app.get("/job-no-one/:id?", function (req, res) {
                console.log(req.params);
                let returnData = result;
                returnData = req.params.id
                    ? returnData.filter((c) => c.id == +req.params.id)
                    : returnData;
                res.render("job", {
                    detail: "JOB",
                    data: returnData,
                    id: +req.id,
                });
            });
        }
    );
});

app.listen(3001, () => {
  console.log("Start server at port 3001.");
});
