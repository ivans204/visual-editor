import React from 'react';

import './style.scss';
import './editor.scss';
import CustomComponent from "../components/CustomComponent";

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
	RichText,
} = wp.blockEditor;

const {Fragment} = wp.element;

registerBlockType('visual-editor/custom', {
	title: __('custom'),
	icon: 'edit',
	category: 'common',
	attributes: {
		buttonText: {
			type: String,
		},
		buttonUrl: {
			type: String,
		}
	},

	edit: function (props) {
		const {attributes, setAttributes} = props;
		const {buttonText, buttonUrl} = attributes;

		function updateAttr(key, value) {
			setAttributes({
				[key]: value,
			});
		}

		return (
			<Fragment>
				<div>
					<CustomComponent
						url={buttonUrl}
						text={buttonText}
						onButtonTextChange={val => updateAttr('buttonText', val)}
						onURLChange={val => updateAttr('buttonUrl', val)}
					/>
				</div>
			</Fragment>
		);
	},

	save: function (props) {
		const {attributes} = props;
		const {buttonText, buttonUrl} = attributes;

		return (
			<div>
				<CustomComponent.View
					text={buttonText}
					url={buttonUrl}
				/>
			</div>
		);
	}
});
