const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const authorRouter = require("./routes/author");
const bookRouter = require("./routes/book");
const genreRouter = require("./routes/genre");
const catalogRouter = require("./routes/catalog");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/users", usersRouter);
app.use("/api/catalog", catalogRouter);
app.use("/api/genre", genreRouter);
app.use("/api/book", bookRouter);
app.use("/catalog/author", authorRouter);
app.use("/catalog/book", bookRouter);
// error handler
app.use(errorHandler);

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_DB_ACCESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}....`)
    );
  } catch (e) {
    console.log("Error start", e.message);
  }
}

start();

module.exports = app;
