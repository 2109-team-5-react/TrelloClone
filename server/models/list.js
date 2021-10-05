const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The list title is required"],
    },
    boardId: { type: Schema.Types.ObjectId, ref: "Board" },
    postition: { type: Number, default: 404 },
    cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
  },
  //{ timestamps: true }
);

const List = mongoose.model("List", ListSchema);

module.exports = List;
