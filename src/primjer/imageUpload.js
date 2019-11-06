import React from 'react';

import './style.scss';
import './editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {MediaUpload, InspectorControls,} = wp.blockEditor;
const {IconButton, PanelBody, TextControl, ButtonGroup, CheckboxControl} = wp.components;
const {Fragment} = wp.element;

let test = false;

registerBlockType('visual-editor/upload', {
	title: __('upload image'),
	icon: 'format-image',
	category: 'primjer',
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
		},
		imgZoomCheck: {
			type: 'boolean',
			value: false,
			default: false,
		},
		showZoom: {
			type: 'string',
			value: null,
			default: null,
		},
		showModal: {
			type: 'boolean',
			value: false,
			default: false,
		}
	},

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {imgUrl, imgWidth, imgHeight, imgAlignment, imgZoomCheck, showZoom} = attributes;

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
				imgAlignment: `img-align-${newAlign}`,
			});
		}

		function onImgCheckChange(newVal) {
			setAttributes({
				imgZoomCheck: newVal,
			});

			if (!imgZoomCheck) {
				setAttributes({
					showZoom: 'show-zoom'
				});
			} else {
				setAttributes({
					showZoom: null
				});
			}
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

						<CheckboxControl
							label={__('Ima zoom?')}
							checked={imgZoomCheck}
							onChange={onImgCheckChange}
						/>

					</PanelBody>
				</InspectorControls>

				<div>
					<MediaUpload
						onSelect={selectImage}
						render={({open}) => {
							return <div className="solution">
								<a className={`example-text ${showZoom}`}>
									<img
										alt=""
										src={imgUrl}
										onClick={open}
										width={imgWidth}
										height={imgHeight}
										className={`${imgAlignment}`}
									/>
								</a>
							</div>;
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
			<Fragment>
				<div className="solution">
					<a id="modal" className={`example-text ${showZoom}`}>
						<img
							alt=""
							src={imgUrl}
							width={imgWidth}
							height={imgHeight}
							className={imgAlignment}
						/>
					</a>
				</div>

				<div id="img-modal" style="display: none">
					<img
						alt=""
						src={imgUrl}
						width={imgWidth}
						height={imgHeight}
						className={imgAlignment}
					/>
				</div>
			</Fragment>
		);
	}
});
