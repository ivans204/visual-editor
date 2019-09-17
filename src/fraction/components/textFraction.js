import React from 'react';
import '../css/style.scss';
import '../css/editor.scss';

import attr from '../props';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	RichText,
} = wp.blockEditor;

registerBlockType('visual-editor/fraction-text', {
	title: __('Tekst razlomka'),
	icon: 'editor-bold',
	category: 'razlomak',
	attributes: attr,

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {fractionText} = attributes;

		function onFractionTextChange(text) {
			setAttributes({
				fractionText: text,
			});
		}

		return (
			<RichText
				onChange={onFractionTextChange}
				value={fractionText}
				placeholder={__('Naslov')}
			/>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {fractionText} = attributes;

		return (
			<RichText.Content
				value={fractionText}
			/>
		);
	}
});
