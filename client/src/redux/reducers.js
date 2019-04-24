import { combineReducers } from 'redux'

const user = (state = {}, action) => {
  // state = ./state.js => user
  switch (action.type) {
    case 'LOGIN':
      return action.value
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}

export default combineReducers({
  user
})