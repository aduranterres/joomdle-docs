# Community Builder

Joomdle integrates with [Community Builder](https://extensions.joomla.org/extension/community-builder/), a popular Joomla extension for user profile management. The integration allows Community Builder to act as an additional data source for user profile information synced to Moodle, and provides profile tab plugins that display Moodle-related information on a user's CB profile page.

## Available Plugins

* **Joomdle Profile Community Builder plugin** — Lets you use Community Builder as an additional data source for user profile information that is synced to Moodle.
* **Joomdle User Community Builder plugin** — Responds to Community Builder events by calling Joomdle user sync functions.
* **Community Builder My Courses** — Displays the courses the user is enrolled in on Moodle.
* **Community Builder My Certificates** — Displays the certificates the user has earned in Moodle.
* **Community Builder My Badges** — Displays the badges the user has earned in Moodle.

## How It Works

When a user's profile is updated in Community Builder, the Joomdle User plugin responds to those events and triggers the Joomdle user sync functions, keeping profile data consistent between Joomla and Moodle.

The optional profile tab plugins add new tabs to the user's Community Builder profile page, displaying their Moodle activity directly within Joomla.

## Configuration

The **Joomdle User Community Builder plugin** must be installed through Community Builder's own plugin installer, not through the standard Joomla extension installer.
