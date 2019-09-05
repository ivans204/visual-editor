import React from 'react';

import '../css/style.scss';
import '../css/editor.scss';

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

registerBlockType('visual-editor/single-input', {
	title: __('single-input'),
	icon: 'editor-spellcheck',
	category: 'zadatak',
	attributes: {
		zadatakAnswer: {
			type: 'string',
			value: null,
		}
	},

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {zadatakAnswer} = attributes;

		function setZadatakAnswer(value) {
			setAttributes({
				zadatakAnswer: value,
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
								label={__('Odgovor: ')}
								type='text'
								value={zadatakAnswer}
								onChange={setZadatakAnswer}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>

				<span className={`wrapper-answer-input`}>
					<input
						className={`answer-input`}
						placeholder='Odgovor'
						data-answer={zadatakAnswer}
					/>
				</span>
			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {zadatakAnswer} = attributes;

		return (
			<span className={`wrapper-answer-input`}>
				<input
					className={`answer-input`}
					placeholder='Odgovor'
					data-answer={zadatakAnswer}
				/>
			</span>
		);
	}
});
