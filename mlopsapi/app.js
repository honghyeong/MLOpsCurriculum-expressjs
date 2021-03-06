var express = require("express");
var app = express();
var logger = require("morgan");
// require("dotenv").config();
// const port = process.env.PORT;
// console.log(process.env);
// const userRouter = require("./routes/mem.route");
const userRouter = require("./routes/pg.route");

// app.use("/", postgresRouter); // postgres db
if (process.env.NODE_ENV !== "test") {
  app.use(logger("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log(`App running on port 3000.`);
});

module.exports = app;
