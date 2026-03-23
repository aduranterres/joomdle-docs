---
sidebar_position: 2
---

# Links behaviour

Configuration for how Moodle links are opened and displayed within the Joomla site.

## Open Moodle links in

Defines where to open Moodle links. Available options:

- **Wrapper** - Opens Moodle content inside a Joomla wrapper (iframe).
- **New window** - Opens Moodle content in a new browser window/tab.
- **Same window** - Opens Moodle content in the same browser window/tab.

To use the Wrapper, you may need to enable Allow frame embedding in Moodle configuration (at Site admin->Security->HTTP Security)

## Wrapper Scroll Bars

Whether to display scroll bars in the wrapper iframe.

## Wrapper Width

Width of the Moodle wrapper iframe. Can be set as a percentage (e.g. `100%`) or a fixed pixel value.

## Wrapper Height

Height of the Moodle wrapper iframe in pixels.

## Autoheight in wrapper

When enabled, the wrapper height is automatically adjusted to fit the Moodle content.

:::note
This only works when both Joomla and Moodle are on the same domain, unless [Cross-domain auto-height](#cross-domain-auto-height) is setup
:::

## Minimum wrapper height

Minimum height in pixels for the wrapper when autoheight is enabled. If the calculated wrapper height is less than this value, it is set to this number. This helps with some Moodle content such as PDFs.

## Cross-domain auto-height

Uses the iframe-resizer library to allow cross-domain auto-height. Requires further configuration in Moodle.

### Moodle Configuration

1. **Locate your theme folder** - Navigate to your active theme directory in Moodle's file system.

2. **Create JavaScript directory** - Create `moodle/theme/YOUR_THEME/javascript` if it doesn't already exist.

3. **Copy the resizer file** - Copy `moodle/auth/joomdle/js/iframeResizer.contentWindow.min.js` to your theme's javascript folder.

4. **Register the script** - Edit `moodle/theme/YOUR_THEME/config.php` and add one of the following:
   - If `javascripts` is not yet defined:
     ```php
     $THEME->javascripts = array ( 'iframeResizer.contentWindow.min' );
     ```
   - If `javascripts` already exists:
     ```php
     $THEME->javascripts[] = 'iframeResizer.contentWindow.min';
     ```

:::note
This feature is not guaranteed to work, because it depends on themes and security policies.
:::

## Moodle theme for wrapper

Moodle theme to use when displaying content inside the wrapper. This allows using a different, simplified theme (e.g. `classic`) for embedded content.

## Default Itemid

Default Joomla menu Itemid used for Moodle wrapper links.

## Joomdle Itemid

Itemid to use when linking to other views in the Joomdle component.

## Shop Itemid

Itemid to use for shop-related links.
