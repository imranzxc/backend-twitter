const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
  commentUsername: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId
  },
  commentText: String,
  commentTwit: 
    {
      ref: "Twit",
      type: mongoose.SchemaTypes.ObjectId
    }
  

  
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports =  Comment;