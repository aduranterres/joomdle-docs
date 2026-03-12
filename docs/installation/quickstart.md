---
sidebar_position: 1
---
# Quickstart

## Joomla

1. Install the **Joomdle** Joomla package.
2. Go to **Components → Joomdle → Configuration**.
3. Enter the **Moodle URL** and save the configuration.
4. Copy the **Joomla auth token** that was generated.
5. Enable the **Joomdle user plugin**

## Moodle

1. Install the **auth plugin** in Moodle.
2. A new settings page will appear — enter the **Joomla URL** and the **Joomla auth token**, then save the configuration.
3. Go to **Site administration → Plugins → Authentication → Manage authentication** and enable the **Joomdle** plugin.
4. Go to **Site administration → Server → Web services → Manage tokens** and copy the token for the **Joomdle service**.

## Back to Joomla

1. Enter the **Moodle auth token** and save the configuration.
2. Go to **Components → Joomdle → System check** to verify everything is working as expected.

