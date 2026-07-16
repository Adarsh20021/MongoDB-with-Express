const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    message:{
        type: String,
        maxLength: 50
    },
    created_at:{
        type: Date,
        required: true
    }
});

//this will create a collection with name chats
const Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;