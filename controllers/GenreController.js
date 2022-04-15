const RequestBookApi = require("../helper/RequestBookApi");
const FetchedBook = require("../classes/FetchedBook");

class GenreController {
  async getGenreByName(req, res, next) {
    try {
      const [params, index] = req.params.genreName.split("=");
      const newIndex = index * 10 - 10;

      const response = await RequestBookApi.seekByWordPagination(
        params,
        newIndex,
        next
      );
      const result = response.items.map((it) => new FetchedBook(it));
      res.json({ message: result, totalItems: response.totalItems });
    } catch (e) {
      next();
    }
  }
}

module.exports = new GenreController();
