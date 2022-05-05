import { get } from './public-api-services'
import {
	get as getPrivate,
	post,
	put,
	remove,
	patch
} from './private-api-services'
const ENDPOINT = process.env.REACT_APP_API_MEMBERS_ENDPOINT

export const getMembers = async (search = null) => {
	return await get(ENDPOINT)
}
export const getMemberById = async (id) => {
	return await getPrivate(ENDPOINT, null, id)
}

export const newMember = async (data) => {
	return await post(ENDPOINT, data)
}

export const editMember = async (data, id) => {
	return await put(ENDPOINT, data, id)
}

export const deleteMember = async (id) => {
	return await remove(ENDPOINT, id)
}

export const editMemberImage = async (data, id) => {
	const url = `${ENDPOINT}/${id}/image`
	return await patch(url, data)
}
