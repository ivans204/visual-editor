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

registerBlockType('visual-editor/primjer-text-center', {
    title: __('primjer-text-center'),
    icon: 'media-text',
    category: 'examples',
    attributes: {
        exampleText: {
            type: 'string'
        },
    },

    edit: function (props) {
        const {attributes, setAttributes} = props;
        const {exampleText} = attributes;


        function onExampleTextChange(newText) {
            setAttributes({
                exampleText: newText
            })
        }


        return (
            <RichText
                className='align-center'
                tagName='p'
                value={exampleText}
                onChange={onExampleTextChange}
                placeholder={__('Tekst primjera')}
            />
        );
    },

    save: function (props) {
        const {attributes} = props;
        const {exampleText} = attributes;

        return (
            <RichText.Content
                className='align-center'
                tagName='p'
                value={exampleText}
            />
        );
    }
});