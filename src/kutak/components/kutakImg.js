import React from 'react';

import '../css/style.scss';
import '../css/editor.scss';

import kutakProps from '../props';

const {} = kutakProps;

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
	CheckboxControl
} = wp.components;

const {Fragment} = wp.element;

registerBlockType('visual-editor/kutak-img', {
	title: __('Kutak slika'),
	icon: 'format-image',
	category: 'kutak',
	attributes: kutakProps,

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {imgUrl, imgWidth, imgHeight} = attributes;

		function selectImg(url) {
			setAttributes({
				imgUrl: url.url,
			});
		}

		function changeImgWidth(width) {
			setAttributes({
				imgWidth: width,
			});
		}

		function changeImgHeight(height) {
			setAttributes({
				imgHeight: height,
			});
		}

		function ImgUpload() {
			return (
				<MediaUpload
					onSelect={selectImg}
					render={({open}) => {
						return (
							<img
								alt=''
								src={imgUrl}
								width={imgWidth}
								height={imgHeight}
								onDoubleClick={open}
							/>
						);
					}}
				/>
			);
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Slika')}>
						<TextControl
							label={__('Širina: ')}
							type='number'
							value={imgWidth}
							onChange={changeImgWidth}
						/>
						<TextControl
							label={__('Visina: ')}
							type='number'
							value={imgHeight}
							onChange={changeImgHeight}
						/>
					</PanelBody>
				</InspectorControls>
				<div>
					<ImgUpload/>
				</div>
			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {} = attributes;

		return (
			1
		);
	}
});
