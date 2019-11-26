import React from 'react';
import './css/style.scss';
import './css/editor.scss';
import primjerProps from './props'

const {primjerAllowedBlocks} = primjerProps;

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {InnerBlocks, RichText} = wp.blockEditor;
const {Fragment} = wp.element;

registerBlockType('visual-editor/primjer', {
	title: __('primjer'),
	icon: 'edit',
	category: 'primjer',
	attributes: primjerProps,

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {primjerSubtitleContent} = attributes;

		function onSubtitleContentChange(content) {
			setAttributes({primjerSubtitleContent: content,})
		}

		return (
			<Fragment>
				<div className="container">
					<div className="row">
						<div className="col">
							<div className='is__widget example example-boxed'>
								<RichText
									tagName='h3'
									value={ primjerSubtitleContent}
									onChange={onSubtitleContentChange}
									className='assignment-title'
								/>
								<InnerBlocks allowedBlocks={primjerAllowedBlocks}/>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {primjerSubtitleContent} = attributes;

		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<div className='is__widget example example-boxed'>
							<RichText.Content
								tagName='h3'
								value={primjerSubtitleContent}
								className='assignment-title'
							/>
							<InnerBlocks.Content/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
