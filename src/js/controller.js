import * as model from './model';
import dataView from './views/dataView';
import mapView from './views/mapView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
	module.hot.accept();
}

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

controlDataAndMap();
