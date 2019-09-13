import React from 'react';

import '../css/style.scss';
import '../css/editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	InnerBlocks,
} = wp.blockEditor;

const {} = wp.components;

const {} = wp.element;

const allowed_blocks = [
	'visual-editor/fraction-input',
	'visual-editor/zadatak-text',
	'visual-editor/samo-text',
];

registerBlockType('visual-editor/fraction-form', {
	title: __('razlomak forma'),
	icon: 'edit',
	category: 'zadatak',
	attributes: {
		zadatakText: {
			type: 'string',
		},
	},

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {} = attributes;

		return (

			<div className={`assignment-fraction`}>
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
			<div className={`assignment-fraction`}>
				<InnerBlocks.Content/>
			</div>
		);
	}
});
