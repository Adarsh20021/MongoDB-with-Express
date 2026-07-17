const express = require("express");
const app = express();
// getting-started.js
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then(()=>{console.log("Connection successful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

//Index Route
app.get("/chats", async(req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})

app.get("/",(req,res)=>{
    res.send("Root is working");
});

app.listen(8080,()=>{
    console.log("Server is Listening on port 8080");
});