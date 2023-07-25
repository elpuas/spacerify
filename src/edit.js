/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	Icon,
} from '@wordpress/components';
import { Fragment, useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes}) {
	const { desktopHeight, mobileHeight } = attributes;
	const styles = useBlockProps( {
		style: {
			'--desktop-height': `${ desktopHeight }px`,
			'--mobile-height': `${ mobileHeight }px`,
		},
	} );
	return (
		<Fragment>
			<InspectorControls>
				<Panel>
					<PanelBody title={ __( 'Spacerify Settings', 'spacerify' ) } >
						<PanelRow>{ __( 'Spacer Height in Pixels', 'spacerify' ) }</PanelRow>
						<PanelRow className='spacerify-desktop-panel-row'>
							<Icon icon="desktop" />
							<TextControl
								label={ __( 'Desktop Height', 'spacerify' ) }
								hideLabelFromVision={ true }
								value={ desktopHeight }
								type='number'
								className='spacerify-desktop-height'
								onChange={ ( value ) =>
									setAttributes( { desktopHeight: value } )
								}
							/>
						</PanelRow>
						<PanelRow className='spacerify-mobile-panel-row'>
							<Icon icon="smartphone" />
							<TextControl
								label={ __( 'Mobile Height', 'spacerify' ) }
								hideLabelFromVision={ true }
								value={ mobileHeight }
								type='number'
								className='spacerify-mobile-height'
								onChange={ ( value ) =>
									setAttributes( { mobileHeight: value } )
								}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div { ...useBlockProps( styles ) }></div>
		</Fragment>
	);
}
