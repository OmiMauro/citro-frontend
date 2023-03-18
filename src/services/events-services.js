import { get } from './public-api-services'
import { post, put, remove, get as getPrivate } from './private-api-services'
//import download from 'download'
const ENDPOINT = process.env.REACT_APP_API_EVENTS_ENDPOINT

export const getEvents = async (search = null) => {
	return await get(ENDPOINT, search, null)
}

export const getEventById = async (id, search = null) => {
	return await get(ENDPOINT, search, id)
}

export const newEvent = async (data) => {
	return await post(ENDPOINT, data)
}
export const editEvent = async (id, data) => {
	return await put(ENDPOINT, data, id)
}
export const newChronogram = async (id, data) => {
	return await post(`${ENDPOINT}/${id}/chronogram`, data)
}

export const editChronogram = async ({ id, chronogramId }, data) => {
	return await put(`${ENDPOINT}/${id}/chronogram`, data, chronogramId)
}
export const deleteChronogram = async ({ id, chronogramId }) => {
	return await remove(`${ENDPOINT}/${id}/chronogram`, chronogramId)
}

export const getInscriptionsByEvent = async (_eventId, search) => {
	const url = `${ENDPOINT}/${_eventId}/inscriptions`
	return await getPrivate(url, search)
}

export const getInscriptionsByEventPDF = async (_eventId) => {
	const url = `${ENDPOINT}/${_eventId}/inscriptions/create-pdf`

	return await getPrivate(url, null, null, { responseType: 'blob' })
}
