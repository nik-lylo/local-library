const FetchedBook = require("../classes/FetchedBook");
const RequestBookApi = require("../helper/RequestBookApi");

class BookController {
  async getCatalogBooks(req, res, next) {
    try {
      const aboutWarFetch = await RequestBookApi.seekByWord(
        "war battle ww",
        next
      );
      const aboutLoveFetch = await RequestBookApi.seekByWord(
        "love sex relationship",
        next
      );
      const aboutComicsFetch = await RequestBookApi.seekByWord(
        "comics superman superhero batman",
        next
      );
      const war = aboutWarFetch.items.map((it) => {
        return new FetchedBook(it);
      });
      const love = aboutLoveFetch.items.map((it) => {
        return new FetchedBook(it);
      });
      const comics = aboutComicsFetch.items.map((it) => {
        return new FetchedBook(it);
      });

      res.json({
        message: {
          war,
          love,
          comics,
        },
        response: aboutWarFetch,
      });
    } catch (e) {
      next(e);
    }
  }
  async getBookById(req, res, next) {
    try {
      const params = req.params.bookId;
      console.log(params);

      const response = await RequestBookApi.seekById(params, next);
      res.json({ message: response });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BookController();
