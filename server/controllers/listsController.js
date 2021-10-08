const List = require("../models/List");
const Board = require("../models/Board");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createList = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const newList = {
      boardId: req.body.list.boardId,
      title: req.body.list.list.title,
      position: 65536,
      cards: [],
    };

    List.create(newList)
      .then((list) => {
        req.list = list;
        next();
      })
      .catch((err) => {
        console.log(err);
        next(new HttpError("Creating list failed, please try again", 500));
      });
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const addCardToList = (req, res, next) => {
  const card = req.card;
  const listId = req.card.listId;
  console.log(req);

  List.findByIdAndUpdate(listId, {
    $addToSet: { cards: card._id }, // adds list to the lists array in board
  }).then(() => {
    next();
  });
};

const sendList = (req, res, next) => {
  res.json(req.list);
};

const updateList = (req, res, next) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const id = req.params.id;
    List.findByIdAndUpdate(id, {
      title: req.body.list.title,
      position: req.body.list.position,
    })
      .then((list) => {
        req.list = list;
        next();
      })
      .catch((err) => {
        console.log(err);
        next(new HttpError("List not found", 404));
      });
  } else {
    return next(new HttpError("You must provide a title.", 422));
  }
};

// exports.getLists = getLists;
// exports.getList = getList;
exports.createList = createList;
exports.sendList = sendList;
exports.updateList = updateList;
exports.addCardToList = addCardToList;
