import React from 'react';
import '../css/style.scss';
import '../css/editor.scss';

import attr from '../props';

const {textOptions} = attr;

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	RichText,
	InspectorControls,
} = wp.blockEditor;

const {
	SelectControl,
	PanelBody,
} = wp.components;

const {Fragment} = wp.element;

registerBlockType('visual-editor/text', {
	title: __('tekst'),
	icon: 'editor-textcolor',
	category: 'utility',
	attributes: attr,

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {textType, textContent} = attributes;

		function onTextTypeChange(type) {
			setAttributes({textType: type,});
		}
		function onTextChange(text) {
			setAttributes({textContent: text,});
		}

		function typeOfText() {
			return (
				<RichText
					tagName={textType}
					value={textContent}
					onChange={onTextChange}
					placeholder={__('Unesi tekst')}
				/>
			)
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__('Tip teksta')}
						icon='editor-textcolor'
						initalOpen={true}
					>
						<SelectControl
							label='Tip teksta'
							value={textType}
							options={textOptions}
							onChange={onTextTypeChange}
						/>
					</PanelBody>
				</InspectorControls>
				{
					typeOfText()
				}
			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {textType, textContent} = attributes;

		return (
			<RichText.Content
				tagName={textType}
				value={textContent}
			/>
		);
	}
});
