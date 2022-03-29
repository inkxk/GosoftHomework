const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const bodyParser = require("body-parser");
const secret = "secretPassword";

// พชรพล นกอยู่
const jsonParser = bodyParser.json();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);

// Mock user
const users = [
    {
        id: 1,
        username: "inkxk",
        email: "ink@email.com",
        password: "$2a$10$kxGBZD290wrGaNeFIpO7te.9LpHliVtPCJhLQ5kCSFEKS1wIrjfWS",
        // password = 123456
    },
];

app.get("/register", jsonParser, (req, res, next) => {
    res.sendFile(__dirname + "/register.html");
});

app.post("/register", jsonParser, (req, res, next) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            let newUser = {
                id: users.length + 1,
                username: req.body.username,
                email: req.body.email,
                password: hash,
            };
            users.push(newUser);
        });
    });
    res.redirect('/register_completed');
});

app.get("/register_completed", jsonParser, (req, res, next) => {
    res.sendFile(__dirname + "/register_completed.html", {id: users.length, username: users[users.length - 1].username});
});

app.get("/login", jsonParser, (req, res, next) => {
    res.sendFile(__dirname + "/login.html");
});

app.post("/login", jsonParser, (req, res, next) => {
    try {
        const index = users.findIndex((user) => (user.username == req.body.username));
        bcrypt.compare(req.body.password, users[index].password, function(err, isLogin) {
            if (isLogin) {
                var token = jwt.sign({ username: users[index].username, email: users[index].email }, secret);
                return res.sendFile(__dirname + "/profile.html", {id: index + 1, email: users[index].email});
            } else {
                return res.sendFile(__dirname + "/login_fail.html");
            }
        });            
    } catch {
        return res.status(202).send("User Not Found");
    }
});

app.get("/logout", jsonParser, (req, res, next) => {
    res.sendFile(__dirname + "/logout.html");
});

app.listen(3001, () => console.log("Server started on port 3001"));
