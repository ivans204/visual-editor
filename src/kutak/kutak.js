import React from 'react';

import './kutak-style.scss';
import './kutak-editor.scss';

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
    RichText,
    InspectorControls,
} = wp.blockEditor;

const {
    MenuGroup,
    PanelBody,
    SelectControl,
} = wp.components;

const {Fragment} = wp.element;

registerBlockType('visual-editor/kutak', {
    title: __('kutak'),
    icon: 'welcome-learn-more',
    category: 'common',
    attributes: {
        kutakText: {
            type: 'string',
        },
        kutak: {
            type: 'string',
            value: 'promislite',
            default: 'promislite',
        }
    },

    edit: function (props) {
        const {className, attributes, setAttributes} = props;
        const {kutakText, kutak} = attributes;

        function onKutakTextChange(newText) {
            setAttributes({
                kutakText: newText,
            })
        }

        return (
            <Fragment>

                <InspectorControls>
                    <div className={className}>
                        <PanelBody title={__('Tip kutka')}>
                            <SelectControl
                                label={__('Izaberi tip kutka')}
                                value={kutak}
                                options={[
                                    {label: 'Promislite', value: 'promislite'},
                                    {label: 'Istrazite', value: 'istrazite'},
                                ]}
                                onChange={(kutak) => {
                                    setAttributes({kutak})
                                }}
                            />
                        </PanelBody>
                    </div>
                </InspectorControls>

                <div className='container start'>
                    <div className='row'>
                        <div className="col">
                            <div className={`is__widget kutak kutak-${kutak}`}>
                                <p><span className='widget-inner-title'>{kutak}</span></p>
                                <RichText
                                    tagName='div'
                                    className='kutak-content'
                                    value={kutakText}
                                    onChange={onKutakTextChange}
                                    placeholder={__('Kutak tekst')}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>

        );
    },

    save: function (props) {
        const {className, attributes} = props;

        const {kutakText, kutak} = attributes;

        return (

            <div className='container'>
                <div className='row'>
                    <div className="col">
                        <div className={`is__widget kutak kutak-${kutak}`}>
                            <p><span className='widget-inner-title'>{kutak}</span></p>
                            <RichText.Content
                                tagName='div'
                                className='kutak-content'
                                value={kutakText}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});