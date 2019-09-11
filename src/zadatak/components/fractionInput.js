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

registerBlockType('visual-editor/fraction-input', {
	title: __('Razlomak'),
	icon: 'editor-spellcheck',
	category: 'zadatak',
	attributes: {
		zadatakAnswerTop: {
			type: 'string',
			value: null,
		},
		zadatakAnswerBot: {
			type: 'string',
			value: null,
		}
	},

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {zadatakAnswerTop, zadatakAnswerBot} = attributes;

		function setZadatakAnswerTop(value) {
			setAttributes({
				zadatakAnswerTop: value,
			})
		}

		function setZadatakAnswerBot(value) {
			setAttributes({
				zadatakAnswerBot: value,
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
								value={zadatakAnswerTop}
								onChange={setZadatakAnswerTop}
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label={__('Nazivnik: ')}
								type='text'
								value={zadatakAnswerBot}
								onChange={setZadatakAnswerBot}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>

				<div className={`assignment-fraction`}>
					<ul>
						<li>
						<span className={`wrapper-answer-input`}>
							<input
								className={`answer-input`}
								placeholder={`Odgovor`}
								data-answer={zadatakAnswerTop}
							/>
						</span>
						</li>
						<li>
							<span className={`wrapper-answer-input`}>
								<input
									className={`answer-input`}
									placeholder={`Odgovor`}
									data-answer={zadatakAnswerBot}
								/>
							</span>
						</li>
					</ul>
				</div>
			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {zadatakAnswerTop, zadatakAnswerBot} = attributes;

		return (
				<div className={`assignment-fraction`}>
					<ul>
						<li>
						<span className={`wrapper-answer-input`}>
							<input
								className={`answer-input`}
								placeholder={`Odgovor`}
								data-answer={zadatakAnswerTop}
							/>
						</span>
						</li>
						<li>
							<span className={`wrapper-answer-input`}>
								<input
									className={`answer-input`}
									placeholder={`Odgovor`}
									data-answer={zadatakAnswerBot}
								/>
							</span>
						</li>
					</ul>
				</div>
		);
	}
});
