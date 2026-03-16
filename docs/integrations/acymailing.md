# AcyMailing

Joomdle integrates with [AcyMailing](https://extensions.joomla.org/extension/acymailing-starter/), providing two features: automatic mailing list management synced with Moodle course enrolments, and tag replacement to embed Moodle content directly in your emails.

## Available Plugins

* **Joomdle Acymailing** — Enables mailing list management, automatically adding and removing users from AcyMailing lists based on their Moodle course enrolments.
* **Dynamics Joomdle** — Adds Moodle content tags to AcyMailing, allowing you to embed course information and user course lists in email templates.

## How It Works

### List Management

Joomdle can create mailing lists for all students, teachers, and parents associated with each course, as well as general lists across all courses.

- When a user enrols in a course, they are automatically added to the corresponding list.
- When a user unenrols, they are automatically removed.

### Tag Replacement

Once the Dynamics Joomdle package is installed, you can use Moodle tags in your AcyMailing emails to:

* Display specific course information
* Show the "My Courses" list for individual users

## Configuration

### Installing Dynamics Joomdle

Since AcyMailing does not provide a plugin system for add-ons, manual installation is required:

1. Unzip the package in `administrator/components/com_acym/dynamics/`
2. Insert a record in the database (replace `#_` with your DB prefix):

   ```sql
   INSERT INTO `#__acym_plugin`
     (`title`, `folder_name`, `version`, `latest_version`, `active`, `level`, `uptodate`, `type`, category, description)
   VALUES
     ('Joomdle', 'joomdle', '1.0', '1.0', 1, 'starter', 1, 'PLUGIN', 'Content management', '- Insert Moodle content in your emails');
   ```
