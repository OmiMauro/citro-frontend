import { post, remove } from './private-api-services'
import { get } from './public-api-services'

const ENDPOINT = process.env.REACT_APP_API_GALERY_ENDPOINT

export const getGalery = async (search = null) => {
	return await get(ENDPOINT)
}
export const newPictures = async (data) => {
	return await post(ENDPOINT, data)
}
export const deletePicture = async (id) => {
	return await remove(ENDPOINT, id)
}
