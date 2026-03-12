# Modifying Joomdle Look and Feel

Joomdle views and modules can be customized through template overrides, following Joomla's standard customization methodology.

## Steps

### 1. Create Directory Structure

Create the following folders in your template:

```
TEMPLATE_NAME/html/com_joomdle/
TEMPLATE_NAME/html/com_joomdle/joomdle/
```

### 2. Copy Template Files

Copy the default view template to your template override directory:

```
/components/com_joomdle/views/joomdle/tmpl/default.php
→ TEMPLATE_NAME/html/com_joomdle/joomdle/default.php
```

### 3. Customize the Layout

Modify the copied file to meet your needs. Your changes will take effect without altering Joomdle's core files.

## Additional Resources

For comprehensive override instructions, refer to the official [Joomla template overrides documentation](https://guide.joomla.org/user-manual/templates/templates-template-overrides).

The Joomdle demo site includes examples where template overrides were implemented to achieve better template integration.
