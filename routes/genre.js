const { Router } = require("express");
const genre_controller = require("../controllers/GenreController");
const router = Router();

///api/genre/:genreName         GET request for one Genre.

router.get("/:genreName", genre_controller.getGenreByName);

module.exports = router;
