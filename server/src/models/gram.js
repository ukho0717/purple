import mongoose from 'mongoose';

const { Schema } = mongoose;

const GramSchema = new Schema({
    writeDate: {
        type: Date,
        default: Date.now
    },
    InstaImage: String,
    content: String,
    comment: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    User:{
        user_nick: String
    }
});

const Gram = mongoose.model('Gram', GramSchema);
export default Gram;