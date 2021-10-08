const List = require("../models/List");
const Board = require("../models/Board");
const Card = require("../models/Card");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getCard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const id = req.params.id;
    Card.findById(id)
      .then((card) => {
        req.card = card;
        next();
      })
      .catch((err) => {
        console.log(err);
        next(new HttpError("Card not found", 404));
      });
  } else {
    return next(new HttpError("You must provide a title.", 422));
  }
};

const getCardBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    console.log(req.body.listId);
    List.findOne({ _id: req.body.listId })
      .then((list) => {
        req.boardId = list.boardId;
        console.log(req);
        next();
      })
      .catch((err) => {
        console.log(err);
        next(new HttpError("Could not find list", 500));
      });
  } else {
    return next(new HttpError("Board not found", 404));
  }
};

const createCard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const newCard = {
      listId: req.body.listId,
      title: req.body.card.title,
      boardId: req.boardId,
    };

    Card.create(newCard)
      .then((card) => {
        req.card = card;
        next();
      })
      .catch((err) => {
        console.log(err);
        next(new HttpError("Creating card failed, please try again", 500));
      });
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const sendCard = (req, res, next) => {
  res.json(req.card);
};

const updateCard = (req, res, next) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const id = req.params.id;
    Card.findByIdAndUpdate(id, {
      // title: req.body.list.title,
      // position: req.body.list.position,
    })
      .then((list) => {
        req.list = list;
        next();
      })
      .catch((err) => {
        console.log(err);
        next(new HttpError("Card not found", 404));
      });
  } else {
    return next(new HttpError("You must provide a title.", 422));
  }
};

exports.getCard = getCard;
// exports.getLists = getLists;
// exports.getList = getList;
exports.getCardBoard = getCardBoard;
exports.createCard = createCard;
exports.sendCard = sendCard;
exports.updateCard = updateCard;
