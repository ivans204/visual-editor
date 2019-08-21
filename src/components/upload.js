import React from 'react';

const {
	MediaUpload
} = wp.blockEditor;

const {
	Button
} = wp.components;

const ImageUpload = (props) => {
	return (
		<div>
			{console.log(props)}
			<MediaUpload
				onSelect={props.selectImage}
				render={({open}) => {
					return <img
						src={props.value.url}
						onClick={open}
						alt=""
					/>
				}}
			/>
		</div>
	);
};

ImageUpload.View = (props) => {
	return (
		<div>
			<img src={props.url} alt=""/>
			{console.log(props)}
		</div>
	)
};

export default ImageUpload;
