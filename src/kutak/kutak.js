import './style.scss'
import './editor.scss'

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
    title: __('kutak for visual editor'),
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
                    <div>
                        <PanelBody title={__('kutak-tip')}>
                            <SelectControl
                                label={__('Izaberi tip kutka')}
                                value={kutak}
                                options={[
                                    {label: 'promislite', value: 'promislite'},
                                    {label: 'istrazite', value: 'istrazite'},
                                ]}
                                onChange={(kutak) => {
                                    setAttributes({kutak})
                                }}
                            />
                        </PanelBody>
                    </div>
                </InspectorControls>

                <div className='container'>
                    <div className='row'>
                        <div className="col">
                            <div className={`is__widget kutak kutak-${kutak}`}>
                                <p>
                                    <RichText
                                        tagName='span'
                                        className='widget-inner-title'
                                        value={kutakText}
                                        onChange={onKutakTextChange}
                                        placeholder={__('Kutak tekst')}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>

        );
    },

    save: function (props) {
        const {attributes} = props;

        const {kutakText, kutak} = attributes;

        return (

            <div className='container'>
                <div className='row'>
                    <div className="col">
                        <div className={`is__widget kutak kutak-${kutak}`}>
                            <p>
                                <RichText.Content
                                    tagName='span'
                                    className='widget-inner-title'
                                    value={kutakText}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            // <RichText.Content
            //     tagName='div'
            //     className={`kutak-${kutak}`}
            //     value={kutakText}
            // />
        );
    }
});