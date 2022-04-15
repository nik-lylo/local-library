const mongoose = require("mongoose");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

const usersRouter = require("./routes/users");
const authorRouter = require("./routes/author");
const bookRouter = require("./routes/book");
const genreRouter = require("./routes/genre");
const catalogRouter = require("./routes/catalog");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

// connect to mongoDB

const app = express();

mongoose.connect(process.env.MONGO_DB_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.use("/api/catalog", catalogRouter);
app.use("/api/genre", genreRouter);
app.use("/api/book", bookRouter);
app.use("/catalog/author", authorRouter);
app.use("/catalog/book", bookRouter);
// error handler
app.use(errorHandler);

module.exports = app;
