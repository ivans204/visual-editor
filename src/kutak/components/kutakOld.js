import React from 'react';

import '../css/style.scss';
import '../css/editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	RichText,
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	SelectControl,
} = wp.components;

const {Fragment} = wp.element;

registerBlockType('visual-editor/kutak-old', {
	title: __('kutak old'),
	icon: 'welcome-learn-more',
	category: 'common',
	attributes: {
		kutakText: {
			type: 'string',
		},
		kutak: {
			type: 'string',
			value: 'promislite',
			default: 'promislite',
		}
	},

	edit: function (props) {
		const {className, attributes, setAttributes} = props;
		const {kutakText, kutak} = attributes;

		function onKutakTextChange(newText) {
			setAttributes({
				kutakText: newText,
			})
		}

		let kutakType = [
			{label: 'Promislite', value: 'promislite'},
			{label: 'Istrazite', value: 'istrazite'},
			{label: 'Kutak plus', value: 'plus'},
			{label: 'Kutak iz zabavne matematike', value: 'iz-zabavne-matematike'},
			{label: 'Povijesni kutak', value: 'povijesni-kutak'},
			{label: 'Bez riječi', value: 'bez-rijeci'},
		];

		return (
			<Fragment>

				<InspectorControls>
					<div className={className}>
						<PanelBody title={__('Tip kutka')}>
							<SelectControl
								label={__('Izaberi tip kutka')}
								value={kutak}
								options={kutakType}
								onChange={(kutak) => {
									setAttributes({kutak})
								}}
							/>
						</PanelBody>
					</div>
				</InspectorControls>

				<div className='container start'>
					<div className='row'>
						<div className="col">
							<div className={`is__widget kutak kutak-${kutak}`}>
								<p><span className='widget-inner-title'>{kutakType.label}</span></p>
								<RichText
									tagName='div'
									className='kutak-content'
									value={kutakText}
									onChange={onKutakTextChange}
									placeholder={__('Kutak tekst')}
								/>
							</div>
						</div>
					</div>
				</div>

			</Fragment>

		);
	},

	save: function (props) {
		const {className, attributes} = props;

		const {kutakText, kutak} = attributes;

		return (

			<div className='container'>
				<div className='row'>
					<div className="col">
						<div className={`is__widget kutak kutak-${kutak}`}>
							<p><span className='widget-inner-title'>{kutak}</span></p>
							<RichText.Content
								tagName='div'
								className='kutak-content'
								value={kutakText}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
