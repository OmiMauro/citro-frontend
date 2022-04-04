/* import { API } from '../config' */
import axios from 'axios'
const signin = async ({ email, password }) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/signin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: { email, password }
    })
    if (response) return response.data
    else {
      console.log('error')
    }
  } catch (error) {
    console.log(error)
  }
}
const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data))
    next()
  }
}
const signout = async (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt')
    next()

    const response = await axios({
      method: 'GET',
      url: '/api/signout'
    })
    return response
  }
}

const isAuthenticated = () => {
  if (typeof window === 'undefined') {
    return false
  } if (localStorage.getItem('jwt')) {
    /*  const obj = JSON.parse(localStorage.getItem('jwt')) */
    return JSON.parse(localStorage.getItem('jwt'))
  } else {
    return false
  }
}

export { isAuthenticated, authenticate, signin, signout }
