import React from 'react';

import '../style.scss';
import '../editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {withState} = wp.compose;

const {
    RichText,
    InspectorControls,
    BlockAlignmentToolbar,
    BlockControls,
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

registerBlockType('visual-editor/primjer-text', {
    title: __('primjer-text'),
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
            <Fragment>
                <div className='example-text'>
                    <RichText
                        tagName='p'
                        value={exampleText}
                        onChange={onExampleTextChange}
                        placeholder={__('Tekst primjera')}
                    />
                </div>
            </Fragment>

        );
    },

    save: function (props) {
        const {attributes} = props;
        const {exampleText} = attributes;

        return (
            <div className='example-text'>
                <RichText.Content
                    tagName='p'
                    value={exampleText}
                />
            </div>
        );
    }
});