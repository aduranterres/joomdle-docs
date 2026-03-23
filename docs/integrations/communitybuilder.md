# Community Builder

Joomdle integrates with [Community Builder](https://extensions.joomla.org/extension/community-builder/), a popular Joomla extension for user profile management. The integration allows Community Builder to act as an additional data source for user profile information synced to Moodle, and provides profile tab plugins that display Moodle-related information on a user's CB profile page.

## Available Plugins

* **Joomdle Profile Community Builder plugin** — Lets you use Community Builder as an additional data source for user profile information that is synced to Moodle. Installed through Joomla extension installer.
* **Joomdle User Community Builder plugin** — Responds to Community Builder events by calling Joomdle user sync functions. Installed through CB plugin installer.
* **Community Builder My Courses** — Displays the courses the user is enrolled in on Moodle. Installed through CB plugin installer.
* **Community Builder My Certificates** — Displays the certificates the user has earned in Moodle. Installed through CB plugin installer. 
* **Community Builder My Badges** — Displays the badges the user has earned in Moodle. Installed through CB plugin installer.

## How It Works

When a user's profile is updated in Community Builder, the Joomdle User plugin responds to those events and triggers the Joomdle user sync functions, keeping profile data consistent between Joomla and Moodle.

The optional profile tab plugins add new tabs to the user's Community Builder profile page, displaying their Moodle activity directly within Joomla.

## Configuration

### Joomdle Profile Plugin

Configured via the Joomla plugin manager (Plugins → Joomdle Profile - Community Builder).

#### Secondary Data Source

When enabled, Community Builder acts as an additional data source for user profile fields synced to Moodle. Use this when CB is not the primary source but you still want to pull certain field values from it.

#### Use CB API

Controls how CB profile fields are retrieved.

- **Yes** (default) — Uses the Community Builder API to read custom field values.
- **No** — Reads specific fields (`firstname`, `middlename`, `lastname`) directly from the database, bypassing the CB API.

### My Courses Plugin

Configured via the CB plugin manager.

#### Tab settings

| Option | Description |
|---|---|
| Display course count | Show the number of courses in the tab title. |
| Enable paging | Paginate the course list. |
| Items per page | Number of courses per page when paging is enabled. Default: 15. |

#### Global settings

| Option | Description |
|---|---|
| Link to | Where course titles link: **Moodle course** (default), **Joomdle course details page**, or **No link**. |
| Text when no courses | Custom message displayed when the user has no enrolled courses. |
| Show unenrol link | Display a link allowing the user to unenrol from a course. |
| Group by category | Group courses by their Moodle category. |
| Collapsible categories | Allow category groups to be collapsed and expanded. Requires **Group by category**. |
| Courses shown | Limit the tab to specific courses. Leave empty to show all. |
| Courses not shown | Exclude specific courses from the tab. |
| Categories shown | Limit the tab to specific course categories. Leave empty to show all. |
| Categories not shown | Exclude specific course categories from the tab. |
| Template | Template used to render the tab. |
| CSS class suffix | CSS class appended to the tab container for custom styling. |

### MyBadges Plugin

Configured via the CB plugin manager.

#### Tab settings

| Option | Description |
|---|---|
| Display badge count | Show the number of badges in the tab title. |
| Enable paging | Paginate the badge list. |
| Items per page | Number of badges per page when paging is enabled. Default: 15. |

#### Global settings

| Option | Description |
|---|---|
| Max badges | Maximum number of badges to retrieve. Set to `0` for unlimited. |
| Text when no badges | Custom message displayed when the user has no badges. |
| Link badges | Link each badge to its page in Moodle. |
| Template | Template used to render the tab. |
| CSS class suffix | CSS class appended to the tab container for custom styling. |

### MyCertificates Plugin

Configured via the CB plugin manager.

#### Tab settings

| Option | Description |
|---|---|
| Display certificate count | Show the number of certificates in the tab title. |
| Enable paging | Paginate the certificate list. |
| Items per page | Number of certificates per page when paging is enabled. Default: 15. |

#### Global settings

| Option | Description |
|---|---|
| Certificate type | The Moodle certificate module to use: **Custom Certificate** (default), **Moodle Certificate**, **SimpleCertificate**, or **Workplace Course Certificate**. |
| Show email certificate button | Display a button to send the certificate by email. |
| Text when no certificates | Custom message displayed when the user has no certificates. |
| Template | Template used to render the tab. |
| CSS class suffix | CSS class appended to the tab container for custom styling. |

