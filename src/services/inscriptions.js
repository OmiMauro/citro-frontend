import axios from 'axios'

const addInscription = async ({ inscription }) => {
  // const { name, lastName, DNI, numberCell, email, provinceOrigin, locationOrigin, distanceTour } = inscription
  const response = await axios({
    method: 'POST',
    data: inscription,
    url: '/api/inscription'
  })
  console.log(response)
  return response
}
const getInscriptions = async ({ userId, token }) => {
  const response = await axios({
    method: 'GET',
    mode: 'cors',
    headers: { Authorization: `Bearer ${token}` },
    url: `/api/inscription/${userId}`
  })
  return response
}
export { getInscriptions, addInscription }
