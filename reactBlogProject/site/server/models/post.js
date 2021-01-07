import moment from 'moment';
import mongoose from 'mongoose';

//Create Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,
    },
    comments: {
        type: String,
        required: true,
    },
    vies: {
        type: Number,
        default: -2,
    },
    fileUrl: {
        type: String,
        default: "https://source.unsplash.com/random/301x201",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: category,
    },
    date:{
        type: String,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    comments: [
        {
            type: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "comment",
            },
        },
    ],
    creator:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }
});

const Post = mongoose.model("post", postSchema);

export default Post;