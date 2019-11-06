import React from 'react';
import '../css/style.scss';
import '../css/editor.scss';

import attr from '../props';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	InspectorControls
} = wp.blockEditor;

const {
	TextControl,
	PanelBody,
	PanelRow,
} = wp.components;

const {Fragment} = wp.element;

registerBlockType('visual-editor/fraction-input', {
	title: __('Razlomak'),
	icon: 'editor-textcolor',
	category: 'razlomak',
	attributes: attr,

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {fractionBrojnik, fractionNazivnik} = attributes;

		function onFractionBrojnikChange(value) {
			setAttributes({
				fractionBrojnik: value,
			})
		}

		function onFractionNazivnikChange(value) {
			setAttributes({
				fractionNazivnik: value,
			})
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__('Odgovor')}
						icon='trash'
						initialOpen={true}
					>
						<PanelRow>
							<TextControl
								label={__('Brojnik: ')}
								type='text'
								value={fractionBrojnik}
								onChange={onFractionBrojnikChange}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={__('Nazivnik: ')}
								type='text'
								value={fractionNazivnik}
								onChange={onFractionNazivnikChange}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>

				<ul>
					<li>
						<span className={`wrapper-answer-input`}>
							<input type="text"/>
						</span>
					</li>
					<li>
						
					</li>
				</ul>

			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {fractionBrojnik, fractionNazivnik} = attributes;

		return (
			1
		);
	}
});
