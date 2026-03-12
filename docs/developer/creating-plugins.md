# Creating Plugins

Joomdle makes heavy use of Joomla plugins to provide functionality in a modular way. Developers can extend Joomdle by creating two types of plugins.

## Plugin Types

### Joomla Integration Plugins

These plugins connect third-party Joomla components to Joomdle. Examples of existing integrations:

| Plugin | Purpose |
|---|---|
| `joomdleshop` | Shop integration |
| `joomdleprofile` | Profile integration |

### Moodle Events Plugins

These plugins respond to actions that occur in Moodle. Events are forwarded to Joomla when the **Forward Moodle events to Joomla** option is enabled.

## Available Moodle Events

| Category | Events |
|---|---|
| Users | Creation, updates, deletion, password changes |
| Role assignments | Assign, unassign |
| Courses | Creation, updates, deletion |
| Course modules | Creation, updates, deletion |
| Learning activities | Quiz submissions, course completion |

## Developer Resources

The **Joomdleevent Example** plugin demonstrates all available events by logging their arguments to a temporary file, making it a useful starting point for development.
