import { get } from './private-api-services'
const ENDPOINT = process.env.REACT_APP_API_INSCRIPTIONS_ENDPOINT

export const getInscriptionsByEvent = async (eventId, search) => {
	const url = `${ENDPOINT}/${eventId}/event`
	console.log(url)
	return await get(url, search)
}
