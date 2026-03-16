# HikaShop

Joomdle integrates with [HikaShop](https://extensions.joomla.org/extension/hikashop/), enabling you to sell Moodle courses through a HikaShop storefront. Courses are published as products, buyers are automatically enrolled upon purchase, and customizable confirmation emails can be sent with access instructions.

## Available Plugins

* **Joomdleshop Hikashop** — Publishes Moodle courses as HikaShop products, enabling them to be sold through the storefront.
* **System Joomdlehikashop** — Processes HikaShop orders and automatically enrols buyers in their purchased Moodle courses.
* **System Joomdlehikashopgroups** — Assigns users to specific Moodle course groups upon purchase. Use this instead of **System Joomdlehikashop** if you need group assignment.
* **Hikashop Profile** — Uses Hikashop as an additional data source for profile information synced to Moodle. See [Field Data Mapping](../features/usersync#field-data-mapping) for information on creating field mappings.
* **Hikashop Joomdle Plugin** — Responds to Hikashop events (such as address updates) by calling Joomdle user sync functions.

:::note
Only enable one system plugin at a time: either **System Joomdlehikashop** or **System Joomdlehikashopgroups**.
:::

## How It Works

When a user purchases a Moodle course product in HikaShop, Joomdle automatically enrols them in the corresponding Moodle course. If configured, a confirmation email is sent to the buyer with course details and access instructions.

For more details on the selling workflow, see [Selling Moodle Courses Through Joomla](../features/sellshop).

## Configuration

### HikaShop

Ensure HikaShop is installed and functioning properly with standard products before proceeding.

1. Navigate to the HikaShop Product menu and create a new **Product Category** to organize your Moodle courses.

### Joomla

To activate Joomdle's HikaShop integration, select it in **Joomdle backend → Configuration → Shop**.

#### Mandatory Settings

* **Courses Category** — Select the HikaShop Product Category where Moodle courses should appear.

#### Optional Settings

* **Send Enroll Emails** — Enable to send emails upon course purchase.
* **Email Subject and Body** — Customize email content using placeholders:
  * `COURSE_NAME` — The course name from Moodle.
  * `COURSE_URL` — The course URL from Moodle.
* **Send Bundle Emails** — Send individual emails for each course when a bundle is purchased.

### Moodle (optional)

The `enrol_joomdle.zip` package adds a new enrollment method to Moodle that lets you set course costs directly in Moodle and display a link to the shop when users try to access a course without being enrolled.

**Important:** This enrollment methdod is not really used to enrol the students, so it is not required for selling courses.

**Installation:**

1. Install via **Site Administration → Plugins → Install Plugins**.
2. Go to **Site Administration → Plugins → Enrollments → Manage Enroll Plugins** and enable the **Joomdle** enrollment method.

**Settings:**

* **Default Cost** — The default enrollment cost for courses.
* **Currency** — Your preferred currency.
* **Enroll Message** — Message shown when users attempt to access unpaid courses. Use `BUY_COURSE_URL` to insert a link to the product page.

## Tips & Tricks

If you're exclusively selling courses, you can hide the quantity selector in HikaShop, since purchasing multiple instances of a course doesn't make sense.

Navigate to **HikaShop Configuration → Display → Product Options** and set **Quantity Input Method** to **None**.
