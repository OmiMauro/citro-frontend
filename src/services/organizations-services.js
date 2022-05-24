import { get } from './public-api-services'
import { put } from './private-api-services'
const ENDPOINT = process.env.REACT_APP_API_ORGANIZATIONS_ENDPOINT
const ID_ORGANIZATION = process.env.REACT_APP_API_ID_ORGANIZATION

export const getOrganization = async (search = null) => {
	return await get(ENDPOINT, {}, ID_ORGANIZATION)
}

export const putOrganization = async (data) => {
	return await put(ENDPOINT, data, ID_ORGANIZATION)
}
