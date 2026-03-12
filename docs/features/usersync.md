---
sidebar_position: 2
---
# User Synchronization

Joomdle provides full user synchronization between Joomla and Moodle, ensuring that user accounts and profile data remain consistent across both platforms.



## Core Synchronization Features

### Automatic User Creation

- When a user is created in **Joomla**, they can be automatically created in **Moodle**.
- When a user is created in **Moodle**, they can be automatically created in **Joomla**.

#### Configuration Requirements

- **Joomla → Moodle sync**  
  Enable **"Auto create Moodle users"** in the Joomdle configuration in Joomla.

- **Moodle → Joomla sync**  
  - Enable **"Sync users to Joomla"** in the Joomdle configuration in Moodle.  
  - The Moodle user’s authentication method must be set to **"Joomdle"**.



### Automatic User Deletion

- When a user is deleted in Joomla, they are automatically deleted in Moodle.
- When a user is deleted in Moodle, they are automatically deleted in Joomla.



### Profile Synchronization

- When a user updates their profile in Joomla or Moodle, the changes are reflected on the other platform.
- Option to select an **additional data source** for user profile information (Hikashop, Community Builder...).
- Full **field data mapping** support.



### Additional Tools

- Batch import users in Moodle and automatically create them in Joomla.
- Tools for migrating existing Moodle–Joomla installations.
- Moodle profile editing blocking (to centralize profile management).



## Centralized User Profiles

Joomdle allows you to centralize user profile data, ensuring consistent information across Joomla, Moodle, and supported third-party Joomla extensions.

It leverages Joomla third-party extensions to allow users to manage their personal details from a single source of truth.



## Field Data Mapping

Field mapping allows you to define relationships between Joomla and Moodle profile fields so that Moodle data always stays consistent with Joomla.

### How to Configure Field Mapping

1. Enable an **Additional Data Source** in the Joomdle component configuration.
2. Go to the **Mappings** option in the Joomdle backend.
3. Define the relationships between Joomla and Moodle fields.

You can create or modify mappings at any time.


# Using Multiple Third-Party Extensions

Joomdle integration plugins allow you to combine multiple Joomla components and map their fields to Moodle.

### Important Notes

- You **cannot sync the same Moodle field** to multiple Joomla extensions.
- When using this setup, **profile information cannot be synced from Moodle to Joomla** (Joomla becomes the master source).



### Creating Mappings for Multiple Components

To sync profile data from two or more Joomla components:

1. Enable Joomdle integration plugins for both components.
2. In one plugin, enable **"Use as secondary data source for profile data"**.  
   - Call this plugin **SECOND**.  
   - The other plugin will be **FIRST**.
3. In **Joomdle Configuration (Joomla) → User Profiles**, set **SECOND** as the **Additional data source**.
4. Create mappings for the SECOND integration.
5. Change the **Additional data source** setting to **FIRST**.
6. Create mappings for the FIRST integration.

After completing these steps, profile information from both components will sync correctly to Moodle.

