const Comment = require("../models/Comment.model");

module.exports.commentController = {
  postComment: (req, res) => {
    Comment.create({
      commentUsername: req.body.commentUsername,
      commentText: req.body.commentText,
      commentTwit: req.body.commentTwit
    })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.json(err));
  },
  getCommentById: (req, res) => {
  Comment.findById(req.params.id)
      .then((data) => {
        res.json(data);
      }).populate('commentUsername')
      .catch((err) => res.json(err));
  },

  getComment: (req, res) => {
    Comment.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  patchCommentById: (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, {
      commentText: req.body.commentText,
    })
      .then(() => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  },

  deleteCommentById: (req, res) => {
    Comment.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Comment deleted");
      })
      .catch((err) => res.json(err));
  },
};