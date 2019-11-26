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
		{label: 'podnaslov', value: 'h2'},
		{label: 'paragraf', value: 'p'},
		{label: 'tekst', value: 'span'},
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
