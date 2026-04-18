# Technical Documentation – Assignment 3

## Project Structure

The project follows this folder structure:

```bash
assignment-3/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
```


## 1. Architecture Overview

This project follows a simple front-end architecture:

- HTML provides semantic page structure  
- CSS handles layout, styling, responsiveness, and theming  
- JavaScript manages interactivity, API integration, and state persistence  

All functionality is implemented on the client side with no backend integration.

---

## 2. Theme System Design

The dark/light theme system works as follows:

- On page load, JavaScript checks `localStorage` for a saved theme  
- If no preference exists, the system detects the user’s device setting using `prefers-color-scheme`  
- A `dark` class is applied to the `<html>` element  
- CSS variables update all colors dynamically  
- When the toggle button is clicked, the theme is updated and saved in `localStorage`  

This approach ensures consistency and easy maintenance.

---

## 3. GitHub API Integration

The project integrates with the GitHub REST API to fetch repository data dynamically.

JavaScript uses the `fetch()` function to send a request to:
https://api.github.com/users/sweetGhala/repos

The response is converted into JSON and displayed dynamically as project cards.

Error handling is implemented to show a fallback message if the request fails.

---

## 4. Project Filtering Logic

Each project includes a custom attribute:

`data-tech`
This represents the technology used (HTML, CSS, JavaScript).

When the user selects a filter:

- JavaScript reads the selected value  
- Compares it with each project’s `data-tech`  
- Shows or hides projects accordingly  

This demonstrates conditional logic and DOM manipulation.

---

## 5. State Persistence

Theme preference is stored using `localStorage`.

- The selected theme is saved when the user toggles it  
- It is restored automatically on page reload  

A `try-catch` block is used to prevent errors in restricted environments.

---

## 6. Responsive Layout Strategy

The layout uses:

- Flexbox for navigation and alignment  
- CSS Grid for project layout  
- Media queries for responsiveness  

At smaller screen sizes:

- Navigation stacks vertically  
- Projects display in a single column  
- Forms expand to full width  

---

## 7. Accessibility Considerations

The project includes accessibility improvements:

- Semantic HTML elements (`main`, `section`, `article`)  
- Skip-to-content link  
- ARIA attributes for interactive elements  
- Visible focus indicators  
- Support for reduced motion (`prefers-reduced-motion`)  

---

## 8. Performance Considerations

- No external libraries are used  
- Lightweight JavaScript implementation  
- Minimal DOM manipulation  
- Efficient use of CSS variables  
- No unnecessary rendering or heavy animations  

---

## 9. Security Considerations

- No sensitive data is stored  
- `localStorage` usage is wrapped in `try-catch`  
- No external scripts or unsafe operations are used  

---

## 10. Testing Strategy

The project was tested using:

- Google Chrome  
- Mozilla Firefox  
- Microsoft Edge  

Additional testing included:

- Responsive testing using browser DevTools  
- Keyboard navigation testing  
- Validation of form behavior and error handling  