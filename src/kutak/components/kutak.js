import React from 'react';
import '../css/style.scss';
import '../css/editor.scss';

import kutakProps from '../props';

const {kutakOptions, kutakAllowedBlocks} = kutakProps;

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {InspectorControls, InnerBlocks,} = wp.blockEditor;
const {PanelBody, SelectControl,} = wp.components;
const {Fragment} = wp.element;

registerBlockType('visual-editor/kutak', {
	title: __('Kutak'),
	icon: 'welcome-learn-more',
	category: 'kutak',
	attributes: kutakProps,

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {kutakSelected} = attributes;

		function selectedKutak(kutak) {
			setAttributes({kutakSelected: kutak,});
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__('Vrsta kutka')}
						initialOpen={true}
					>
						<SelectControl
							label={__('Odaberi kutak')}
							options={kutakOptions}
							onChange={selectedKutak}
							value={kutakSelected}
						/>
					</PanelBody>
				</InspectorControls>

				<div className={`is__widget kutak kutak-${kutakOptions[kutakSelected].kutakClass}`}
					 data-title={kutakOptions[kutakSelected].label}>
					<p>
						<span className='widget-inner-title'>{kutakOptions[kutakSelected].label}</span>
					</p>
					<div className='kutak-elements'>
						<InnerBlocks allowedBlocks={kutakAllowedBlocks}/>
					</div>
				</div>

			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {kutakSelected} = attributes;

		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<div className={`is__widget kutak kutak-${kutakOptions[kutakSelected].kutakClass}`}
							 data-title={kutakOptions[kutakSelected].label}>
							<p>
								<span className='widget-inner-title'>{kutakOptions[kutakSelected].label}</span>
								<div>
									<InnerBlocks.Content/>
								</div>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
