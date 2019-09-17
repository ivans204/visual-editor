import React from 'react';
import '../css/style.scss';
import '../css/editor.scss';

import attr from '../props';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	RichText,
	InspectorControls,
} = wp.blockEditor;

const {
	SelectControl,
	PanelBody,
	PanelRow,
	Button,
} = wp.components;

const {Fragment} = wp.element;

registerBlockType('visual-editor/fraction-title', {
	title: __('Naslov'),
	icon: 'editor-textcolor',
	category: 'razlomak',
	attributes: attr,

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {textType} = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__('Tip teksta')}
						icon='editor-textcolor'
						initalOpen={true}
					>
						<PanelRow>
							<SelectControl
								label='Tip teksta'
								value={textType}
								options={[]}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {} = attributes;

		return (
			1
		);
	}
});
