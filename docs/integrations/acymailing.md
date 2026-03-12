# Acymailing

Joomdle offers integration with the Acymailing component, providing two key features:

* List management
* Tag replacement

## List Management

Joomdle enables you to create mailing lists for all students, teachers, and parents associated with each course. You can also maintain general lists for teachers, students, and parents across all courses.

### How It Works

1. **Create Lists**: First, create the mailing lists you want to use
2. **Auto-Population**: When you create a list, it automatically populates with the students and teachers of the specific course
3. **Dynamic Updates**: 
   * When a user enrolls in a course, they are automatically added to the corresponding list
   * When a user unenrolls, they are automatically removed from the list

This automation ensures your mailing lists stay synchronized with your course enrollments without manual intervention.

## Tag Replacement

To use this feature, you must install and enable the Acymailing plugin for tag replacement.

### Required Package

* **Dynamics Joomdle**

### Installation

Since Acymailing does not provide a plugin system for easily adding new add-ons, manual installation is required:

1. Unzip the package in `administrator/components/com_acym/dynamics/`
2. Insert a record in the DB (replace #_ by yor DB prefix):

   ```sql
   INSERT INTO `#__acym_plugin`
     (`title`, `folder_name`, `version`, `latest_version`, `active`, `level`, `uptodate`, `type`, category, description)
   VALUES
     ('Joomdle', 'joomdle', '1.0', '1.0', 1, 'starter', 1, 'PLUGIN', 'Content management', '- Insert Moodle content in your emails');
   ```

This integration allows you to:

* Display specific course information
* Show the "My Courses" list for individual users

