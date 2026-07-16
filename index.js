const express = require("express");
const app = express();
// getting-started.js
const mongoose = require("mongoose");
const path = require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then(()=>{console.log("Connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

app.get("/",(req,res)=>{
    res.send("Root is working");
});

app.listen(8080,()=>{
    console.log("Server is Listening on port 8080");
});