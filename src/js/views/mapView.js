import View from './View';
import { MAP_ZOOM } from '../config';

class MapView extends View {
	_parentElement = document.querySelector('.map');
	_data;
	_message = 'Failed to load the map. Please, try again!';

	renderMap(data) {
		this._data = data;
		this.clear();
		this._generateMap();
	}

	_generateMap() {
		const map = L.map('map').setView(this._getCoords(), MAP_ZOOM);

		return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map);
	}

	_getCoords() {
		const { latitude, longitude } = this._data.location.coords;
		return [latitude, longitude];
	}
}

export default new MapView();
