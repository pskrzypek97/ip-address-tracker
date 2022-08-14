import View from './View';

class DataView extends View {
	_parentElement = document.querySelector('.results');
	_message = 'No IP found.;';
	#data;

	renderData(data) {
		this.#data = data;
		const markup = this.#generateMarkup();
		this.clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	#generateMarkup() {
		return `
        <div class="results__container">
			<h2 class="heading-3 heading-3--ip-address">ip address</h2>
			<div class="heading-2 results__ip-address">${this.#handleNoData(
				this.#data.ip
			)}</div>
		</div>

		<div class="results__container">
			<h2 class="heading-3 heading-3--location">location</h2>
			<div class="heading-2 results__location">${this.#handleNoData(
				this.#data.location.city
			)}, ${this.#handleNoData(this.#data.location.region)}</div>
		</div>

		<div class="results__container">
			<h2 class="heading-3 heading-3--timezone">timezone</h2>
			<div class="heading-2 results__timezone">UTC ${this.#handleNoData(
				this.#data.timezone
			)}</div>
		</div>

		<div class="results__container">
			<h2 class="heading-3 heading-3--isp">isp</h2>
			<div class="heading-2 results__isp">${this.#handleNoData(this.#data.isp)}</div>
		</div>`;
	}

	#handleNoData(data) {
		return !data ? 'No data found' : data;
	}
}

export default new DataView();
