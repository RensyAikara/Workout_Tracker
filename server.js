const express = require("express");
const mongoose = require("mongoose")
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api-Routes.js"));
app.use(require("./routes/html-Routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});  