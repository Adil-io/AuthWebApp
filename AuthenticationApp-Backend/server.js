const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const _ = require("lodash");
// const logger = require('morgan');

const app = express();

app.use(cors());

const server = require("http").createServer(app);

const dbConfig = require("./config/secret");
const auth = require("./routes/authRoutes");
const users = require("./routes/userRoutes");

app.use(cookieParser());

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/chatapp", auth);
app.use("/api/chatapp", users);

server.listen(3000, () => {
  console.log("Running on port 3000");
});
