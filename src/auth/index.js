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
    return response.data
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

const isAuthenticated = () => {
  if (typeof window === 'undefined') {
    return false
  } if (localStorage.getItem('jwt')) {
    const obj = JSON.parse(localStorage.getItem('jwt'))
    console.log(obj)
    return obj
  } else {
    return false
  }
}
const signout = async (next) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem('jwt')
      next()
      const response = await axios({
        method: 'GET',
        url: '/api/signout'
      })
      return response
    } catch (error) { console.error(error) }
  }
}
export { isAuthenticated, authenticate, signin, signout }
