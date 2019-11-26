export default {
	fractionTitle: {
		type: 'string',
	},
	fractionText: {
		type: 'string',
	},

	textType: {
		type: 'string',
		default: 'p',
	},

	textContent: {
		type: 'string',
	},

	textOptions: [
		{label: 'Podnaslov', value: 'h2'},
		{label: 'Primjer podnaslov', value: 'h3'},
		{label: 'Paragraf', value: 'p'},
		{label: 'Tekst', value: 'span'},
	],

	/**
	 * Image Upload
	 */

	imgUrl: {
		default: 'http://placehold.it/300',
	},

	imgWidth: {
		default: 250,
	},

	imgHeight: {
		default: 250,
	},

	imgAlign: {
		default: 'center',
	},
	imgZoom: {
		default: false,
	}
}
