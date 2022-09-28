import { get, post } from './private-api-services'
const ENDPOINT = process.env.REACT_APP_API_INSCRIPTIONS_ENDPOINT

export const getInscriptions = async (search) => {
	return await get(ENDPOINT, search)
}

export const newInscription = async ({ _eventId, data }) => {
	let url = `${ENDPOINT}/${_eventId}`
	return await post(url, data)
}
export const getAllInscriptionsByUser = async () => {}

export const getInscriptionById = async (_inscriptionId) => {
	return await get(ENDPOINT, null, _inscriptionId)
}
