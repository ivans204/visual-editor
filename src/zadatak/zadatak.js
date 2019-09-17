import React from 'react';

import './css/style.scss';
import './css/editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	RichText,
	InnerBlocks,
} = wp.blockEditor;

const {} = wp.components;

const {Fragment} = wp.element;

const allowed_blocks = [
	'visual-editor/single-input',
	'visual-editor/fraction-form',
	'visual-editor/zadatak-text',
	'visual-editor/zadatak-buttons',
	'visual-editor/samo-text',
];

registerBlockType('visual-editor/zadatak', {
	title: __('zadatak'),
	icon: 'admin-plugins',
	category: 'zadatak',
	attributes: {
		zadatakTitle: {
			type: 'string',
		},
	},

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {zadatakTitle} = attributes;

		function onChangeZadatakTitle(newTitle) {
			setAttributes({
				zadatakTitle: newTitle,
			})
		}

		return (
			<Fragment>

				<div className={`answer-holder assignment-container`}>
					<RichText
						tagName='h2'
						value={zadatakTitle}
						onChange={onChangeZadatakTitle}
						placeholder={__('Naslov zadatka')}
					/>

					<InnerBlocks
						allowedBlocks={allowed_blocks}
					/>

				</div>
			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {zadatakTitle} = attributes;

		function randomString() {
			return Math.random().toString(36).substring(2, 7);
		}

		return (
			<div className={`answer-holder assignment-container`}>
				<RichText.Content
					tagName='h2'
					value={zadatakTitle}
				/>
				<InnerBlocks.Content/>
			</div>
		);
	}
});
