import { get } from './public-api-services'

const ENDPOINT = process.env.REACT_APP_API_SLIDES_ENDPOINT

export const getSlides = async (search = null) => {
	try {
		return await get(ENDPOINT)
	} catch (error) {
		alert(error)
	}
}
