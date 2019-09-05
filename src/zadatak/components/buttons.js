import React from 'react';

import '../css/style.scss';
import '../css/editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	RichText,
	InspectorControls
} = wp.blockEditor;

const {
	TextControl,
	TextareaControl,
	PanelBody,
	PanelRow,
	Button,
} = wp.components;

const {Fragment} = wp.element;

registerBlockType('visual-editor/zadatak-buttons', {
	title: __('buttons'),
	icon: 'controls-play',
	category: 'zadatak',
	attributes: {
		zadatakAnswer: {
			type: 'string',
			value: null,
		},
		zadatakHint: {
			type: 'string',
			value: null,
		}
	},

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {zadatakAnswer, zadatakHint} = attributes;

		function setZadatakAnswer(newAnsw) {
			setAttributes({
				zadatakAnswer: newAnsw,
			})
		}

		function setZadatakHint(newAnsw) {
			setAttributes({
				zadatakHint: newAnsw,
			})
		}

		function showAnswer() {
			if (zadatakAnswer && zadatakAnswer.length) {
				return (
					<Button title={__('Prikaži rješenje')} className={`a-btn answer-solution`}>
						<img src="/wp-content/themes/kresimira/img/naocale.svg" alt=""/>
					</Button>
				)
			}
		}

		function showHint() {
			if (zadatakHint && zadatakHint.length) {
				return (
					<Button title="Pomoć" className={`a-btn answer-hint`}>
						<img src="/wp-content/themes/kresimira/img/idea.svg" alt=""/>
					</Button>
				)
			}
		}

		return (
			<Fragment>

				<InspectorControls>
					<PanelBody
						title={__('Buttons')}
						icon='screenoptions'
						initialOpen={true}
					>
						<PanelRow>
							<TextareaControl
								label={__('Odgovor: ')}
								type='text'
								value={zadatakAnswer}
								onChange={setZadatakAnswer}
							/>
						</PanelRow>

						<PanelRow>
							<TextareaControl
								label={__('Pomoć: ')}
								type='text'
								value={zadatakHint}
								onChange={setZadatakHint}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>

				<div className='button-holder'>
					<Button className='answer-check a-btn'>Provjeri</Button>
					<div className='assignment-container-options'>

						{showHint()}
						{showAnswer()}

						<Button title={__('Ponovi zadatak')} className={`a-btn answer-reset`}>
							<img src="/wp-content/themes/kresimira/img/refresh.svg" alt=""/>
						</Button>

					</div>
				</div>

			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {zadatakAnswer, zadatakHint} = attributes;

		function ButtonAnswer() {
			if (zadatakAnswer) {
				return (
					<Button title={__('Prikaži rješenje')} className={`a-btn answer-solution`}>
						<img src="/wp-content/themes/kresimira/img/naocale.svg" alt=""/>
					</Button>
				)
			}
		}

		function ButtonHint() {
			if (zadatakHint) {
				return (
					<Button title={__('Pomoć')} className={`a-btn answer-hint`}>
						<img src="/wp-content/themes/kresimira/img/idea.svg" alt=""/>
					</Button>
				)
			}
		}

		return (
			<div className='button-holder'>
				<Button className='answer-check a-btn'>Provjeri</Button>
				<div className='assignment-container-options'>

					<ButtonHint/>
					<ButtonAnswer/>

					<Button title={__('Ponovi zadatak')} className={`a-btn answer-reset`}>
						<img src="/wp-content/themes/kresimira/img/refresh.svg" alt=""/>
					</Button>
				</div>
			</div>
		);
	}
});