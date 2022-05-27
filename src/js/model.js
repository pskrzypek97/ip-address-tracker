import { getJSON } from './helpers';
import { API_KEY, API_URL } from './config.js';

class Data {
	constructor(ip, location, timezone, isp) {
		this.ip = ip;
		this.location = location;
		this.timezone = timezone;
		this.isp = isp;
	}
}

export const state = { data: {} };

const createDataObject = (data) => {
	const { ip, location, isp } = data;
	const { region, city, lat, lng, timezone } = location;
	return new Data(
		ip,
		{
			city,
			region,
			coords: {
				lat,
				lng,
			},
		},
		timezone,
		isp
	);
};

export const loadData = async () => {
	try {
		const data = await getJSON(`${API_URL}${API_KEY}`);
		state.data = createDataObject(data);
	} catch (err) {
		throw err;
	}
};
