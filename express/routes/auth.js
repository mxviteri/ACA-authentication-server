const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const AuthController = require('../controllers/auth')

router.post('/signup', (req, res) => {
  AuthController.SignUp(req.body)
    .then(() => res.send('User created successfully'))
    .catch(err => res.status(400).send(err))
})

router.post('/login', (req, res) => {
  AuthController.Login(req.body)
    .then((result) => {
      if (!result) return res.status(404).send('no user found')
      const token = jwt.sign({ ...result }, "secret")
      return res.send(token)
    })
})

module.exports = router