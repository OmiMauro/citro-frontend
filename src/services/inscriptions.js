import axios from 'axios'

const addInscription = async ({ inscription }) => {
  // const { name, lastName, DNI, numberCell, email, provinceOrigin, locationOrigin, distanceTour } = inscription
  const response = await axios({
    method: 'POST',
    data: inscription,
    url: '/api/inscription'
  })
  return response
}
const getInscriptions = async ({ userId, token }) => {
  console.log('userId', userId, 'token', token)
  const response = await axios({
    method: 'GET',
    headers: { Authorization: `bearer ${token}` },
    url: `/api/inscription/${userId}`
  })
  return response
}
export { getInscriptions, addInscription }
