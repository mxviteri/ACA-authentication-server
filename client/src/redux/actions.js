export function login(user) {
  return {
    type: 'LOGIN',
    value: user
  }
}

export function logout(movie) {
  return {
    type: 'LOGOUT'
  }
}