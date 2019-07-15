import './style.scss'
import './editor.scss'

const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;

const {
    RichText,
    InspectorControls,
} = wp.blockEditor;

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
                <RichText
                    tagName='div'
                    className={`kutak-${kutak}`}
                    value={kutakText}
                    onChange={onKutakTextChange}
                    placeholder={__('Kutak tekst')}
                />
            </Fragment>

        );
    },

    save: function (props) {
        const {attributes} = props;

        const {kutakText, kutak} = attributes;

        return (
            <RichText.Content
                tagName='div'
                className={`kutak-${kutak}`}
                value={kutakText}
            />
        );
    }
});