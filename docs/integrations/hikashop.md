# Hikashop

* Enables webmasters to publish Moodle courses within a Hikashop storefront
* Allows buyers to purchase Moodle courses like any other Hikashop product
* Automatically enrolls buyers in their selected course(s)
* Sends customizable confirmation emails to buyers with purchase details and access instructions

## Required Plugins

To use Joomdle-Hikashop integration, you must install and enable these plugins:

* Hikashop Selling Courses
* Hikashop Orders

## Optional Plugins

Additional Joomdle-Hikashop plugins are available:

* **Hikashop Profile**: Uses Hikashop as an additional data source for profile information synced to Moodle
  * See [Field Data Mapping](#) for information on creating mappings to sync profile fields
* **Hikashop Joomdle Plugin**: Responds to Hikashop events (such as address updates) by calling Joomdle user sync functions
* **Hikashop Groups**
* **Hikashop Start Date**

**Important**: Only enable one Hikashop system plugin at a time: either Hikashop Orders, Hikashop Groups, or Hikashop Start Date.

## Hikashop Configuration

Ensure Hikashop is installed and functioning properly with standard products before proceeding.

### Create a New Hikashop Product Category

Navigate to the Hikashop Product Menu and create a new Product Category to organize your Moodle courses.

## Joomdle Configuration

### Joomla

To activate Joomdle's Hikashop integration, select it in the Joomdle Configuration under the Shop section.

#### Mandatory Settings

* **Courses Category**: Select the Hikashop Product Category where you want Moodle courses to appear

#### Optional Settings

* **Buy Courses for Children**: Enable this feature if needed (see [documentation](#) for details)
* **Send Enroll Emails**: Enable to have Joomdle send emails upon course purchases
* **Email Subject and Body**: Customize the email content using placeholders:
  * `COURSE_NAME` - Automatically populated with the course name from Moodle
  * `COURSE_URL` - Automatically populated with the course URL from Moodle
* **Send Bundle Emails**: Enable to send individual emails for each course when a bundle is purchased

### Moodle

The `enrol_joomdle.zip` package includes a new enrollment method for Moodle. While optional, this plugin provides useful features:

* Set course costs directly in Moodle
* Display a link to the shop when users attempt to access courses without enrolling

#### Installation

1. Install via Moodle's plugin installer: **Site Administration → Plugins → Install Plugins**
2. After installation, navigate to **Site Administration → Plugins → Enrollments → Manage Enroll Plugins**
3. Enable the new "Joomdle" enrollment method

#### Configuration

Click **Edit** to configure the following options:

* **Default Cost**: The default enrollment cost for courses
* **Currency**: Your preferred currency for course pricing
* **Enroll Message**: Message displayed when users attempt to access unpaid courses
  * Use `BUY_COURSE_URL` to insert a link to the product page in your shop

## Selling Courses

For detailed instructions on selling courses with Joomdle, see [Selling Courses with an E-commerce Extension](#).

## Tips & Tricks

If you're exclusively selling courses (not using the "buy for children" feature), you can configure Hikashop to hide the quantity selector, since purchasing multiple instances of a course doesn't make sense.

**To disable quantity input:**

Navigate to **Hikashop Configuration → Display → Product Options** and set **Quantity Input Method** to **None**.
