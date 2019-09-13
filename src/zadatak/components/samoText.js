import React from 'react';

import '../css/style.scss';
import '../css/editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	RichText,
} = wp.blockEditor;

const {} = wp.components;

const {} = wp.element;

registerBlockType('visual-editor/samo-text', {
	title: __('samo tekst'),
	icon: 'edit',
	category: 'zadatak',
	attributes: {
		zadatakText: {
			type: 'string',
		},
	},

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {zadatakText} = attributes;

		function onChangeZadatakText(newText) {
			setAttributes({
				zadatakText: newText,
			})
		}

		return (

			<RichText
				value={zadatakText}
				onChange={onChangeZadatakText}
				placehlolder={__('Tekst zadataka')}
			/>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {zadatakText} = attributes;

		return (
			<RichText.Content
				tagName='p'
				value={zadatakText}
			/>
		);
	}
});
