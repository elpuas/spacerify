<?php
/**
 * Plugin Name:       Spacerify
 * Description:       Spacerify: A responsive spacer block with customizable values for desktop and mobile layouts.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            ElPuas Digital Crafts
 * Author URI:        https://elpuas.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       spacerify
 *
 * @package           elpuasdigitalcrafts
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function elpuasdigitalcrafts_spacerify_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'elpuasdigitalcrafts_spacerify_block_init' );
