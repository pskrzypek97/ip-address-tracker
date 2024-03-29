import View from './View';
import { MAP_ZOOM, DEFAULT_COORDS } from '../config';
import icons from 'url:../../images/icons.svg';

class MapView extends View {
	_parentElement = document.querySelector('.map');
	#data;
	#map;
	#marker;

	renderMap(data) {
		this.#data = data;
		this.#generateMap();
		this.#generateMarker();
	}

	moveMap(data) {
		this.#data = data;
		this.#map.panTo(this.#getCoords());
		this.#marker.setLatLng(this.#getCoords());
	}

	moveMapOnError() {
		this.#map.panTo(DEFAULT_COORDS);
		this.#marker.setLatLng(DEFAULT_COORDS);
	}

	#generateMap() {
		this.#map = L.map('map', { zoomControl: false }).setView(
			this.#getCoords(),
			MAP_ZOOM
		);

		return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(this.#map);
	}

	#generateMarker() {
		const myIcon = L.divIcon({
			html: `
			<svg class="marker">
              <use href="${icons}#icon-map-pin-fill"></use>
            </svg>`,
			className: 'marker',
			iconSize: [80, 80],
			iconAnchor: [40, 80],
		});

		this.#marker = L.marker(this.#getCoords(), { icon: myIcon }).addTo(
			this.#map
		);
	}

	#getCoords() {
		const { lat, lng } = this.#data.location.coords;
		return [lat, lng];
	}
}

export default new MapView();
