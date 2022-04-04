import { get } from './publicApiServices';

const ENDPOINT = process.env.REACT_APP_API_MEMBERS_ENDPOINT;

export const getMembers = async (search = null) => {
	try {
		return await get(ENDPOINT);
	} catch (error) {
		alert(error);
	}
};
