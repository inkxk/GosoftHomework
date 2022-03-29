const express = require("express");
const { google } = require("googleapis");
const keys = require("./testapi-334008-b6fb9081c0d1.json");

// พชรพล นกอยู่
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

const auth = new google.auth.GoogleAuth({
    keyFile: "testapi-334008-b6fb9081c0d1.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});

auth.getClient().then((authClientObject) => {
    const googleSheetsInstance = google.sheets({
        version: "v4",
        auth: authClientObject,
    });
    const spreadsheetId = "1AFni2vxsK2xrXc2Pyuop2Ga6auXWtixzyJFzKhsJD6w";
    googleSheetsInstance.spreadsheets.values
        .get({
            auth,
            spreadsheetId,
            range: "Sheet1!A1:E7",
        })
        .then((data) => {
            console.log(data.data);
            const allData = data.data.values;
            app.get("/", async (request, response) => {
                response.render("index", { data: allData });
            });
        });
});

const PORT = 3001;
const server = app.listen(PORT, () => {
    console.log(`Server started on port localhost:${PORT}`);
});
