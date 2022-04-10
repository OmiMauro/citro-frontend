import { get } from './public-api-services'

const ENDPOINT = process.env.REACT_APP_API_ORGANIZATIONS_ENDPOINT
export const getOrganization = async (search = null) => {
	try {
		return await get(ENDPOINT)
	} catch (error) {
		console.log(error)
	}
}
