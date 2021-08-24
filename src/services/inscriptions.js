import axios from 'axios'
const addInscription = async ({ inscription }) => {
  const response = await axios({
    method: 'POST',
    data: inscription,
    url: '/api/inscription'
  })
  return response
}
const getInscriptions = async ({ userId, token }) => {
  const response = await axios({
    method: 'GET',
    headers: { Authorization: `bearer ${token}` },
    url: `/api/inscription/${userId}`
  })
  return response
}
const getInscriptionByDNI = async ({ inscription }) => {
  const response = await axios({
    method: 'GET',
    data: inscription,
    url: '/api/inscription'
  })
  return response
}
const getInscriptionsApproved = async ({ userId, token }) => {
  const response = await axios({
    method: 'GET',
    headers: { Authorization: `bearer ${token}` },
    url: `/api/inscription/approved/${userId}`
  })
  return response
}
const getInscriptionsRejected = async ({ userId, token }) => {
  const response = await axios({
    method: 'GET',
    headers: { Authorization: `bearer ${token}` },
    url: `/api/inscription/rejected/${userId}`
  })
  return response
}
const getInscriptionsPending = async ({ userId, token }) => {
  const response = await axios({
    method: 'GET',
    headers: { Authorization: `bearer ${token}` },
    url: `/api/inscription/pending/${userId}`
  })
  return response
}
export { getInscriptions, addInscription, getInscriptionsApproved, getInscriptionsRejected, getInscriptionsPending, getInscriptionByDNI }
