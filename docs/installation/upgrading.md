---
sidebar_position: 7
description: Upgrade Joomdle while keeping your existing configuration intact
---

# Upgrading Joomdle

This guide covers how to upgrade Joomdle to a newer version while keeping your existing configuration intact.

## Before You Upgrade

- **Back up your site** — Take a full backup of your Joomla and databases and files before proceeding.
- **Check compatibility** — Verify that the new Joomdle version is compatible with your current versions of Joomla and Moodle.
- **Read the release notes** — Review the changelog for any breaking changes or special upgrade instructions for your target version.

If you are upgrading from Joomdle 2.x to Joomdle 3.x read the [specific documentation](#upgrading-from-joomdle-2x-to-joomdle-3x).

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

Upgrading from Joomdle 2.x to 3.x on Joomla requires a special step: you will need to disable/remove all Joomdle plugins first, before installing the Joomdle 3.x package.

Moodle side can be upgraded normally.

## After Upgrading

1. Go to **Components → Joomdle → System check** in Joomla to verify the integration is still working correctly.
2. Test the Single Sign-On flow by logging in as a test user and confirming access to Moodle courses.
3. Clear Joomla and Moodle caches if you experience any unexpected behaviour.
