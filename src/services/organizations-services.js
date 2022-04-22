import { get } from './public-api-services'

const ENDPOINT = process.env.REACT_APP_API_ORGANIZATIONS_ENDPOINT
const BASE_URL = process.env.REACT_APP_API_BASE_URL
export const getOrganization = async (search = null) => {
	try {
		console.log('ENDPOINT', ENDPOINT)
		console.log('BASE URL', BASE_URL)

		return await get(ENDPOINT)
	} catch (error) {
		console.log(error)
	}
}
