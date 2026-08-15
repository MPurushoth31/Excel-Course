# Excel Chapter 01 — Professional Chapter Accordion Build

This build preserves the existing Chapter 01 lesson content and improves the course navigation structure.

## Current Chapter 01 lessons
1.1 What is Excel?
1.2 Why Learn Excel
1.3 Advantages & Disadvantages
1.4 Excel Fundamentals / Basic Terminology
1.5 Understanding the Excel Worksheet
1.6 Workbook vs Worksheet
1.7 Data Types
1.8 Excel File Formats

## Navigation architecture
- Chapter-level accordion / dropdown structure
- Chapter 01 contains all 8 current lessons
- Chapter 02 is already represented as a collapsed expandable chapter placeholder
- Future chapters can be added using the same `chapter-group` structure without changing Chapter 01 lesson content
- Clicking a chapter expands/collapses its lesson list
- Selecting a lesson updates the main lesson frame, title, subtitle, progress, navigation and completion state
- Mobile drawer and desktop sidebar share the same chapter structure

## Other behavior preserved
- Original embedded lesson content remains intact
- Dynamic iframe height handling
- Tamil Mix layer
- Dark mode synchronization
- Responsive desktop / tablet / mobile layout
- Previous / Next navigation
- Lesson progress and completion state

## Run
Open `index.html` directly in a modern browser.
