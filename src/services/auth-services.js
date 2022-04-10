import { post } from './public-api-services'

const ENDPOINT_LOGIN = process.env.REACT_APP_API_AUTH_LOGIN_ENDPOINT
const ENDPOINT_REGISTER = process.env.REACT_APP_API_AUTH_REGISTER_ENDPOINT

export const register = async (data) => {
	return await post(ENDPOINT_REGISTER, data)
}

export const login = async (data) => {
	return await post(ENDPOINT_LOGIN, data)
}
