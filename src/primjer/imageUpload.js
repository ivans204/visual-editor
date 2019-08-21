import React from 'react';

import './style.scss';
import './editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	RichText,
	MediaUpload,
	PlainText
} = wp.blockEditor;

const {
	Button
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
		}
	},

	edit: function (props) {
		const {attributes, setAttributes, className} = props;
		const {imgUrl} = attributes;

		function selectImage(value) {
			// console.log(value);
			setAttributes({
				imgUrl: value.url,
			})
		}

		return (
			<Fragment>
				<div>
					<MediaUpload
						onSelect={selectImage}
						render={({open}) => {
							return <img
								src={imgUrl}
								onClick={open}
								alt=''
							/>;
						}}
					/>
				</div>
			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {imgUrl} = attributes;

		return (
			<div>
				<img src={imgUrl} alt="" style='display:table; margin: 0 auto;'/>
			</div>
		);
	}
});
