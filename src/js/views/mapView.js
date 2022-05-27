import View from './View';
import { MAP_ZOOM } from '../config';
import icons from 'url:../../images/icons.svg';

class MapView extends View {
	_parentElement = document.querySelector('.map');
	_data;
	_map;
	_message = 'Failed to load the map. Please, try again!';

	renderMap(data) {
		this._data = data;
		this.clear();
		this._generateMap();
		this._generateMarker();
	}

	_generateMap() {
		this._map = L.map('map').setView(this._getCoords(), MAP_ZOOM);

		return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(this._map);
	}

	_generateMarker() {
		const myIcon = L.divIcon({
			html: `
			<svg class="marker">
              <use href="${icons}#icon-map-pin-fill"></use>
            </svg>`,
			iconSize: [0, 0],
		});

		return L.marker(this._getCoords(), { icon: myIcon }).addTo(this._map);
	}

	_getCoords() {
		const { lat, lng } = this._data.location.coords;
		return [lat, lng];
	}
}

export default new MapView();
