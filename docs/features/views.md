---
sidebar_position: 3
---
# Joomdle Views

With the Joomdle views, you can show information from Moodle in Joomla, such as courses, certificates, etc.


## Coursecategories

Lists all available Moodle course categories.



## Coursecategory

Shows the courses and subcategories within a specific category.

**Settings:**
- **Category** — the category to display.



## Coursesabc

Lists all available courses in alphabetical order.

**Settings:**
- **Start chars** — letters used to build the alphabetical index.



## Joomdle

Generic courses listing view.

**Settings:**
- **Enrollable only** — whether to show only courses the user can enrol in.
- **Show buttons** — whether to show action buttons on each course.
- **Show description** — whether to show the course description.
- **Sort by** — order courses by name, date, or Moodle sort order.



## Detail

Shows the details of a single course.

**Settings:**
- **Course** — the course to display.



## Topics

Shows the topics/sections of a course.



## Courseevents

Lists the events of a course.

**Settings:**
- **Course** — the course whose events are displayed.



## Coursegrades

Shows the grade items for a course. Only visible to enrolled users. Can also export the grades as a PDF file.

**Settings:**
- **Course** — the course whose grades are displayed.



## Coursegradecategories

Shows the grade categories for a course.

**Settings:**
- **Course** — the course whose grade categories are displayed.



## Mycourses

Shows the courses the logged-in user is enrolled in. Supports grouping by category.

**Settings:**
- **Group by category** — whether to group courses by their category.
- **Link to** — where course links point to: the Moodle course page or the Joomdle course detail view.
- **No courses text** — custom message shown when the user has no courses.
- **Show unenrol link** — whether to show a link to unenrol from each course.
- **Show images and summary** — whether to show the course image and summary.
- **Courses to include** — only show courses from this list (leave empty for all).
- **Courses to exclude** — hide courses from this list.
- **Categories to include** — only show courses belonging to these categories.
- **Categories to exclude** — hide courses belonging to these categories.



## Mygrades

Shows the grades of the logged-in user across their courses. Supports a gradebook layout that groups grades by category.

**Settings:**
- **Layout** — display style: *Basic* (flat list) or *Gradebook* (grouped by grade category).



## Mycertificates

Shows the certificates earned by the logged-in user.

**Settings:**
- **Show send certificate button** — whether to show a button to send the certificate.
- **Certificate type** — the Moodle certificate plugin to use: *Moodle Certificate module*, *Simplecertificate*, *Custom certificate*, or *Workplace course certificate*.



## Sendcert

Provides a form to send a certificate.



## Teachers

Lists the teachers of a course.



## Teacher

Shows the profile of a single teacher along with the courses they teach.



## Wrapper

Embeds a Moodle page inside the Joomla site using an iframe.

**Settings:**
- **Page type** — which Moodle page to embed: *Moodle home*, *Course*, *Edit Moodle profile*, or *Custom URL*.
- **Course** — the course to embed (when page type is *Course*).
- **Custom URL** — a custom Moodle URL to embed (when page type is *Custom URL*).
