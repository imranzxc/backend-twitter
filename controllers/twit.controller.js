const Twit = require("../models/Twit.model");

module.exports.twitController = {
  postTwit: (req, res) => {
    Twit.create({
  title: req.body.title,
  text: req.body.text,
    })
      .then(() => {
        res.json("Twitt added");
      })
      .catch((err) => res.json(err));
  },
  getTwitById: (req, res) => {
  Twit.findById(req.params.id)
      .then((data) => {
        res.json(data);
      }).populate("likes")
      .catch((err) => res.json(err));
  },

  getTwit: (req, res) => {
    Twit.find()
      .then((data) => {
        res.json(data);
      })
      
  },

  patchTwitById: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
  title: req.body.title,
  text: req.body.text,
  $push: {likes: req.body.likes}
    }, {new: true})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  deleteTwitById: (req, res) => {
    Twit.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Twitt deleted");
      })
      .catch((err) => res.json(err));
  },
};