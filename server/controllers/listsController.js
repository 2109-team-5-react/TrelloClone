const List = require("../models/List");
const Board = require("../models/Board");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

// const getLists = (req, res, next) => {
//   List.find({}).then((lists) => {
//     //, "title _id createdAt updatedAt").then((boards) => {
//     res.json({
//       lists,
//     });
//   });
// };

// const getList = (req, res, next) => {
//   List.find({ _id: req.params.id }).then(
//     //), "title _id createdAt updatedAt").then(
//     (list) => {
//       res.json({
//         list,
//       });
//     }
//   );
// };

// Bin.findOneAndUpdate({ binId: binId },  {$push: { requests: { request: reqObj } }}, { new: true } )

const createList = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const newList = {
      boardId: req.body.list.boardId,
      title: req.body.list.list.title,
      position: 65536,
      cards: []
    };

    List.create(newList)
      .then((list) => {
        req.list = list;
        next();
      })
      .catch((err) => {
        console.log(err)
        next(new HttpError("Creating list failed, please try again", 500))
      });
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const sendList = (req, res, next) => {
  res.json(req.list);
}

// exports.getLists = getLists;
// exports.getList = getList;
exports.createList = createList;
exports.sendList = sendList;
