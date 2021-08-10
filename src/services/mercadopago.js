import axios from 'axios'

const getPreferenceMP = async () => {
  try {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:9000/api/payments/create_preference'
    })
    return response
  } catch (error) {
    return error
  }
}
export { getPreferenceMP }
