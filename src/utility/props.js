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
}
