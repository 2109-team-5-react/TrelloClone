const Board = require("../models/Board");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getBoards = (req, res, next) => {
  Board.find({})
    .then((boards) => {
      //, "title _id createdAt updatedAt").then((boards) => {
      res.json({
        boards,
      });
    })
    .catch((e) => {
      next(new HttpError("Couldn't find boards, please try again", 404));
    });
};

const getBoard = (req, res, next) => {
  Board.findOne({ _id: req.params.id })
    .populate({ path: "lists", populate: { path: "cards" } })
    .then(
      //), "title _id createdAt updatedAt").then(
      (board) => {
        res.json({
          board,
        });
      }
    )
    .catch((e) => {
      console.log(e);
      next(new HttpError("Couldn't find that board, please try again", 404));
    });
};

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body.board)
      .then((board) => {
        Board.find({ _id: board._id }).then(
          //), "title _id createdAt updatedAt").then(
          (board) => res.json({ board })
        );
      })
      .catch((err) =>
        next(new HttpError("Creating board failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const addListToBoard = (req, res, next) => {
  const list = req.list;
  const boardId = req.list.boardId;
  Board.findByIdAndUpdate(boardId, {
    $addToSet: { lists: list._id }, // adds list to the lists array in board
  }).then(() => {
    next();
  });
};

exports.getBoards = getBoards;
exports.getBoard = getBoard;
exports.createBoard = createBoard;
exports.addListToBoard = addListToBoard;
