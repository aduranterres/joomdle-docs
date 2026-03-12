---
sidebar_position: 2
---

# Links behaviour

Configuration for how Moodle links are opened and displayed within the Joomla site.

## Open Moodle links in

Defines where to open Moodle links. Available options:

- **Wrapper** - Opens Moodle content inside a Joomla wrapper (iframe).
- **New window** - Opens Moodle content in a new browser window/tab.

## Wrapper Scroll Bars

Whether to display scroll bars in the wrapper iframe.

## Wrapper Width

Width of the Moodle wrapper iframe. Can be set as a percentage (e.g. `100%`) or a fixed pixel value.

## Wrapper Height

Height of the Moodle wrapper iframe in pixels.

## Autoheight in wrapper

When enabled, the wrapper height is automatically adjusted to fit the Moodle content.

## Minimum wrapper height

Minimum height in pixels for the wrapper when autoheight is enabled. If the calculated wrapper height is less than this value, it is set to this number. This helps with some Moodle content such as PDFs.

## Cross-domain auto-height

Uses the iframe-resizer library to allow cross-domain auto-height. Requires further configuration in Moodle.

## Moodle theme for wrapper

Moodle theme to use when displaying content inside the wrapper. This allows using a different, simplified theme (e.g. `classic`) for embedded content.

## Default Itemid

Default Joomla menu Itemid used for Moodle wrapper links.

## Joomdle Itemid

Itemid to use when linking to other views in the Joomdle component.

## Shop Itemid

Itemid to use for shop-related links.
