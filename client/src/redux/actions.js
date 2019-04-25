import axios from 'axios'
import jwt from 'jsonwebtoken'

export function login({ userName, password }) {
  return dispatch => {
    return axios({
      url: '/auth/login',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ userName, password })
    })
    .then(res => {
      document.cookie = `id_token=${res.data};max-age=300;`
      const payload = jwt.verify(res.data, 'secret')
      dispatch({
        type: 'LOGIN',
        value: payload._doc
      })
    })
    .catch(err => Promise.reject(err))
  }
}

export function logout() {
  return {
    type: 'LOGOUT'
  }
}

export function signUp({ userName, password }) {
  return dispatch => {
    return axios({
      url: '/auth/signup',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ userName, password })
    })
    .then((res) => dispatch(login({ userName, password })))
    .catch(err => Promise.reject(err))
  }
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    value: user
  }
}

export function updateUser(userName) {
  return dispatch => {
    return axios({
      url: '/auth/user',
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ userName }),
      withCredentials: true
    })
    .catch(err => Promise.reject(err))
  }  
}

export function updatePassword(password) {
  return dispatch => {
    return axios({
      url: '/auth/password',
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ password }),
      withCredentials: true
    })
    .catch(err => Promise.reject(err))
  }  
}