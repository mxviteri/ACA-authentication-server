import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import styled from 'styled-components'

const FlexForm = styled.form`
  margin: 50px;
  display: flex;
  flex-direction: column;
`

const RedSpan = styled.span`
  font-size: 12px;
  color: red;
`

class SignUp extends Component {
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

  signUp = (e) => {
    e.preventDefault()
    this.props.signUp({ ...this.state })
      .catch(err => this.setState({ userName: '', password: '', message: err.response.data }))
  }

  render() {
    return (
      <div>
        <FlexForm onSubmit={this.signUp}>
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
          <Button type="submit" variant="contained">Signup</Button>
        </FlexForm>
        {this.state.message && <RedSpan>{this.state.message}</RedSpan>}
      </div>
    )
  }
}

export default SignUp