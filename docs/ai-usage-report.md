# AI Usage Report – Assignment 3

## 1. AI Tools Used

The following AI tool was used during development:

- ChatGPT (for code review, refactoring suggestions, debugging, and feature implementation support)

No code was blindly copied without review or modification.

---

## 2. Purpose of AI Assistance

AI was used to assist in improving:

- Theme toggle logic structure
- Dark/light mode persistence using localStorage
- Accessibility best practices (ARIA attributes, focus states)
- CSS variable refactoring for maintainability
- Responsive layout optimization
- Implementing show/hide project details using JavaScript
- GitHub API integration (fetching and displaying data dynamically)
- Project filtering logic using JavaScript
- Error handling for API requests

AI was not used to generate the full project automatically.

---

## 3. Example Prompts Used

**Example Prompt 1:**

"Refactor this JavaScript dark mode toggle code to make it cleaner and more maintainable while saving user preference in localStorage."

**Example Prompt 2:**

"How can I improve accessibility for a theme toggle button using ARIA attributes?"

**Example Prompt 3:**

"Convert hard-coded CSS colors into CSS variables and improve dark mode structure."

**Example Prompt 4:**

"How can I fetch data from the GitHub API and display repositories dynamically using JavaScript?"

---

## 4. Modifications and Validation

All AI-generated suggestions were manually reviewed and tested before integration.

The following changes were made after reviewing AI suggestions:

- Moved dark mode class from `<body>` to `<html>` for better theme control
- Added `aria-pressed` and `aria-label` updates to the theme toggle button
- Implemented `try-catch` blocks around localStorage usage to prevent errors
- Added reduced motion support using `prefers-reduced-motion`
- Refactored CSS using variables for better maintainability
- Improved validation feedback messages for better user experience
- Implemented API fetching using the `fetch()` function
- Added error handling for failed API requests
- Limited displayed repositories using array slicing
- Filtered repositories to improve relevance

All changes were tested in multiple browsers to ensure consistent behavior.

---

## 5. Understanding of Implementation

The theme system works by:

1. Checking localStorage for a stored theme preference
2. If none exists, detecting the system’s preferred color scheme
3. Applying a CSS class to the `<html>` element
4. Updating button accessibility attributes
5. Storing user selection for future visits

The GitHub API integration works by sending a request using `fetch()` to retrieve repository data. The response is converted to JSON and dynamically rendered into the DOM.

The filtering system works by assigning a custom attribute (`data-tech`) to each project. JavaScript listens for user input and dynamically shows or hides projects based on the selected filter.

The responsive layout is implemented using CSS Grid and Flexbox, with a mobile breakpoint at `600px`.

Accessibility improvements ensure keyboard navigation support and visible focus indicators.

---

## 6. Limitations of AI Usage

AI was used as a supportive tool only.  
All final decisions, structure, and validation were performed manually.

No AI-generated code was integrated without testing and modification.

---

## 7. Learning Outcomes

Using AI during this assignment helped me better understand several front-end development concepts.

I improved my understanding of JavaScript logic, especially when working with API integration and filtering features.

I also learned how to manage application state using localStorage and improve accessibility using ARIA attributes and proper focus handling.

Additionally, I gained a better understanding of CSS variables and how they simplify theme management.

---

## 8. Challenges Encountered

One challenge was ensuring that the GitHub API data was correctly fetched and displayed dynamically.

Another challenge was implementing filtering logic in a way that updates the UI correctly based on user selection.

I also faced difficulties ensuring consistency across different browsers and handling edge cases such as API failure.

Reviewing and modifying AI suggestions carefully helped ensure that the final implementation was correct and suitable for the project.