import { get } from './public-api-services'

const ENDPOINT = process.env.REACT_APP_API_GALERY_ENDPOINT

export const getGalery = async (search = null) => {
	try {
		return await get(ENDPOINT)
	} catch (error) {
		alert(error)
	}
}
