import * as model from './model';
import dataView from './views/dataView';
import mapView from './views/mapView';
import searchView from './views/searchView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlDataAndMap = async () => {
	try {
		// 0. Render spinner
		mapView.renderSpinner();

		// 1. Load ip data
		await model.loadData();

		// 2. Render the data in .results window
		dataView.renderData(model.state.data);

		// 3. Render map
		mapView.renderMap(model.state.data);
	} catch (err) {
		mapView.renderError();
	}
};

const controlSearchResult = async () => {
	try {
		// 1. Get search query
		const query = searchView.getQuery();
		if (!query) return;

		// 2. Load search result
		await model.loadSearchResult(query);

		// 3. Render the search data in .results window
		dataView.renderData(model.state.data);

		// 4. Load the result on map
		mapView.moveMap(model.state.data);
	} catch (err) {
		mapView.renderError();
		dataView.clear();
	}
};

const init = () => {
	dataView.addHandlerRender(controlDataAndMap);
	searchView.addHandlerSearch(controlSearchResult);
};

init();
