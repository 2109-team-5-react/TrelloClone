const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The card title is required"],
    },
    dueDate: {
      type: Date,
      default: null,
    },
    labels: [String],
    description: String,
    listId: { type: Schema.Types.ObjectId, ref: "List" },
    boardId: { type: Schema.Types.ObjectId, ref: "Board" },
    postion: Number,
    commentsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
