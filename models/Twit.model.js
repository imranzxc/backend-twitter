const mongoose = require('mongoose')

const twitSchema = mongoose.Schema({
  title: String,
  text: String,
  likes: [
    {
      ref: "Like",
      type: mongoose.SchemaTypes.ObjectId
    }
  ],


  
})

const Twit = mongoose.model('Twit', twitSchema)

module.exports =  Twit;