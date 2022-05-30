import icons from 'url:../../images/icons.svg';

export default class View {
	_data;

	clear() {
		this._parentElement.innerHTML = '';
	}

	renderSpinner() {
		const markup = `
        <div class="spinner">
			<svg>
				<use href="${icons}#icon-spinner11"></use>
		    </svg>
		</div>`;
		this.clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	renderError() {
		const markup = `
        <div class="error">
			<div>
				<svg>
					<use href="${icons}#icon-warning"></use>
				</svg>
			</div>
			<p>${this._message}</p>
		</div>`;
		this.clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	addHandlerRender(handler) {
		window.addEventListener('load', handler);
	}
}
