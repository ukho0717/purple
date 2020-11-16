import mongoose from 'mongoose';

const { Schema } = mongoose;

const GramSchema = new Schema({
    writeDate: {
        type: Date,
        default: Date.now
    },
    InstaImage: String,
    content: String,
    comment: [{
        nickName: String,
        text: String
    }],
    likeCount: {
        type: Number,
        default: 0
    },
    User:{
        user_nick: String,
        _id: String,
        profile_pic: String
    },
    likeUser: [String]
});

const Gram = mongoose.model('Gram', GramSchema);
export default Gram;