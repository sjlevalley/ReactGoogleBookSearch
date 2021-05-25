require("dotenv").config();
const express = require("express");
const router = require("./controllers");
// const connectDb = require("./config/connectDb");
// const session = require("./config/session");
const errorMiddleware = require("./util/errorMiddleware");
const app = express();

const PORT = process.env.PORT || 3001;


const mongoose = require("mongoose");

function connectDb() {

  (mongoose.connect('mongodb://localhost/google_books_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  )
};


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


(async () => {
  try {
    await connectDb();
    console.log(`🔌 MongoDB Connected`);

    const app = express();

    // trust proxy required for using secure cookies on Heroku
    app.set("trust proxy", 1);

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    // app.use(session),
    app.use(router),
      app.use(errorMiddleware);


    app.listen(PORT, () => {
      console.log(`🌎 ==> Server listening on port ${PORT}!`);
    });
  } catch (error) {
    console.error(error);
  }
})();
