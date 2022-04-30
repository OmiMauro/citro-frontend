import { get } from './public-api-services'
import { put } from './private-api-services'
const ENDPOINT = process.env.REACT_APP_API_ORGANIZATIONS_ENDPOINT
export const getOrganization = async (search = null) => {
	return await get(ENDPOINT)
}

export const putOrganization = async (data) => {
	return await put(ENDPOINT, data)
}
