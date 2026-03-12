# Adding Custom Web Service Functions

You can extend Joomdle by creating custom Moodle web service functions and exposing them to Joomla.

## Steps

### 1. Create a Local Plugin

Build a Moodle local plugin to house your custom functions. See the [Moodle local plugins documentation](https://docs.moodle.org/dev/Local_plugins) for guidance.

### 2. Follow the Naming Convention

Prefix all function names with `joomdle_` so they can be called through Joomdle's method in Joomla.

Example: `joomdle_my_custom_function`

### 3. Register the Functions in Moodle

After installing your plugin:

1. Go to **Admin > Plugins > Web Services > External Services**
2. Find the **Joomdle** external service
3. Open the **Functions** section
4. Search for functions with the `joomdle` prefix
5. Add your functions to the Joomdle service

### 4. Call the Function from Joomla

Use `ContentHelper::callMethod()` to invoke your custom function:

```php
$params = ['param1' => 'Test string'];
$return = ContentHelper::callMethod('testjoomdlewsdemo', $params);
print_r($return);
```

## Demo Plugin

A demo plugin is available for download to help you get started with the development process.
