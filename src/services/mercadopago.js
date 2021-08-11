import axios from 'axios'

const getPreferenceMP = async ({ inscription }) => {
  try {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:9000/api/mercadopago/create_preference',
      data: inscription
    })
    console.log(response)
    return response
  } catch (error) {
    return error
  }
}
export { getPreferenceMP }
