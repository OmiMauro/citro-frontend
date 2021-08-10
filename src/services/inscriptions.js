import axios from 'axios'
import { API } from '../config'
/* const getCount = async () => {
  const response = await axios({
    method: 'get',
    url: '/inscription/length'
  })
  return response.data.count
} */
const addInscription = async ({ inscription }) => {
  // const { name, lastName, DNI, numberCell, email, provinceOrigin, locationOrigin, distanceTour } = inscription
  const response = await axios({
    method: 'POST',
    data: inscription,
    url: `${API}/inscription`
  })
  return response
}
const getInscriptions = async ({ userId, token }) => {
  console.log(userId)
  const response = await axios({
    method: 'GET',
    mode: 'cors',
    headers: { Authorization: `Bearer ${token}` },
    url: `${API}/inscription/${userId}`
  })
  console.log(response)
  return response
  /* return response */
}
export { getInscriptions, addInscription }
