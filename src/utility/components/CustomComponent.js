import React from 'react';

const {
	RichText,
	URLInputButton
} = wp.blockEditor;

const CustomComponent = (props) => {
	return (
		<div>
			<RichText
				className="btn btn--primary"
				value={props.text}
				placeholder="Place your button text here!"
				onChange={props.onButtonTextChange}
			/>
			<URLInputButton
				url={props.url}
				onChange={props.onURLChange}
			/>
		</div>
	);
};

CustomComponent.View = (props) => {
	return (
		<div>
			<RichText.Content
				className='btn'
				value={props.text}
				tagName='a'
				href={props.url}
			/>
		</div>
	)
};

export default CustomComponent;
