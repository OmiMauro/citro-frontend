import axios from 'axios'

const getPreferenceMP = async ({ inscription }) => {
  return await axios({
    method: 'POST',
    url: '/api/mercadopago/create_preference',
    data: inscription
  })
    .then(res => {
      return res
    })
    .catch(function (error) {
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
const saveInscription = async ({ inscription }) => {
  return await axios({
    method: 'POST',
    url: '/api/inscription',
    data: inscription
  })
    .then(res => {
      return res
    })
    .catch(function (error) {
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
export { getPreferenceMP, saveInscription }
