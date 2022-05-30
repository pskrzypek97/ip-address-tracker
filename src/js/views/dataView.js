import View from './View';

class DataView extends View {
	_parentElement = document.querySelector('.results');
	_data;
	_message = 'Failed to get IP data. Please, try again!';

	renderData(data) {
		this._data = data;
		const markup = this._generateMarkup();
		this.clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	_generateMarkup() {
		return `
        <div class="results__container">
			<h2 class="heading-3 heading-3--ip-address">ip address</h2>
			<div class="heading-2 results__ip-address">${this._data.ip}</div>
		</div>

		<div class="results__container">
			<h2 class="heading-3 heading-3--location">location</h2>
			<div class="heading-2 results__location">${this._data.location.city}, ${this._data.location.region}</div>
		</div>

		<div class="results__container">
			<h2 class="heading-3 heading-3--timezone">timezone</h2>
			<div class="heading-2 results__timezone">UTC ${this._data.timezone}</div>
		</div>

		<div class="results__container">
			<h2 class="heading-3 heading-3--isp">isp</h2>
			<div class="heading-2 results__isp">${this._data.isp}</div>
		</div>`;
	}
}

export default new DataView();