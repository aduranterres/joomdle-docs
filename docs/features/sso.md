---
sidebar_position: 1
---
# Single Sign On (SSO)

Joomdle provides **Single Sign On (SSO)** between Joomla and Moodle.

Therefore, user logins can be performed using Joomla's or Moodle's login page and eliminates the need to log in a second time when the user enters the other platform.

## SSO Features

Joomdle's SSO provides the following functions:

- When the user logs in either Joomla or Moodle, they are automatically logged into the other.
- When the user logs out of either Joomla or Moodle, they are automatically logged out of the other.
- User sessions are synchronized between both platforms.

## Master Platform

Joomla is used as the **"master"**. That is, credentials are always checked against Joomla information, no matter how the user enters the system.

## SSO Modes

SSO can be performed in two ways:

### 1. With Redirect (Default)
- Used by default.
- Works on most sites.

### 2. Without Redirect
- Only works with cURL.
- Requires both Moodle and Joomla to be on the same domain.
- Useful if you have problems with redirection (for example, when using JavaScript-based logins, AJAX calls, or e-commerce extensions).

This is controlled with the **"Use redirectless SSO"** option in Joomdle configuration in Joomla.

## Important Notice

When Joomdle uses login/logout with redirection, no more plugins will be executed afterward, as the redirection stops the normal Joomla process.

This is usually not important because the **Joomdlehooks user plugin** is set to execute after all other plugins. However, in some situations, it may cause issues.

If you notice something not working as expected, you can temporarily disable the **Joomdle user plugin** plugin to check if it is causing the problem.

