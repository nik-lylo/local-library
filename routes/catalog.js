const { Router } = require("express");
const book_controller = require("../controllers/BookController");

const router = Router();

///api/catalog/             GET catalog home page.
router.get("/", book_controller.getCatalogBooks);

module.exports = router;
