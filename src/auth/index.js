import { API } from '../config'
import axios from 'axios'
const signin = async ({ email, password }) => {
  try {
    const response = await axios({
      method: 'POST',
      mode: 'cors',
      url: 'http://localhost:9000/api/signin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: { email, password }
    })
    console.log(response)
    return response
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
    console.log(obj.data)
    return obj.data
  } else {
    return false
  }
}
const signout = async (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt')
    next()
  } else {
    try {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:9000/api/signout'
      })
      console.log(response)
    } catch (error) { console.error(error) }
  }
}
export { isAuthenticated, authenticate, signin, signout }
