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
	const { ip, city, region, latitude, longitude, time_zone, asn } = data;
	return new Data(
		ip,
		{
			city,
			region,
			coords: {
				latitude,
				longitude,
			},
		},
		time_zone.offset,
		asn.name
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
