import axios from 'axios'

const getPreferenceMP = async ({ inscription }) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/api/mercadopago/create_preference',
      data: inscription
    })
    console.log(response)
    return response
  } catch (error) {
    return error
  }
}
export { getPreferenceMP }
