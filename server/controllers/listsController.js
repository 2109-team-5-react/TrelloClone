const List = require("../models/list");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getLists = (req, res, next) => {
  List.find({}).then((lists) => {
    //, "title _id createdAt updatedAt").then((boards) => {
    res.json({
      lists,
    });
  });
};

const getList = (req, res, next) => {
  List.find({ _id: req.params.id }).then(
    //), "title _id createdAt updatedAt").then(
    (list) => {
      res.json({
        list,
      });
    }
  );
};

const createList = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    List.create(req.body.list)
      .then((list) => {
        List.find({ _id: list._id }).then(
          //), "title _id createdAt updatedAt").then(
          (list) => res.json({ list })
        );
      })
      .catch((err) =>
        next(new HttpError("Creating board failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

exports.getLists = getLists;
exports.getList = getList;
exports.createList = createList;
