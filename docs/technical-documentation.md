# Technical Documentation – Assignment 2

## Project Structure
 
The project follows this folder structure:
```bash
assignment-2/
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
---
    
## 1. Architecture Overview

This project follows a simple front-end architecture:

- HTML provides semantic page structure.
- CSS handles layout, styling, responsiveness, and theming.
- JavaScript manages interactivity and theme state persistence.

All functionality is implemented client-side with no backend integration.

---

## 2. Theme System Design

The dark/light theme system operates as follows:

1. On page load, JavaScript checks localStorage for a saved theme.
2. If no stored preference exists, the system detects the user’s device preference using prefers-color-scheme.
3. A "dark" class is applied to the <html> element.
4. CSS variables dynamically update all theme colors.
5. When the toggle button is clicked, the theme updates and is saved in localStorage.

Using CSS variables allows centralized theme control and easier maintenance.

---

## 3. State Persistence

Theme preference is stored using the browser’s localStorage API.

A try-catch block is implemented to prevent potential storage-related errors (e.g., private browsing restrictions).

This ensures stable behavior across browsers.

---

## 4. Responsive Layout Strategy

The layout uses:

- Flexbox for navigation alignment.
- CSS Grid for project card layout.
- A mobile breakpoint at 600px.

On smaller screens:
- Navigation elements stack vertically.
- The project grid becomes a single column.
- Form elements expand to full width.

---

## 5. Accessibility Considerations

The project includes several accessibility improvements:

- Semantic HTML elements (main, section, article).
- Skip-to-content link.
- ARIA attributes for interactive elements.
- Visible focus indicators for keyboard users.
- Reduced motion support using prefers-reduced-motion.

---

## 6. Performance Considerations

- No external libraries were used.
- Lightweight JavaScript implementation.
- Minimal DOM manipulation.
- Efficient CSS variable usage reduces repetition.
- No heavy animations or unnecessary rendering.

## 7. Security Considerations

- No sensitive data is stored.
- localStorage is wrapped in try-catch for stability.
- No external scripts are used.

## 8. Testing Strategy

- Cross-browser testing (Chrome, Firefox, Edge, Safari)
- Responsive testing using DevTools device emulation
- Keyboard navigation testing for accessibility
