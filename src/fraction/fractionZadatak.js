import React from 'react';

import './css/style.scss';
import './css/editor.scss';

import attr from './props';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	InnerBlocks,
} = wp.blockEditor;

const {} = wp.components;

const {} = wp.element;

const allowed_blocks = [
	'visual-editor/text',
	'visual-editor/zadatak-buttons',
];

registerBlockType('visual-editor/fraction', {
	title: __('razlomak'),
	icon: 'admin-plugins',
	category: 'razlomak',
	attributes: attr,

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {} = attributes;

		return (
			<div className={`answer-holder assignment-container`}>
				<InnerBlocks
					allowedBlocks={allowed_blocks}
				/>
			</div>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {} = attributes;

		return (
			<div className={`answer-holder assignment-container`}>
				<InnerBlocks.Content/>
			</div>
		);
	}
});
