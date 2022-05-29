import { get } from './private-api-services'

const ENDPOINT_AUTH = process.env.REACT_APP_API_AUTH_ENDPOINT
const ENDPOINT_USERS = process.env.REACT_APP_API_USERS_ENDPOINT

export const getAllUsers = async () => {
	return await get(ENDPOINT_AUTH, null, null)
}

export const getUserById = async (id) => {
	return await get(ENDPOINT_USERS, null, id)
}
