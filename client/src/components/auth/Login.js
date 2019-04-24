import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'
import styled from 'styled-components'
import jwt from 'jsonwebtoken'

const FlexForm = styled.form`
  margin: 50px;
  display: flex;
  flex-direction: column;
`

const RedSpan = styled.span`
  font-size: 12px;
  color: red;
`

class Login extends Component {
  state = {
    userName: '',
    password: '',
    message: ''
  }

  handleTextChange = (e) => {
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  login = (e) => {
    e.preventDefault()
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...this.state })
    })
    .then(res => {
      if (res.status !== 200) throw new Error('user could not be found')
      return res.text()
    })
    .then(token => {
      // create cookie here
      const payload = jwt.verify(token, 'secret')
      return this.props.login(payload._doc)
    })
    .catch(err => this.setState({ message: err.message }))
    .then(() => this.setState({ userName: '', password: '' }))
  }

  render() {
    if (this.props.user.userName) {
      return (
        <Redirect to={{
          pathname: "/dashboard",
          state: { from: this.props.location }
        }} />
      )
    } else {
      return (
        <div>
          <FlexForm onSubmit={this.login}>
            <TextField
              onChange={this.handleTextChange}
              id="userName"
              label="Username"
              value={this.state.userName}
              variant="outlined" />
            <TextField
              onChange={this.handleTextChange}
              id="password"
              label="Password"
              value={this.state.password}
              variant="outlined" />
            <Button type="submit" variant="contained">Login</Button>
          </FlexForm>
          {this.state.message && <RedSpan>{this.state.message}</RedSpan>}
        </div>
      )
    }
  }
}

export default Login