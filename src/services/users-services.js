import { get, patch, put } from './private-api-services'

const ENDPOINT_AUTH = process.env.REACT_APP_API_AUTH_ENDPOINT
const ENDPOINT_USERS = process.env.REACT_APP_API_USERS_ENDPOINT

export const getAllUsers = async () => {
	return await get(ENDPOINT_AUTH, null, null)
}

export const getUserById = async (id) => {
	return await get(ENDPOINT_USERS, null, id)
}

export const putUser = async (id, data) => {
	return await put(ENDPOINT_USERS, data, id)
}

export const patchPassword = async (id, data) => {
	let url = `${ENDPOINT_USERS}/${id}`
	return await patch(url, data)
}
