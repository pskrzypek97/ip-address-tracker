import { TIMEOUT_IN_SEC } from './config';

const timeout = (s) => {
	return new Promise((_, reject) => {
		setTimeout(() => {
			reject(new Error(`Request took too long! Timeout after ${s} seconds`));
		}, s * 1000);
	});
};

export const getJSON = async (url) => {
	try {
		const res = await Promise.race([fetch(url), timeout(TIMEOUT_IN_SEC)]);
		const data = await res.json();

		if (!res.ok) throw new Error(`${data.message} (${res.status})`);

		return data;
	} catch (err) {
		throw err;
	}
};

export const isDomain = (query) => {
	const queryArr = query.split('');
	return queryArr.some((char) => /[a-zA-Z]/.test(char));
};
