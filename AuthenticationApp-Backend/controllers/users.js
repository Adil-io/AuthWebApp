const HttpStatus = require("http-status-codes");

const User = require("../models/userModels");

module.exports = {
  async GetUser(req, res) {
    await User.findOne({ _id: req.params.id })
      .then((result) => {
        res.status(HttpStatus.OK).json({ message: "User by id", result });
      })
      .catch((err) => {
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: "Error getting user by id" });
      });
  },

  async GetUserByName(req, res) {
    await User.findOne({ username: req.params.username })
      .then((result) => {
        res.status(HttpStatus.OK).json({ message: "User by name", result });
      })
      .catch((err) => {
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: "Error getting user by name" });
      });
  },
};
