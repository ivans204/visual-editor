import React from 'react';
import '../css/style.scss';
import '../css/editor.scss';
import kutakProps from '../props';

const {} = kutakProps;
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {MediaUpload, InspectorControls, BlockControls, AlignmentToolbar,} = wp.blockEditor;
const {PanelBody, TextControl} = wp.components;
const {Fragment} = wp.element;

registerBlockType('visual-editor/kutak-img', {
	title: __('Kutak slika'),
	icon: 'format-image',
	category: 'kutak',
	attributes: kutakProps,

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {imgUrl, imgWidth, imgHeight, imgAlign} = attributes;

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
				</InspectorControls>

				<BlockControls>
					<AlignmentToolbar
						value={imgAlign}
						onChange={setImgAlign}
					/>
				</BlockControls>

				<div>
					<MediaUpload
						onSelect={selectImg}
						render={({open}) => {
							return (
								<img
									// className={`${imgAlign} align${imgAlign} ${kutakBlueCircle ? 'circle-image image-cc' : ''}`}
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
		const {imgUrl, imgWidth, imgHeight, imgAlign} = attributes;

		return (
			<div>
				<div className={`${imgAlign} align${imgAlign}`}>
					<img src={imgUrl} alt="Slika" width={imgWidth} height={imgHeight}/>
				</div>
			</div>
		);
	}
});
