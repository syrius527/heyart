const express = require('express');
const bodyParser = require('body-parser');
const axios = require("axios");
const multer = require("multer");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

const uploadFile = multer({
    dest: "uploads",
})

app.post("/", uploadFile.single("image"), function(req, res) {
    const {file} = req;
    console.log(req.body);
    // res.send("input: " + image);
})

app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
});