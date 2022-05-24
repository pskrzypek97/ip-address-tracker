const getJSON = async (url) => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.error(err.message);
	}
};

getJSON(
	'https://geo.ipify.org/api/v2/country?apiKey=at_hWKDLGgfJMFzmPvOspu5xQT3Do5Hc'
);
