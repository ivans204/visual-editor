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
        },
        displayType: {
            type: 'string',
            default: 'none',
        }
    },

    edit: function (props) {
        const {attributes, setAttributes} = props;
        const {modalIsOpen, displayType} = attributes;

        function getUrl(e) {
            if (e.target.hasAttribute('src')) {
                attributes.imageUrl = e.target.getAttribute('src');
            }
        }

        function openImgModal() {
            setAttributes({
                modalIsOpen: true,
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
        const {imageUrl, modalIsOpen, displayType} = attributes;

        function daj(e) {
            console.log(e.target.tagName)
        }

        return (
            <div className='example-image' onClick={daj}>
                <InnerBlocks.Content/>
                {
                    (!modalIsOpen ?
                            <div id='img-modal' style='display: none'>
                                <img src={attributes.imageUrl}/>
                            </div>
                            :
                            <div id='img-modal' style='display: flex'>
                                <img src={attributes.imageUrl}/>
                            </div>
                    )
                }
            </div>
        );
    }
});