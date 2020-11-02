import mongoose, { Schema } from 'mongoose';

var chatSchema = Schema({
    idx : mongoose.Schema.Types.ObjectId,
    date : {type : Date, default:Date.now, required : true},
    roomname: String,
    username: String,
    message: String,
    users: [String]
});

var Chat = mongoose.model('Chat', chatSchema);

export default Chat;