---
sidebar_position: 5
---

# Joomdle configuration - Moodle

This document describes the configuration settings for the **auth_joomdle** authentication plugin on the Moodle side of a Joomdle integration.

To access these settings, go to **Site administration > Plugins > Authentication > Joomdle** in your Moodle instance.

## Joomla Connection

### Joomla URL
`auth_joomdle | joomla_url`

The full URL of your Joomla server (e.g., `http://localhost/j6`). This is the base URL that Moodle will use to communicate with Joomla through the Joomdle web services.

### Joomdle's Joomla authentication token
`auth_joomdle | joomla_auth_token`

The authentication token configured in the Joomdle component on the Joomla side. This token must match the one set in Joomla's Joomdle configuration to allow secure communication between both systems.

### Connection method
`auth_joomdle | connection_method`

The PHP method used to connect to the Joomla web services. Default is `file_get_contents`. Alternative methods may be available depending on your server configuration.

### Web services protocol
`auth_joomdle | ws_protocol`

The protocol used for web services communication between Moodle and Joomla. Default is `REST`.

## User Synchronization

### Sync users to Joomla
`auth_joomdle | sync_to_joomla`

When enabled, new user registrations and profile updates in Moodle are automatically synchronized to Joomla. This ensures user accounts stay consistent across both platforms. Default: **No**.

### Joomla default language
`auth_joomdle | joomla_lang`

The default Joomla language string. This setting is only needed when multi-language support is enabled in Joomla. Leave empty if not using Joomla's multi-language feature.

### Joomla SEF enabled
`auth_joomdle | joomla_sef`

Enable this if Joomla's Search Engine Friendly (SEF) URLs are active. Only needed when multi-language support is enabled in Joomla. Default: **No**.

## Single Sign-On (SSO)

### Use redirect-less SSO
`auth_joomdle | redirectless_sso`

When enabled, SSO is performed without redirecting the user between sites. This method requires cURL to be available on the server. Default: **No**.

### Single log out
`auth_joomdle | single_log_out`

When enabled, logging out of Moodle will also log the user out of Joomla. This provides a unified logout experience across both platforms. Default: **Yes**.

### Redirect to Joomla on Moodle logout
`auth_joomdle | logout_redirect_to_joomla`

When enabled, the user is redirected to the Joomla site after logging out of Moodle. Default: **No**.

### Use logout with redirect
`auth_joomdle | logout_with_redirect`

Enable this option when using cross-domain setups or when the "remember me" feature is active. It ensures proper session handling during logout in these scenarios. Default: **No**.

## Enrolment and Roles

### Enrol parents in courses
`auth_joomdle | enrol_parents`

When enabled, parents are automatically enrolled in their children's courses. This allows parents to monitor their children's progress. Default: **No**.

### Parent role
`auth_joomdle | parent_role_id`

The Moodle role assigned to parents when they are enrolled in their children's courses. Available roles depend on your Moodle role configuration (e.g., Manager, Non-editing teacher).

## Additional Features

### Give points
`auth_joomdle | give_points`

When enabled, karma points are awarded to users following the configuration set in Joomla. Requires a compatible points system on the Joomla side. Default: **No**.

### Auto mailing lists
`auth_joomdle | auto_mailing_lists`

When enabled, mailing lists are automatically managed based on the Joomla configuration. Users are added or removed from mailing lists according to their course enrolments. Default: **No**.

### Use Joomla user groups
`auth_joomdle | joomla_user_groups`

When enabled, Joomla user groups are automatically created and managed for students and teachers. This allows you to use Joomla's access control based on Moodle roles. Default: **No**.

### Forward Moodle events to Joomla
`auth_joomdle | forward_events`

When enabled, Moodle events are forwarded to Joomla so that Joomla plugins can react to them. This allows extending functionality on the Joomla side based on Moodle activity. Default: **No**.
