const fetch = require("node-fetch");
const ApiError = require("../error/ApiError");

class RequestBookApi {
  async seekByWord(word, next) {
    try {
      const wordsJoined = word.split(" ").join("+");
      const url = `https://www.googleapis.com/books/v1/volumes?q=${wordsJoined}&orderBy=newest&AIzaSyD4pxDoeLV5QzkjHrla65pThA6z5uQQwos`;
      const result = await fetch(url);
      if (!result.ok) {
        next(ApiError.badRequest("No connect with Google Books API"));
      }
      return result.json();
    } catch (e) {
      throw new Error(e.message);
    }
  }
  async seekByWordPagination(word, index, next) {
    try {
      const wordsJoined = word.split(" ").join("+");
      const url = `https://www.googleapis.com/books/v1/volumes?q=${wordsJoined}&orderBy=newest&startIndex=${index}&AIzaSyD4pxDoeLV5QzkjHrla65pThA6z5uQQwos`;
      const result = await fetch(url);
      if (!result.ok) {
        next(ApiError.badRequest("No connect with Google Books API"));
      }
      return result.json();
    } catch (e) {
      throw new Error(e.message);
    }
  }
  async seekById(id, next) {
    try {
      console.log(id);
      const url = `https://books.google.com/ebooks?id=${id}`;
      const result = await fetch(url);

      if (!result.ok) {
        next(ApiError.badRequest("No connect with Google Books API"));
      }
      return result.json();
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

module.exports = new RequestBookApi();
