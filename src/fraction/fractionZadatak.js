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
	'visual-editor/fraction-title',
	'visual-editor/fraction-text',
];

registerBlockType('visual-editor/fraction', {
	title: __('razlomak'),
	icon: 'admin-plugins',
	category: 'razlomak',
	attributes: {},

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {} = attributes;

		return (
			<Fragment>
				<div className={`answer-holder assignment-container`}>
					<InnerBlocks
						allowedBlocks={allowed_blocks}
					/>
				</div>
			</Fragment>
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
