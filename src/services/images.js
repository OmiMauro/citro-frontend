import axios from 'axios'

const addImage = async ({ token, userId }) => {
  const response = await axios({
    method: 'POST',
    headers: { Authorization: `bearer ${token}` },
    url: `/api/images/${userId}`
  })
  return response
}

const getAllImages = async () => {
  const response = await axios({
    method: 'GET',
    url: '/api/images'
  })
  return response
}
const getImageById = async ({ id }) => {
  const response = await axios({
    method: 'GET',
    url: `/api/images/:${id}}`
  })
  return response
}

export { addImage, getAllImages, getImageById }
