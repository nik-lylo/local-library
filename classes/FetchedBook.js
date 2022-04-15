class FetchedBook {
  constructor(eskiz) {
    this.bookId = eskiz.id;
    this.etag = eskiz.etag;
    this.title = eskiz.volumeInfo.title;
    this.language = eskiz.volumeInfo.language;
    this.description = eskiz.volumeInfo.description;
    this.categories = eskiz.volumeInfo.categories;
    this.mainCategories = eskiz.volumeInfo.mainCategory;
    this.averageRating = eskiz.volumeInfo.averageRating;
    this.pageCount = eskiz.volumeInfo.pageCount;
    this.authors = eskiz.volumeInfo.authors;
    if (eskiz.volumeInfo.imageLinks) {
      this.imageLink = eskiz.volumeInfo.imageLinks.thumbnail;
    } else {
      this.imageLink =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Noto_Emoji_Oreo_1f4d9.svg/300px-Noto_Emoji_Oreo_1f4d9.svg.png";
    }
    this.publishedDate = eskiz.volumeInfo.publishedDate;
    this.publisher = eskiz.volumeInfo.publisher;
  }
}

module.exports = FetchedBook;
