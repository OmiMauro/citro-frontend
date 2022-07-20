import axios from 'axios'

const config = {
	baseURL: process.env.REACT_APP_API_GEO_REF,
	headers: {
		Accept: 'application/json text/plain',
		'Access-Control-Allow-Origin': '*',
	},
}
const instance = axios.create(config)
instance.interceptors.response.use(
	(response) => response,
	(error) => {
		return Promise.reject(error)
	}
)

const get = async (url, search = null, id = null) => {
	let processedURL = id ? `${url}/${id}` : url
	return await instance.get(processedURL, { params: search })
}
/* /provincias?campos=id,nombre */
export const getProvinces = async (search) => {
	let url = '/provincias'
	return await get(url, search)
}

export const getLocalities = async (search) => {
	let url = '/municipios'
	return await get(url, { ...search, max: 600 })
}
