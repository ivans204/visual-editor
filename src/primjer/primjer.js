import React from 'react';

import './style.scss';
import './editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {withState} = wp.compose;

const {
    RichText,
    RichTextToolbarButton,
    InspectorControls,
    AlignmentToolbar,
    BlockAlignmentToolbar,
    BlockControls,
    InnerBlocks,
} = wp.blockEditor;

const {
    MenuGroup,
    PanelBody,
    PanelRow,
    SelectControl,
    Toolbar,
    Button,
    Tooltip,
    FormToggle,
} = wp.components;

const {Fragment} = wp.element;

registerBlockType('visual-editor/primjer', {
    title: __('primjer'),
    icon: 'edit',
    category: 'common',
    attributes: {
        exampleTitle: {
            type: 'string',
        },
        exampleText: {
            type: 'string'
        },
        exampleSolution: {
            type: 'string'
        },
        hasSolution: {
            type: 'boolean',
            default: true,
        },
        alignment: {
            type: 'string',
            default: 'none'
        }
    },

    edit: function (props) {
        const {attributes, setAttributes} = props;
        const {exampleTitle, exampleText, exampleSolution, hasSolution, alignment} = attributes;

        function onExampleTitleChange(newTitle) {
            setAttributes({
                exampleTitle: newTitle,
            })
        }

        function onExampleTextChange(newText) {
            setAttributes({
                exampleText: newText
            })
        }

        function onExampleSolutionChange(newText) {
            setAttributes({
                exampleSolution: newText
            })
        }

        function onChangeAlignment(newAlignment) {
            props.setAttributes({alignment: newAlignment === undefined ? 'none' : newAlignment});
            console.log(newAlignment)
        }

        function solutionToggle() {
            setAttributes({
                hasSolution: !hasSolution
            });
        }

        function showSolutionEdit() {
            if (hasSolution) {
                return (
                    <div className='solution example-text'>
                        <p><span className='rjesenje'>Rješenje:</span></p>
                        <RichText
                            tagName='p'
                            value={exampleSolution}
                            onChange={onExampleSolutionChange}
                            placeholder={__('Tekst rjesenja')}
                        />
                    </div>
                )
            }
        }

        return (
            <Fragment>

                <InspectorControls>
                    <PanelBody title={__('Rješenje', '2')}>
                        <PanelRow>
                            <label htmlFor="solution-toggle">
                                {__('Ima rjesenje?')}
                            </label>
                            <FormToggle
                                id={'solution-toggle'}
                                label={__('Nema')}
                                checked={hasSolution}
                                onChange={solutionToggle}
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>

                <BlockControls>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={onChangeAlignment}
                    />
                </BlockControls>

                <div className='container'>
                    <div className='row'>
                        <div className="col">
                            <div className='is__widget example example-boxed'>
                                <RichText
                                    tagName='h3'
                                    className='assignment-title'
                                    value={exampleTitle}
                                    onChange={onExampleTitleChange}
                                    placeholder={__('Naslov primjera')}
                                />
                                <div className='example-text'>
                                    <RichText
                                        tagName='p'
                                        value={exampleText}
                                        onChange={onExampleTextChange}
                                        placeholder={__('Tekst primjera')}
                                    />
                                </div>

                                {
                                    showSolutionEdit()
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>

        );
    },

    save: function (props) {
        const {attributes} = props;
        const {exampleTitle, exampleText, exampleSolution, hasSolution} = attributes;

        function showSolutionSave() {
            if (hasSolution) {
                return (
                    <div className="solution example-text">
                        <p><span className="rjesenje">Rješenje:</span></p>
                        <RichText.Content
                            tagName='p'
                            value={exampleSolution}
                        />
                    </div>
                );
            }
        }

        return (
            <div className='container'>
                <div className='row'>
                    <div className="col">
                        <div className='is__widget example example-boxed'>
                            <RichText.Content
                                tagName='h3'
                                className='assignment-title'
                                value={exampleTitle}
                            />
                            <div className='example-text'>
                                <RichText.Content
                                    tagName='p'
                                    value={exampleText}
                                />
                            </div>
                            {
                                showSolutionSave()
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});