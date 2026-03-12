---
sidebar_position: 4
---

# Shop

Configuration for e-commerce integration, allowing courses to be sold through a Joomla shop extension.

## Shop Integration

Select the e-commerce extension to use for selling courses. You can add more options by downloading specific plugins from joomdle.com.

## Courses category

Shop category where course products should be created.

## Send enrol emails

When enabled, a welcome email is sent to buyers once they purchase a course.

## Subject of email

Subject line of the email sent to students once they buy a course. The following placeholders can be used:

- `COURSE_NAME` - Replaced with the name of the purchased course.
- `COURSE_URL` - Replaced with the URL of the purchased course.

## Body of email

Body of the email sent to students once they buy a course. Supports HTML formatting. The following placeholders can be used:

- `COURSE_NAME` - Replaced with the name of the purchased course.
- `COURSE_URL` - Replaced with the URL of the purchased course.

## Send bundle emails

Controls how welcome emails are sent when a student purchases a bundle of courses. Available options:

- **One email per bundle** - Sends a single email covering all courses in the bundle.
- **One email per course** - Sends a separate email for each course in the bundle.
- **No** - Does not send any email for bundle purchases.

## Subject of bundle email

Subject line of the email sent to students once they buy a bundle. The following placeholder can be used:

- `BUNDLE_NAME` - Replaced with the name of the purchased bundle.

## Body of bundle email

Body of the email sent to students once they buy a bundle. Supports HTML formatting. The following placeholders can be used:

- `BUNDLE_NAME` - Replaced with the name of the purchased bundle.
- `BUNDLE_COURSES` - Replaced with the list of courses included in the bundle.
