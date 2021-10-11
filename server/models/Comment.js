const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Card = require('./Card');

const CommentSchema = new Schema(
  {
    cardId: {type: Schema.Types.ObjectId, ref: "Card", required: true},
    text: {type: String, required: true},
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;