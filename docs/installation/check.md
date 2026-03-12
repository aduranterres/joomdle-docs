---
sidebar_position: 6
---

# System Health Check

Joomdle includes a built-in diagnostic tool to verify that all prerequisites are met and that the integration between Joomla and Moodle is working correctly.

## Running the System Check

1. Log in to your Joomla admin panel.
2. Go to **Components → Joomdle → System check**.
3. Joomdle will run a series of tests and display the results.

## What the System Check Tests

### allow_url_fopen

Confirms that the PHP setting `allow_url_fopen` is enabled on your server. This check only applies if Joomdle is configured to use `file_get_contents` for HTTP requests in the Joomdle configuration.

**If this fails:**
- On a dedicated server, set `allow_url_fopen = On` in your `php.ini`.
- On shared hosting, contact your hosting provider to enable this setting.

---

### cURL Enabled

Checks that the PHP cURL extension is installed and enabled. This check only applies if Joomdle is configured to use **cURL** for HTTP requests in the Joomdle configuration.

**If this fails:**
- On a dedicated server, install or enable the `php-curl` extension and restart your web server.
- On shared hosting, contact your hosting provider to enable cURL.

> **Note:** In the Joomdle configuration you can choose whether HTTP requests are made using cURL or `file_get_contents`. Only the check relevant to your chosen method needs to pass.

---

### Joomdle User Plugin

Checks whether the Joomdle User Plugin is activated in Joomla.

**If this fails:**
- Go to **Extensions → Manage → Plugins** in your Joomla admin panel.
- Search for the Joomdle plugin and enable it.

---

### Joomla to Moodle HTTP Connectivity

Tests whether your Joomla server can establish an HTTP connection to Moodle.

**Note:** A failure here does not always indicate a critical problem — if the Web Services check below passes, this can be ignored. Failures are sometimes caused by server-side security rules.

---

### Moodle to Joomla HTTP Connectivity

Tests whether Moodle can connect back to your Joomla site.

**Note:** As above, if web services are functioning correctly this failure can be ignored. Check firewall rules and DNS if you want to resolve it.

---

### Joomdle Web Services

This is the most important check. It verifies that Moodle web services are correctly configured for Joomdle. Several specific errors can appear here:

#### Joomdle Auth Plugin Not Enabled
- In Moodle, go to **Site administration → Users → Authentication → Manage authentication** and enable the **Joomdle** plugin.

#### Joomla URL Not Configured in Moodle
- In Moodle, go to **Site administration → Users → Authentication → Joomdle** and enter your Joomla site URL.

#### Empty Response from Moodle
This indicates that Joomla cannot properly access Joomdle web services in Moodle.

- Verify that the Moodle URL in **Components → Joomdle → Configuration** exactly matches `$CFG->wwwroot` in your `moodle/config.php`.
- Ensure Web services and the REST protocol are enabled in Moodle.
- Check for firewall, DNS, or connectivity issues between the two servers.

#### Joomla URL Seems Misconfigured
This indicates that Moodle cannot properly access Joomdle web services in Joomla.

- Ensure the URL includes the protocol (`http://` or `https://`).
- Check your Joomla multi-language settings.
- Verify that Apache `mod_security` or any Joomla security extensions are not blocking requests — temporarily disable them to test, then whitelist your server IP if needed.
- Disable any Joomla SEF (Search Engine Friendly) extensions and retest.

#### E_DEPRECATED Errors Enabled
PHP deprecated error reporting can interfere with Joomdle responses. Edit your `php.ini` and set:

```
error_reporting = E_ALL & ~E_DEPRECATED
```

On shared hosting, contact your provider to apply this change.

---

#### Something is Wrong with Joomdle Web Services Setup
Check **Site administration → Notifications** in Moodle for error details. If you see duplicate key errors in the database, run the following queries and then revisit the Notifications page:

```sql
DELETE FROM mdl_config_plugins WHERE plugin LIKE '%joomdle%';
DELETE FROM mdl_mnet_host2service WHERE hostid=0 AND serviceid=4;
DROP TABLE mdl_joomdle_dummytable;
```

## Diagnostic Log Files

When the System Check runs, Joomdle writes diagnostic XML files that can help identify problems:

- `<joomla_folder>/logs/joomdle_system_check.xml`
- `<moodledata_folder>/temp/joomdle_system_check.xml`

Inspect these files for unexpected HTML tags (such as `<head>`) embedded in the XML — this indicates that something on either site is injecting output before the response. If found in the Moodle-side file, investigate your Joomla installation:

- Temporarily switch to a default Joomla front-end template and retest.
- Disable non-core plugins, particularly system-type plugins, one by one.


## Re-running the Check

You can run the System Check at any time — for example, after changing configuration settings or upgrading Joomdle — to confirm everything is still working as expected.
