import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import Router from './router'
import store from './redux/store'

const GlobalStyle = createGlobalStyle`
  body {
    /* background: #383838;
    color: #fff; */
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
`

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  </BrowserRouter>
)

export default App;
