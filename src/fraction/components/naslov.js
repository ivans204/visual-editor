import React from 'react';
import '../css/style.scss';
import '../css/editor.scss';

import attr from '../props';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	RichText,
} = wp.blockEditor;

const {} = wp.components;

const {} = wp.element;

registerBlockType('visual-editor/fraction-title', {
	title: __('Naslov'),
	icon: 'editor-textcolor',
	category: 'razlomak',
	attributes: attr,

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {fractionTitle} = attributes;

		function onFractionTitleChange(title) {
			setAttributes({
				fractionTitle: title,
			});
		}

		return (
			<RichText
				tagName='h2'
				onChange={onFractionTitleChange}
				value={fractionTitle}
				placeholder={__('Naslov')}
			/>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {fractionTitle} = attributes;

		return (
			<RichText.Content
				tagName='h2'
				value={fractionTitle}
			/>
		);
	}
});
