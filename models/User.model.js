const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  userName: String,
  saved: [
    {
      ref: "Twit",
      type: mongoose.SchemaTypes.ObjectId
    }
  ]
})

const User = mongoose.model('User', userSchema)

module.exports = User;