import { get } from './publicApiServices';

const ENDPOINT = process.env.REACT_APP_API_ORGANIZATIONS_ENDPOINT;
export const getOrganization = async (search = null) => {
	try {
		return await get(ENDPOINT);
	} catch (error) {
		alert(error);
	}
};