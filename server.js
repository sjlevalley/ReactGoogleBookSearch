require("dotenv").config();
const express = require("express");
const router = require("./controllers");
const connectDb = require("./config/connectDb");
const session = require("./config/session");
const errorMiddleware = require("./util/errorMiddleware");
const app = express();

const PORT = process.env.PORT || 3001;


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

    app.use(
      express.urlencoded({ extended: true }),
      express.json(),
      session,
      router,
      errorMiddleware
    );
    app.listen(PORT, () => {
      console.log(`🌎 ==> Server listening on port ${PORT}!`);
    });
  } catch (error) {
    console.error(error);
  }
})();
