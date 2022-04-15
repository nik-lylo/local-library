export interface IBook {
  bookId: string;
  etag: string;
  title: string;
  language: string;
  description: string;
  categories: string[];
  authors: string;
  imageLink: string;
  publishedDate: string;
  publisher: string;
  mainCategories: string;
  pageCount: number;
  averageRating: number;
}
