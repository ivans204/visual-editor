import React from 'react';

import './style.scss';
import './editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	RichText,
	MediaUpload,
	InspectorControls,
} = wp.blockEditor;

const {
	Button,
	IconButton,
	PanelBody,
	TextControl,
	ButtonGroup,
} = wp.components;

const {Fragment} = wp.element;

registerBlockType('visual-editor/upload', {
	title: __('upload image'),
	icon: 'edit',
	category: 'common',
	attributes: {
		imgUrl: {
			type: 'string',
			default: 'http://placehold.it/300'
		},
		imgWidth: {
			value: null,
			default: 300,
		},
		imgHeight: {
			value: null,
			default: 300,
		},
		imgAlignment: {
			type: 'string',
			value: 'img-align-none',
			default: 'img-align-none',
		}
	},

	edit: function (props) {
		const {attributes, setAttributes, className} = props;
		const {imgUrl, imgWidth, imgHeight, imgAlignment} = attributes;

		function selectImage(value) {
			setAttributes({
				imgUrl: value.url,
			})
		}

		function setImgWidth(newWidth) {
			setAttributes({
				imgWidth: newWidth,
			})
		}

		function setImgHeight(newHeight) {
			setAttributes({
				imgHeight: newHeight,
			})
		}

		function setImgAlign(newAlign) {
			setAttributes({
				// imgAlignment: newAlign,
				imgAlignment: `img-align-${newAlign}`,
			});
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Slika')}>

						<TextControl
							label={__('Širina: ')}
							type='number'
							value={imgWidth}
							onChange={setImgWidth}
						/>
						<TextControl
							label={__('Visina: ')}
							type='number'
							value={imgHeight}
							onChange={setImgHeight}
						/>

						<ButtonGroup id="aligns">
							<IconButton
								isDefault
								icon="align-none"
								onClick={() => setImgAlign('none')}
							/>
							<IconButton
								isDefault
								icon="align-center"
								onClick={() => setImgAlign('center')}
							/>
							<IconButton
								isDefault
								icon="align-right"
								onClick={() => setImgAlign('right')}
							/>
						</ButtonGroup>

					</PanelBody>
				</InspectorControls>

				<div>
					<MediaUpload
						onSelect={selectImage}
						render={({open}) => {
							return <img
								alt=""
								src={imgUrl}
								onClick={open}
								width={imgWidth}
								height={imgHeight}
								className={`img-align-${imgAlignment}`}
							/>;
						}}
					/>
				</div>
			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {imgUrl, imgWidth, imgHeight, imgAlignment} = attributes;

		return (
			<div>
				<img
					src={imgUrl}
					width={imgWidth}
					height={imgHeight}
					className={`img-align-${imgAlignment}`}
				/>
			</div>
		);
	}
});
