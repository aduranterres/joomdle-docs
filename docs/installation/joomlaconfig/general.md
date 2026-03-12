---
sidebar_position: 1
---

# General

General configuration tab for the Joomdle component.

## Moodle URL

URL of the Moodle server. This is the base URL used by Joomdle to communicate with Moodle.

## Moodle auth token

Authentication token used to connect to Moodle web services. This token is generated in Moodle and must match the one configured for the Joomdle web service user.

## Connection method

Connection method to use for web services. Available options:

- **file_get_contents** - Uses PHP's built-in `file_get_contents` function.
- **cURL** - Uses the cURL library.

## Joomla auth token

Authentication token to access Joomdle web services in Joomla. This token can be regenerated using the **Regenerate Joomla token** button in the toolbar.

## Use redirectless SSO

Enables redirectless Single Sign-On between Joomla and Moodle. When a user logs into Joomla, they are automatically logged into Moodle without any browser redirect. Only works with cURL enabled and Joomla and Moodle on the same domain.

## Use redirectless logout

Enables redirectless logout. When a user logs out of Joomla, they are automatically logged out of Moodle without any browser redirect. Only works with Joomla and Moodle on the same domain.

## Moodle Cookie Path

Path used for the Moodle session cookie. Only needed when using redirectless login or logout.

## Auto create Moodle users

When enabled, a corresponding Moodle account is automatically created whenever a new user is created in Joomla.

## Auto delete Moodle users

When enabled, the corresponding Moodle account is automatically deleted whenever a user is deleted in Joomla.

## User agent

User agent string sent in Joomdle web service calls to Moodle.
