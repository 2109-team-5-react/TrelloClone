const List = require("../models/List");
const Board = require("../models/Board");
const Comment = require("../models/Comment");
const Card = require("../models/Card");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createComment = (req, res, next) => {
  console.log("creating comment");
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const newComment = {
      text: req.body.comment.text,
      cardId: req.body.cardId,
    };

    Comment.create(newComment)
      .then((comment) => {
        req.comment = comment;
        console.log(comment);
        next();
      })
      .catch((err) => {
        console.log(err);
        next(new HttpError("Creating comment failed, please try again", 500));
      });
  } else {
    return next(new HttpError("Need text and cardId.", 404));
  }
};

const sendComment = (req, res, next) => {
  res.json(req.comment);
};

exports.createComment = createComment;
exports.sendComment = sendComment;
