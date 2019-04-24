const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Auth = new Schema({
  userName: String,
  password: String
})

module.exports = { Auth }