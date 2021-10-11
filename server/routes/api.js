const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const cardsController = require("../controllers/cardsController");
const commentsController = require('../controllers/commentsController');
const {
  validateBoard,
  validateList,
  validateUpdateList,
  validateCard,
} = require("../validators/validators");

router.get("/boards", boardsController.getBoards);
router.get("/boards/:id", boardsController.getBoard);
router.get("/cards/:id", cardsController.getCard, cardsController.sendCard);

router.post(
  "/cards",
  validateCard,
  cardsController.getCardBoard,
  cardsController.createCard,
  listsController.addCardToList,
  cardsController.sendCard
);

router.put(
  "/cards/:id",
  cardsController.updateCard,
  cardsController.sendCard
)

router.post("/boards", validateBoard, boardsController.createBoard);
router.post(
  "/lists",
  validateList,
  listsController.createList,
  boardsController.addListToBoard,
  listsController.sendList
);
router.put(
  "/lists/:id",
  validateUpdateList,
  listsController.updateList,
  listsController.sendList
);

router.post(
  "/comments",
  commentsController.createComment,
  cardsController.addCommentToCard,
  commentsController.sendComment
);

module.exports = router;
