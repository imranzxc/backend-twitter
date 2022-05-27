const User = require("../models/User.model");

module.exports.userController = {
  postUser: (req, res) => {
    User.create({
      userName: req.body.userName,
      saved: req.body.saved,
    })
      .then(() => {
        res.json("Пользователь создан");
      })
      .catch((err) => res.json(err));
  },
  getUserById: (req, res) => {
    User.findById(req.params.id)
      .then((data) => {
        res.json(data);
      }).populate('saved')
      .catch((err) => res.json(err));
  },

  getUser: (req, res) => {
    User.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  patchUserById: (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
      userName: req.body.userName,
      $push: {saved: req.body.saved}
    })
      .then(() => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  deleteUserById: (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Пользователь удален");
      })
      .catch((err) => res.json(err));
  },
};
