import axios from 'axios'
import config from './axiosConfig'

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

export { get }
