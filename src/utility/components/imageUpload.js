import React from 'react';
import '../css/style.scss';
import '../css/editor.scss';
import kutakProps from '../props';

const {} = kutakProps;
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {MediaUpload, InspectorControls, BlockControls, AlignmentToolbar,} = wp.blockEditor;
const {PanelBody, TextControl, FormToggle} = wp.components;
const {Fragment} = wp.element;

registerBlockType('visual-editor/img-upload', {
	title: __('Slika'),
	icon: 'format-image',
	category: 'utility',
	attributes: kutakProps,

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {imgUrl, imgWidth, imgHeight, imgAlign, imgZoom} = attributes;

		function selectImg(url) {
			setAttributes({imgUrl: url.url,});
		}

		function changeImgWidth(width) {
			setAttributes({imgWidth: width,});
		}

		function changeImgHeight(height) {
			setAttributes({imgHeight: height,});
		}

		function setImgAlign(align) {
			setAttributes({imgAlign: align,});
		}

		function imgZoomToggle() {
			setAttributes({imgZoom: !imgZoom,});
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__('Slika')}
						initialOpen={true}
					>
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
						<label>Poravnanje</label>
						<AlignmentToolbar
							value={imgAlign}
							onChange={setImgAlign}
						/>
					</PanelBody>
					<PanelBody
						title={__('Zoom')}
						initialOpen={true}
					>
						<FormToggle checked={imgZoom} onChange={imgZoomToggle}/>
					</PanelBody>
				</InspectorControls>

				<BlockControls>
					<AlignmentToolbar
						value={imgAlign}
						onChange={setImgAlign}
					/>
				</BlockControls>

				<div className={`${imgZoom ? 'img-zoom' : ''}`}>
					<MediaUpload
						onSelect={selectImg}
						render={({open}) => {
							return (
								<img
									alt='kutna slika'
									src={imgUrl}
									width={imgWidth}
									height={imgHeight}
									onDoubleClick={open}
								/>
							);
						}}
					/>
				</div>
			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {imgUrl, imgWidth, imgHeight, imgAlign, imgZoom} = attributes;

		function ImgModal() {
			if (imgZoom) {
				return (
					<div id='img-modal' style='display: none;'>
						<span className='close' id='img-modal-close'>x</span>
						<img src={imgUrl} alt/>
					</div>
				)
			}
		}

		return (
			<div className={`${imgAlign} align${imgAlign} ${imgZoom ? 'img-zoom' : ''}`}>
				<img src={imgUrl} width={imgWidth} height={imgHeight} alt/>
				<ImgModal/>
			</div>
		);
	}
});
