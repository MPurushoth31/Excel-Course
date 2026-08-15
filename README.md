# Excel Chapter 01 — Master Responsive Educational Website

All 8 original lesson documents are preserved inside one master HTML file.

Lessons: 1.1 What is Excel / About Microsoft Excel, 1.2 Why Learn Excel, 1.3 Advantages & Disadvantages, 1.4 Excel Fundamentals / Basic Terminology, 1.5 Understanding the Excel Worksheet, 1.6 Workbook vs Worksheet, 1.7 Data Types, 1.8 Excel File Formats.

Added without removing lesson content: responsive laptop/tablet/mobile shell, automatic iframe sizing, robust responsive safety, master Tamil Mix layer with natural Tamil-English explanations for every topic, chapter navigation, progress, completion, dark mode, and mobile lesson drawer.

The Tamil Mix explanation is intentionally additive; the original English lesson content remains unchanged below it. Open index.html directly.


## Responsive / iframe stability fixes
- Removed the iframe/viewport height feedback loop caused by inner `100vh` hero sizing.
- Lesson frames are dynamically sized to content and have no internal scrolling.
- ResizeObserver feedback was removed; content changes use a debounced MutationObserver.
- Laptop, tablet and mobile layouts remain responsive.
- Original lesson srcdoc content is preserved; these fixes only affect hosting/responsiveness.
