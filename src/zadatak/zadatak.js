import React from 'react';

import './style.scss';
import './editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	RichText,
	InnerBlocks,
	InspectorControls
} = wp.blockEditor;

const {
	TextControl,
	Panel,
	PanelBody,
	PanelRow,
	Button,
} = wp.components;

const {Fragment} = wp.element;

const allowed_blocks = [
	'visual-editor/zadatak'
];

registerBlockType('visual-editor/zadatak', {
	title: __('zadatak'),
	icon: 'admin-plugins',
	category: 'zadatak',
	attributes: {
		zadatakTitle: {
			type: 'string',
		},
		zadatakText: {
			type: 'string',
		},
		zadatakAnswer: {
			type: 'string'
		},
		zadatakHint: {
			type: 'string'
		},
	},

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {zadatakTitle, zadatakText, zadatakAnswer, zadatakHint} = attributes;

		function onZadatakTitleChange(newTitle) {
			setAttributes({
				zadatakTitle: newTitle,
			})
		}

		function onZadatakTextChange(newText) {
			setAttributes({
				zadatakText: newText,
			})
		}

		function randomString() {
			return Math.random().toString(36).substring(2, 7);
		}

		// function onZadatakAnswerChange(newAnsw) {
		// 	setAttributes({
		// 		zadatakAnswer: newAnsw.target.value,
		// 	});
		// }

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

		return (
			<Fragment>

				<InspectorControls>

					<PanelBody
						title={__('Odgovor')}
						icon='trash'
						initalOpen={true}
					>
						<PanelRow>
							<TextControl
								label={__('Odgovor: ')}
								type='text'
								value={zadatakAnswer}
								onChange={setZadatakAnswer}
							/>
						</PanelRow>

						<PanelRow>
							<TextControl
								label={__('Pomoć: ')}
								type='text'
								value={zadatakHint}
								onChange={setZadatakHint}
							/>
						</PanelRow>
					</PanelBody>

				</InspectorControls>

				<div id={randomString()} className={`answer-holder assignment-container`}>

					<RichText
						tagName='h2'
						value={zadatakTitle}
						onChange={onZadatakTitleChange}
						placeholder={__('Naslov zadataka')}
					/>
					<RichText
						tagName='span'
						value={zadatakText}
						onChange={onZadatakTextChange}
						placehlolder={__('Tekst zadataka')}
					/>
					<span className={`wrapper-answer-input`}>
						<input
							className={`answer-input`}
							placeholder='Odgovor'
						/>
					</span>

					<div className='button-holder'>
						<Button className='answer-check a-btn'>Provjeri</Button>
						<div className='assignment-container-options'>

							<Button title="Pomoć" className={`a-btn answer-hint`}>
								<img src="/wp-content/themes/kresimira/img/idea.svg" alt=""/>
							</Button>

							<Button title={__('Prikaži rješenje')} className={`a-btn answer-solution`}>
								<img src="/wp-content/themes/kresimira/img/naocale.svg" alt=""/>
							</Button>

							<Button title={__('Ponovi zadatak')} className={`a-btn answer-reset`}>
								<img src="/wp-content/themes/kresimira/img/refresh.svg" alt=""/>
							</Button>

						</div>
					</div>

				</div>
			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {zadatakTitle, zadatakText, zadatakAnswer} = attributes;

		return (
			<div className={`answer-holder assignment-container`}>

				<RichText.Content
					tagName='h2'
					value={zadatakTitle}
				/>
				<RichText.Content
					className={`inline`}
					tagName='p'
					value={zadatakText}
				/>
				<span className='wrapper-answer-input'>
		<input
			type="text"
			className={`answer-input`}
			placeholder={__('Odgovor')}
			data-answer={zadatakAnswer}
		/>
		</span>

				<div className='button-holder'>
					<Button className='answer-check a-btn'>Provjeri</Button>
					<div className='assignment-container-options'>
						<Button className={`a-btn answer-hint`}>
							<img src="/wp-content/themes/kresimira/img/idea.svg" alt=""/>
						</Button>
						
						<Button title={__('Prikaži rješenje')} className={`a-btn answer-solution`}>
							<img src="/wp-content/themes/kresimira/img/naocale.svg" alt=""/>
						</Button>

						<Button title={__('Ponovi zadatak')} className={`a-btn answer-reset`}>
							<img src="/wp-content/themes/kresimira/img/refresh.svg" alt=""/>
						</Button>
					</div>
				</div>

			</div>
		);
	}
});
