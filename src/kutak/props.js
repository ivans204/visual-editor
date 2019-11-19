export default {
	/**
	 * Kutak
	 */
	kutakOptions: [
		{value: 0, label: 'Promislite', kutakClass: 'promislite'},
		{value: 1, label: 'Istrazite', kutakClass: 'istrazite'},
		{value: 2, label: 'Kutak plus', kutakClass: 'plus'},
		{value: 3, label: 'Kutak iz zabavne matematike', kutakClass: 'iz-zabavne-matematike'},
		{value: 4, label: 'Povijesni kutak', kutakClass: 'povijesni-kutak'},
		{value: 5, label: 'Bez riječi', kutakClass: 'bez-rijeci'},
		{value: 6, label: 'Zanimljivost', kutakClass: 'zanimljivost'},
		{value: 7, label: 'Pokus', kutakClass: 'pokus'},
		{value: 8, label: 'Ključni pojmovi', kutakClass: 'kljucni-pojmovi'},
		{value: 9, label: 'Napomena', kutakClass: 'napomena'},
		{value: 10, label: 'Sažetak', kutakClass: 'sazetak'},
		{value: 11, label: 'Za radoznale', kutakClass: 'za-radoznale'},
	],

	kutakAllowedBlocks: ['visual-editor/text', 'visual-editor/kutak-img', 'core/image'],

	kutakSelected: {
		default: 0,
	},

	/**
	 * Kutak slika
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
		default: 'none',
	},

	kutakBlueCircle: {
		default: false,
	}
}
