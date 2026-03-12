---
sidebar_position: 7
---

# Upgrading Joomdle

This guide covers how to upgrade Joomdle to a newer version while keeping your existing configuration intact.

## Before You Upgrade

- **Back up your site** — Take a full backup of your Joomla and databases and files before proceeding.
- **Check compatibility** — Verify that the new Joomdle version is compatible with your current versions of Joomla and Moodle.
- **Read the release notes** — Review the changelog for any breaking changes or special upgrade instructions for your target version.

## Upgrading the Joomla Component

1. Download the latest **Joomdle package** from the official Joomdle website.
2. In your Joomla admin panel, go to **System → Install → Extensions**.
3. Upload the new Joomdle package file.
4. Joomla will detect the existing installation and perform an upgrade automatically — your configuration will be preserved.

## Upgrading the Moodle Plugin

1. Download the latest **Joomdle auth plugin** for Moodle.
2. In your Moodle admin panel, go to **Site administration → Plugins → Install plugins**.
3. Upload the plugin ZIP file and proceed through the upgrade steps.

## Upgrading from Joomdle 2.x to Joomdle 3.x

Upgrading from Joomdle 2.x to 3.x requires a clean installation on the Joomla side — Joomdle 3 cannot be installed on top of Joomdle 2. You must remove all existing Joomdle packages from Joomla first before installing Joomdle 3.

### 1. Remove All Joomdle 2.x Packages from Joomla

1. In your Joomla admin panel, go to **System → Manage → Extensions**.
2. Search for **Joomdle** and select all Joomdle-related entries (component, plugins, modules).
3. Click **Uninstall** and confirm. Make sure no Joomdle extensions remain.

### 2. Install Joomdle 3.x in Joomla

1. Download the Joomdle 3 package from the official Joomdle website.
2. Go to **System → Install → Extensions** and upload the Joomdle 3 package.
3. Proceed with the standard [installation steps](#).

### 3. Upgrade the Moodle Plugin

1. Download the latest Joomdle 3 auth plugin for Moodle.
2. In Moodle, go to **Site administration → Plugins → Install plugins** and upload it.
3. Follow the upgrade steps and confirm the plugin settings.

---

## After Upgrading

1. Go to **Components → Joomdle → System check** in Joomla to verify the integration is still working correctly.
2. Test the Single Sign-On flow by logging in as a test user and confirming access to Moodle courses.
3. Clear Joomla and Moodle caches if you experience any unexpected behaviour.
