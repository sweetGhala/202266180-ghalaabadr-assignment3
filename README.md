# 202266180 – Ghala Badr – Assignment 2

## Project Overview

This project is a responsive and interactive personal portfolio website developed using HTML5, CSS3, and JavaScript.

It builds upon Assignment 1 by introducing dynamic features, improved user experience, accessibility enhancements, and AI-assisted development practices.

The website showcases personal information, selected projects, and includes an interactive contact form with validation and user feedback.

---
## Live Demo

The project is deployed using GitHub Pages:  
[Live Website](https://sweetghala.github.io/202266180-ghalabadr-assignment2/)

---

## Features

- About Me section  
- Projects showcase (expand/collapse interaction)  
- Responsive design (mobile, tablet, desktop)  
- Dark / Light mode toggle  
- Theme preference saved using localStorage  
- Automatic system theme detection  
- Accessible form validation with user feedback  
- Smooth scrolling navigation  
- Expand / collapse project details using JavaScript  
- Hover effects and transition animations  
- Interactive UI elements responding to user actions (clicks, theme changes, form input) 
- Clear user feedback messages (error, success, and validation states)

---

## Assignment Requirements Covered

### Dynamic Content
Project details can be expanded and collapsed using JavaScript based on user interaction. The theme toggle also dynamically updates the interface.

### Data Handling
Theme preference is stored using localStorage. The contact form validates user input before submission.

### Animation and Transitions
Smooth scrolling, hover effects, and theme transitions are implemented to improve user experience.

### Error Handling and User Feedback
The form provides clear validation messages, success feedback, and prevents submission when inputs are invalid.

### AI Enhancement
AI tools were used to improve code structure, accessibility, and responsiveness. Full details are documented in `docs/ai-usage-report.md`.

---

## Progress Beyond Assignment 1

Compared to Assignment 1, this project includes:

- Added JavaScript-based interactivity (expand/collapse functionality)  
- Implemented dark/light mode with persistent user preference  
- Improved accessibility using ARIA attributes and semantic HTML  
- Added client-side form validation with feedback messages  
- Enhanced responsive layout and usability across devices  
- Improved UI/UX with transitions and smoother interactions  

---

## Technologies Used

- HTML5  
- CSS3 (Flexbox, Grid, Media Queries, CSS Variables)  
- JavaScript (DOM manipulation, localStorage, matchMedia)  

---

## Technical Implementation

### Theme System

Dark mode is implemented by applying a class to the `<html>` element.  
Theme colors are controlled using CSS variables for maintainability.

User preference is stored using localStorage.  
If no preference exists, the system detects the user's device setting using:

`window.matchMedia('(prefers-color-scheme: dark)')`

The toggle button updates:

- Text label  
- aria-pressed state  
- aria-label  

---

### Responsive Design

The layout uses:

- CSS Grid for project cards  
- Flexbox for navigation and form layout  
- Media queries for smaller screens  

On smaller devices:

- Navigation stacks vertically  
- Project layout becomes a single column  
- Form expands to full width  

---

## Accessibility

- Semantic HTML elements (main, section, article)  
- Skip-to-content link  
- Visible focus styles  
- ARIA attributes for interactive elements  
- Support for reduced motion preferences  
- Form status updates using `aria-live`  

---

## Contact Form

The form includes client-side validation:

- Prevents submission if fields are empty  
- Displays user-friendly error messages  
- Shows confirmation feedback when valid  
- Uses accessible live regions for screen readers  

---
## Project Structure

```bash
project-folder/
│── index.html
│── css/
│   └── styles.css
│── js/
│   └── script.js
│── assets/
│   └── images/
│── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
```


---

## How to Run

1. Clone or download the repository
2. Open the project folder
3. Open `index.html` in your browser

No installation required.

---

## Browser Compatibility

Tested on:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

---

## AI Usage Summary

AI tools were used to:

- Improve theme toggle logic
- Refactor CSS using variables
- Enhance accessibility features
- Support responsive design improvements

All AI-generated suggestions were reviewed, modified, and tested before integration.

Detailed usage is documented in:  
`docs/ai-usage-report.md`

---

## Screenshots

*(Add your images here)*

---

## Known Limitations

- Contact form does not connect to a backend service

---

## Future Improvements

- Add backend integration for form submission
- Include more portfolio projects
- Enhance animations and micro-interactions

---

## Development Notes

This project focuses on practical interactivity,  usability, and clean structure rather than overly complex design.  
All features were implemented to meet assignment requirements while maintaining scalability for future improvements.