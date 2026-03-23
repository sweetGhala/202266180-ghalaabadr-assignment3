# AI Usage Report – Assignment 2

## 1. AI Tools Used

The following AI tool was used during development:

- ChatGPT (for code review, refactoring suggestions, and accessibility improvements)

No code was blindly copied without review or modification.

---

## 2. Purpose of AI Assistance

AI was used to assist in improving:

- Theme toggle logic structure
- Dark/light mode persistence using localStorage
- Accessibility best practices (ARIA attributes, focus states)
- CSS variable refactoring for maintainability
- Responsive layout optimization
- Implementing a show/hide project details interaction using JavaScript

AI was not used to generate the full project automatically.

---

## 3. Example Prompts Used

**Example Prompt 1:**

"Refactor this JavaScript dark mode toggle code to make it cleaner and more maintainable while saving user preference in localStorage."

**Example Prompt 2:**

"How can I improve accessibility for a theme toggle button using ARIA attributes?"

**Example Prompt 3:**

"Convert hard-coded CSS colors into CSS variables and improve dark mode structure."

---

## 4. Modifications and Validation

All AI-generated suggestions were manually reviewed and tested before integration.

The following changes were made after reviewing AI suggestions:

- Moved dark mode class from `<body>` to `<html>` for better theme control.
- Added `aria-pressed` and `aria-label` updates to the theme toggle button.
- Implemented `try-catch` blocks around localStorage usage to prevent potential errors.
- Added reduced motion support using `prefers-reduced-motion`.
- Adjusted CSS variables to improve readability and maintainability.
- Improved validation feedback messages to provide clearer user guidance.

All changes were tested in multiple browsers to ensure consistent behavior.

---

## 5. Understanding of Implementation

The theme system works by:

1. Checking localStorage for a stored theme preference.
2. If none exists, detecting the system’s preferred color scheme.
3. Applying a CSS class to the `<html>` element.
4. Updating button accessibility attributes.
5. Storing user selection for future visits.

The responsive layout is implemented using CSS Grid and Flexbox, with a mobile breakpoint at `600px`.

Accessibility enhancements ensure keyboard navigation support and visible focus indicators.

---

## 6. Limitations of AI Usage

AI was used as a supportive tool only.  
All final decisions, structure, and validation were performed manually.

No AI-generated code was integrated without testing and modification.

## 7. Learning Outcomes

Using AI during this assignment helped me better understand several front-end development concepts.

I learned how to structure JavaScript code more clearly, especially when implementing the theme toggle logic and managing theme persistence using localStorage.

AI suggestions also helped me improve accessibility by using ARIA attributes and visible focus indicators.

Additionally, I improved my understanding of CSS variables and how they simplify theme management for light and dark modes.

## 8. Challenges Encountered

One challenge was ensuring that the dark mode system worked consistently across different browsers.

Another challenge was organizing CSS variables correctly so that both light and dark themes updated properly.

I also had to review AI suggestions carefully to ensure they matched my project structure and did not introduce unnecessary complexity.

Testing each change helped ensure the final implementation worked correctly.