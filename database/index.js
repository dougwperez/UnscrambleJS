const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvpdb', { useNewUrlParser: true })
  .then(() => { console.log("MONGO CONNECTED") })
  .catch(() => { console.log("MONGO CONNECTION FAILED") })


const easyschema = new mongoose.Schema({
  Category: String,
  Question: String,
  Answer: String,
  Flag: Boolean,
  Score: Number
})

let EasyQ = mongoose.model('EasyQ', easyschema)


const mediumschema = new mongoose.Schema({
  Category: String,
  Question: String,
  Answer: String,
  Flag: Boolean,
  Score: Number
})

let MediumQ = mongoose.model('MediumQ', mediumschema)


const hardschema = new mongoose.Schema({
  Category: String,
  Question: String,
  Answer: String,
  Flag: Boolean,
  Score: Number
})

let HardQ = mongoose.model('HardQ', hardschema)


const contributeschema = new mongoose.Schema({
  Difficulty: String,
  Category: String,
  Question: String,
  Answer: String,
  Flag: Boolean,
  Score: Number
})

let Contribution = mongoose.model('Contribution', contributeschema)


module.exports = {
  EasyQ,
  MediumQ,
  HardQ,
  Contribution,
}