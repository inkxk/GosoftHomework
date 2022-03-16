const express = require("express");
const bodyParser = require("body-parser");
const oracledb = require("oracledb");
const app = express();
const port = 3000;
var password = "12345678";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

async function Connection(sql, params) {
    try {
        connection = await oracledb.getConnection({
            user: "gosoft5",
            password: password,
            connectString: "45.32.119.244:1521",
        });
        console.log("connected to database");
        const result = await connection.execute(sql, [params]);
        return result.rows;
    } catch (err) {
        console.error(err.message);
    } finally {
        if (connection) {
            try {
                // Always close connections
                await connection.close();
                console.log("close connection success");
            } catch (err) {
                console.error(err.message);
            }
        }
    }
}

app.get("/user", function (req, res, next) {
    let sql = "SELECT * FROM users";
    const data = Connection(sql);
    return res.status(200).json({
        code: 1,
        message: "OK",
        data: data,
    });
});

app.get("/user/:id", function (req, res, next) {
    try {
        const inputId = req.params.id;
        let sql = "SELECT * FROM users WHERE id=':id'";
        const data = Connection(sql, inputId);
        return res.status(200).json({
            code: 1,
            message: "OK",
            data: data,
        });
    } catch {
        res.status(404).send("User Not Found");
    }
});

app.post("/user", function (req, res, next) {
    // find length
    let sqlCount = `SELECT COUNT(*) FROM users`;
    const length = Connection(sqlCount);
    // main post
    let sql = `INSERT INTO users VALUES (${length + 1}, ${req.body.firstName}, ${req.body.lastName}, ${req.body.position}, ${req.body.tel}, ${req.body.email});`
    const data = Connection(sql);
    return res.status(201).json({
        code: 1,
        message: "OK",
        data: data,
    });
});

app.put("/user/:id", function (req, res, next) {
    const updateId = req.params.id;
    if (req.body.firstName != undefined && req.body.lastName != undefined) {
        return res.status(400).send("you can't change name");
    }
    try {
        let sql = `UPDATE users SET position = ${req.body.position}, tel = ${req.body.tel}, email = ${req.body.email} WHERE id=':id'`
        const data = Connection(sql, updateId);
        return res.status(200).json({
            code: 1,
            message: "OK",
            data: data,
        });
    } catch (error) {
        res.status(404).send("User Not Found");
    }
});

app.delete("/user/:id", function (req, res, next) {
    const inputId = req.params.id;
    try {
        let sql = "DELETE FROM users WHERE id=':id'";
        const data = Connection(sql, inputId);
        return res.status(200).json({
            code: 1,
            message: "OK",
            data: data,
        });
    } catch (error) {
        res.status(404).send("User Not Found");
    }
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
