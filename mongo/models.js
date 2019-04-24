const mongoose = require('mongoose')
const { Auth } = require('./schemas')

const AuthModel = mongoose.model('Auth', Auth, 'auth')

module.exports = {
  AuthModel
}