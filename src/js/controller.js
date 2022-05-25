import * as model from './model';
import dataView from './views/dataView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
	module.hot.accept();
}

const controlData = async () => {
	try {
		// 0. Render spinner
		dataView.renderSpinner();

		// 1. Load ip data
		await model.loadData();

		// 2. Render the data in .results window
		dataView.renderData(model.state.data);
	} catch (err) {
		dataView.renderError();
	}
};

controlData();
