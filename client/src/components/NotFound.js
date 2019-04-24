import React, { Component } from 'react'
import styled from 'styled-components'

const Center = styled.div`
  display: flex;
  justify-content: center;
`

class NotFound extends Component {
  render() {
    return (
      <Center>
        <h1>404</h1>
      </Center>
    )
  }
}

export default NotFound