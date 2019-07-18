import React from 'react';

import '../style.scss';
import '../editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {withState} = wp.compose;

const {
    RichText,
    InspectorControls,
    BlockControls,
    AlignmentToolbar,
    InnerBlocks,
} = wp.blockEditor;

const {
    MenuGroup,
    PanelBody,
    PanelRow,
    SelectControl,
    FormToggle,
} = wp.components;

const {Fragment} = wp.element;

registerBlockType('visual-editor/example-image', {
    title: __('example-image'),
    icon: 'image',
    category: 'examples',
    attributes: {
        modalIsOpen: {
            type: 'boolean',
            default: false,
        },
        imageUrl: {
            type: 'string',
            default: '',
        }
    },

    edit: function (props) {
        const {attributes, setAttributes} = props;
        const {modalIsOpen} = attributes;

        function getUrl(e) {
            if (e.target.hasAttribute('src')) {
                attributes.imageUrl = e.target.getAttribute('src');
                console.log(attributes.imageUrl);
            }
        }

        function openImgModal() {
            setAttributes({
                modalIsOpen: !modalIsOpen,
            });
        }

        return (
            <Fragment>
                <div className='example-image' onClick={getUrl}>
                    <InnerBlocks
                        allowedBlocks={['core/image']}
                    />
                </div>

            </Fragment>
        );
    },

    save: function (props) {
        const {attributes, setAttributes} = props;
        const {imageUrl, modalIsOpen} = attributes;

        function daj(e) {
            if (e.target.hasAttribute('src')) {
                console.log(13);
            }
        }

        return (
            <Fragment>
                <div className='example-image' >
                    <img src={attributes.imageUrl} onClick={daj} alt=''/>
                </div>
                <div className='img-modal' style={(modalIsOpen) ? 'display: flex' : 'display: none'}>
                    <img src={attributes.imageUrl} alt=''/>
                </div>
            </Fragment>
        );
    }
});