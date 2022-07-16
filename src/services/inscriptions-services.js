import { get, post } from './private-api-services'
const ENDPOINT = process.env.REACT_APP_API_INSCRIPTIONS_ENDPOINT

export const getInscriptions = async (search) => {
	return await get(ENDPOINT, search)
}

export const createInscription = async () => {}
export const getAllInscriptionsByUser = async () => {}

export const getInscription = async () => {}
