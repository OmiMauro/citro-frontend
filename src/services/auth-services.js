import { post, get } from './public-api-services'

const ENDPOINT_LOGIN = process.env.REACT_APP_API_AUTH_LOGIN_ENDPOINT
const ENDPOINT_REGISTER = process.env.REACT_APP_API_AUTH_REGISTER_ENDPOINT
const ENDPOINT_AUTH = process.env.REACT_APP_API_AUTH_ENDPOINT

export const register = async (data) => {
	return await post(ENDPOINT_REGISTER, data)
}

export const login = async (data) => {
	return await post(ENDPOINT_LOGIN, data)
}

export const forgotPwd = async (data) => {
	return await post(`${ENDPOINT_AUTH}/forgot-password`, data)
}

export const verifyTokenService = async (token) => {
	return await get(`${ENDPOINT_AUTH}/forgot-password/${token}`)
}

export const resetPwd = async (data, token) => {
	return await post(`${ENDPOINT_AUTH}/reset-password/${token}`, data)
}

export const verificationEmail = async (token) => {
	return await post(`${ENDPOINT_AUTH}/confirm-account/${token}`)
}
