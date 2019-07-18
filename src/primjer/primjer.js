import React from 'react';

import './style.scss';
import './editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
    RichText,
    RichTextToolbarButton,
    BlockAlignmentToolbar,
    InnerBlocks,
} = wp.blockEditor;

const {
    FormToggle,
} = wp.components;

const {Fragment} = wp.element;

const allowed_blocks = [
    'visual-editor/primjer-text',
    'visual-editor/primjer-solution',
    // 'core/image',
    // 'core/video',
    'visual-editor/primjer-text-center',
    'visual-editor/example-image',
];

registerBlockType('visual-editor/primjer', {
    title: __('primjer'),
    icon: 'edit',
    category: 'common',
    attributes: {
        exampleTitle: {
            type: 'string',
        },
    },

    edit: function (props) {
        const {attributes, setAttributes} = props;
        const {exampleTitle} = attributes;

        function onExampleTitleChange(newTitle) {
            setAttributes({
                exampleTitle: newTitle,
            })
        }

        // function solutionToggle() {
        //     setAttributes({
        //         hasSolution: !hasSolution
        //     });
        // }

        return (
            <Fragment>

                {/*<InspectorControls>*/}
                {/*    <PanelBody title={__('Rješenje', '2')}>*/}
                {/*        <PanelRow>*/}
                {/*            <label htmlFor="solution-toggle">*/}
                {/*                {__('Ima rjesenje?')}*/}
                {/*            </label>*/}
                {/*            <FormToggle*/}
                {/*                id={'solution-toggle'}*/}
                {/*                label={__('Nema')}*/}
                {/*                checked={hasSolution}*/}
                {/*                onChange={solutionToggle}*/}
                {/*            />*/}
                {/*        </PanelRow>*/}
                {/*    </PanelBody>*/}
                {/*</InspectorControls>*/}

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

                                <InnerBlocks
                                    allowedBlocks={allowed_blocks}
                                />

                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>

        );
    },

    save: function (props) {
        const {attributes} = props;
        const {exampleTitle,} = attributes;

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
                            <InnerBlocks.Content/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});