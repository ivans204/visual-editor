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

registerBlockType('visual-editor/zadatak-text', {
	title: __('zadatak tekst'),
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
				tagName='span'
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
			<div className={`answer-holder assignment-container`}>
				<RichText.Content
					className={`inline`}
					tagName='p'
					value={zadatakText}
				/>
			</div>
		);
	}
});
