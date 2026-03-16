---
sidebar_position: 8
description: Fully remove Joomdle from your Joomla and Moodle installations
---

# Removing Joomdle

Follow these steps to fully remove Joomdle from your Joomla and Moodle installations.

## Before You Remove

- **Back up your site** — Take a full backup of both Joomla and Moodle before making any changes.
- **Joomdle user accounts** — Before you can remove the Joomdle auth plugin from Moodle, you will need to change the auth method for all users with auth=joomdle. You will need to set their auth method to manual for example, and change their passwords so they can access Moodle.

Deleting Joomdle will remove the Single Sign-On link between platforms. Users will need separate credentials for each system going forward.

## Remove the Moodle Plugin

1. In your Moodle admin panel, go to **Site administration → Plugins → Authentication → Manage authentication**.
2. Disable the **Joomdle** authentication plugin.
3. Go to **Site administration → Server → Web services → Manage tokens** and delete the Joomdle service token.
4. Go to **Site administration → Plugins → Authentication → Manage authentication** and click **Uninstall** next to the Joomdle plugin.

## Remove the Joomla Component

1. In your Joomla admin panel, go to **System → Manage → Extensions**.
2. Search for **Joomdle** in the extension list.
3. Select all Joomdle-related entries (component, plugins, modules).
4. Click **Uninstall** and confirm the action.

## Clean Up

After uninstalling, check for any remaining Joomdle-related items:

- **Menu items** — Remove any Joomla menu items that linked to Joomdle views.
- **Modules** — Check for any Joomdle modules still assigned to positions.
