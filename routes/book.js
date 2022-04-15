const { Router } = require("express");
const BookController = require("../controllers/BookController");
const router = Router();

//  /api/book/:bookId

router.get("/:bookId", BookController.getBookById);

module.exports = router;
