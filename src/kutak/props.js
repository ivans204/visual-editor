export default {

	kutakOptions: [
		{label: 'Promislite', value: 0, kutakClass: 'promislite'},
		{label: 'Istrazite', value: 1, kutakClass: 'istrazite'},
		{label: 'Kutak plus', value: 2, kutakClass: 'plus'},
		{label: 'Kutak iz zabavne matematike', value: 3, kutakClass: 'iz-zabavne-matematike'},
		{label: 'Povijesni kutak', value: 4, kutakClass: 'povijesni-kutak'},
		{label: 'Bez riječi', value: 5, kutakClass: 'bez-rijeci'},

		{label: 'Zanimljivost', value: 6, kutakClass: 'zanimljivost'},
		{label: 'Pokus', value: 7, kutakClass: 'pokus'},
		{label: 'Ključni pojmovi', value: 8, kutakClass: 'kljucni-pojmovi'},
		{label: 'Napomena', value: 9, kutakClass: 'napomena'},
		{label: 'Sažetak', value: 10, kutakClass: 'sazetak'},
		{label: 'Za radoznale', value: 11, kutakClass: 'za-radoznale'},
	],

	kutakAllowedBlocks: ['visual-editor/text', 'core/image'],

	kutakSelected: {
		type: 'number',
		value: 0,
		default: 0,
	}

}
