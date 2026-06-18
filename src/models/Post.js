const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
    {
        title: String,

        content: String,

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },

    {
        timeseries: true
    }
);

module.exports = monggose.model("Post", postSchema);