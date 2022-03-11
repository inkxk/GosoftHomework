const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const bodyParser = require("body-parser");
const secret = "secretPassword";

const jsonParser = bodyParser.json();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

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

function checkDuplicate(variable, newInput) {
    const uniqueValues = new Set(users.map((user) => user[variable]));
    if (uniqueValues.has(newInput)) {
        return true;
    }
}

app.get("/users", jsonParser, (req, res, next) => {
    res.status(200).send({
        users: users
    })
});

app.post("/register", jsonParser, (req, res, next) => {
    if (
        req.body.username == null ||
        req.body.email == null ||
        req.body.password == null
    ) {
        return res.status(201).send({
            message: "data is missing!",
        });
    }
    if (
        checkDuplicate("username", req.body.username) ||
        checkDuplicate("email", req.body.email)
    ) {
        return res.status(201).send("user is exist!");
    }
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
    console.log(users);
    res.status(200).send("register completed")
});

app.post("/login", jsonParser, (req, res, next) => {
    try {
        const index = users.findIndex((user) => (user.username == req.body.username));
        bcrypt.compare(req.body.password, users[index].password, function(err, isLogin) {
            if (isLogin) {
                var token = jwt.sign({ username: users[index].username, email: users[index].email }, secret);
                return res.status(200).json({message: "Login successful", token});
            } else {
                return res.status(201).json({message: "Login failed"});
            }
        });            
    } catch {
        return res.status(202).send("User Not Found");
    }
});

app.post("/authen", jsonParser, (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
        var decoded = jwt.verify(token, secret);
        return res.status(200).json({decoded});
    } catch {
        return res.status(201).json("invalid token!");
    }
    
});

app.listen(3001, () => console.log("Server started on port 3001"));
