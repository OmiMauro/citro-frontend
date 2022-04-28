import { get } from './public-api-services'
import { get as getPrivate, post, put, remove } from './private-api-services'
const ENDPOINT = process.env.REACT_APP_API_SLIDES_ENDPOINT

export const getSlides = async (search = null) => {
	return await get(ENDPOINT)
}
export const getSlideById = async (id) => {
	return await getPrivate(ENDPOINT, null, id)
}
export const newSlide = async (data) => {
	return await post(ENDPOINT, data)
}
export const putSlide = async (data, id) => {
	return await put(ENDPOINT, data, id)
}
export const deleteSlide = async (id) => {
	return await remove(ENDPOINT, id)
}
