import React from 'react';

import '../style.scss';
import '../editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {withState} = wp.compose;

const {
    RichText,
} = wp.blockEditor;

const {
    MenuGroup,
    PanelBody,
    PanelRow,
    SelectControl,
    FormToggle,
} = wp.components;

const {Fragment} = wp.element;

registerBlockType('visual-editor/primjer-solution', {
    title: __('primjer-rjesenje'),
    icon: 'analytics',
    category: 'examples',
    attributes: {
        exampleSolution: {
            type: 'string'
        },
    },

    edit: function (props) {
        const {attributes, setAttributes} = props;
        const {exampleSolution} = attributes;

        function onExampleSolutionChange(newText) {
            setAttributes({
                exampleSolution: newText
            })
        }

        return (
            <div className='solution example-text'>
                <p>Rješenje:</p>
                <RichText
                    tagName='p'
                    value={exampleSolution}
                    onChange={onExampleSolutionChange}
                    placeholder={__('Tekst primjera')}
                />
            </div>
        );
    },

    save: function (props) {
        const {attributes} = props;
        const {exampleSolution} = attributes;

        return (
            <div className='solution example-text'>
                <p>Rješenje:</p>
                <RichText.Content
                    tagName='p'
                    value={exampleSolution}
                />
            </div>
        );
    }
});