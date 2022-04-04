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
    url: `/api/inscription/all/${userId}`
  })
  return response
}
const getInscriptionByDNI = async ({ inscription }) => {
  return await axios({
    method: 'POST',
    data: inscription,
    url: '/api/inscriptionByDNI'
  })
    .then(res => res)
    .catch(error => {
      if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
        const err = { status: error.response.status, data: error.response.data }
        return err
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      console.log(error.config)
    })
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
