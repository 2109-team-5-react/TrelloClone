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
    description: String,
    listId: { type: Schema.Types.ObjectId, ref: "List" },
    boardId: { type: Schema.Types.ObjectId, ref: "Board" },
    position: { type: Number, default: 65535 },
    archived: { type: Boolean, default: false },
    comments: [{ type: String }],
    actions: [{ type: String }],
    labels: [String],
    completed: { type: Boolean, default: false },
    commentsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", CardSchema);

module.exports = Card;
