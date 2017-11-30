require("./config/config");

const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

let app = express();

let DIST_DIR = path.join(__dirname, "..", "/dist");

app.use(express.static(DIST_DIR));

app.get("*", ((req,res)=>{
    res.sendFile(path.join(DIST_DIR, "index.html"));
}));

app.listen(3000, () => {
    console.log("Started on port 3000");
});

module.exports = { app };