import axios from 'axios'
import config from './axios-config'

const instance = axios.create(config)

instance.interceptors.response.use(
	function (response) {
		return response
	},
	function (error) {
		const msg = 'Por favor, intente nuevamente'
		return Promise.reject(msg, 'error')
	}
)

const get = async (url, search = null, id = null) => {
	let processedURL = id ? `${url}/${id}` : url
	return await instance.get(url, { params: search })
}

const post = async (url, data) => await instance.post(url, data)

const put = async (url, data, id) => await instance.put(`${url}/${id}`, data)

const remove = async (url, id) => await instance.delete(`${url}/${id}`)

export { get }
