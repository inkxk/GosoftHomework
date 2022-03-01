const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = [
    {
        id: 1,
        firstName: "Harry",
        lastName: "Potter",
        position: "Magician",
        tel: "111-111-1111",
        email: "harry.potter@email.com",
    },
    {
        id: 2,
        firstName: "Thomas",
        lastName: "Shelby",
        position: "Business Owner",
        tel: "222-222-2222",
        email: "peaky.blinders@email.com",
    },
    {
        id: 3,
        firstName: "Potcharapol",
        lastName: "Nokyoo",
        position: "Software Engineer",
        tel: "333-333-3333",
        email: "inkxk@email.com",
    },
];

app.get("/user", function (req, res, next) {
    return res.status(200).json({
        code: 1,
        message: "OK",
        data: users,
    });
});

app.get("/user/:id", function (req, res, next) {
    try {
        const replaceId = req.params.id;
        const index = users.findIndex(function (val) {
            return val.id == replaceId;
        });
        return res.status(200).json({
            code: 1,
            message: "OK",
            data: users[index],
        });
    } catch {
        res.status(404).send("User Not Found");
    }
});

app.post("/user", function (req, res, next) {
    let user = {};
    user.id = users.length + 1;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.position = req.body.position;
    user.tel = req.body.tel;
    user.email = req.body.email;
    users.push(user);
    console.log("Users :", user.firstName, " ", user.lastName, "Created!");
    return res.status(201).json({
        code: 1,
        message: "OK",
        data: users,
    });
});

app.put("/user/:id", function (req, res, next) {
    const replaceId = req.params.id;
    const index = users.findIndex(function (val) {
        return val.id == replaceId;
    });
    console.log(users[index]);
    if (req.body.firstName != undefined && req.body.lastName != undefined) {
        return res.status(400).send("you can't change name");
    }
    try {
        users[index].id = req.body.id;
        users[index].position = req.body.position;
        users[index].tel = req.body.tel;
        users[index].email = req.body.email;
        return res.status(200).json({
            code: 1,
            message: "OK",
            data: users,
        });
    } catch (error) {
        res.status(404).send("User Not Found");
    }
});

app.delete("/user/:id", function (req, res, next) {
    const removeId = req.params.id;
    try {
        const index = users.findIndex((val) => {
            return val.id == removeId;
        });
        users.splice(index, 1);
        return res.status(200).json({
            code: 1,
            message: "OK",
            data: users,
        });
    } catch (error) {
        res.status(404).send("User Not Found");
    }
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
