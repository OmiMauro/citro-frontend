import axios from 'axios'
import config from './axios-config'

const instance = axios.create(config)

instance.interceptors.request.use(
	(config) => {
		let token = localStorage.getItem('token')
		config.headers.Authorization = token ? `Bearer ${token}` : ''
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	(response) => response,
	(error) => {
		return Promise.reject(error)
	}
)

const get = async (url, search = null, id = null, ...config) => {
	let processedURL = id ? `${url}/${id}` : url
	return await instance.get(processedURL, { params: search, config })
}

const post = async (url, data) => await instance.post(url, data)

const put = async (url, data, id) => await instance.put(`${url}/${id}`, data)

const patch = async (url, data) => await instance.patch(url, data)

const remove = async (url, id) => await instance.delete(`${url}/${id}`)

export { get, post, put, remove, patch }
