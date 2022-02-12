// ไปหยิบไฟล์ config.env ที่เราเก็บ URI PORT และชื่อ
require('dotenv').config({path: './config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const res = require('express/lib/response');
const port = process.env.PORT || 4002

const staffRoute = require("./src/routes/staffRoute");

const borrowRoute = require("./src/routes/borrowRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());

require("./db")(app);

app.use("/staff", staffRoute);
app.use("/borrow", borrowRoute);

app.get("/", (req, res)=>{
    res.send("Hello from indrx");
});

app.listen(port, ()=>{
    console.log("App is runing on port " + port);
});


