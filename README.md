# 202266180 – Ghala Badr – Assignment 3

## Project Overview

This project is an advanced version of a personal portfolio website developed using HTML5, CSS3, and JavaScript.

It builds upon Assignment 2 by adding dynamic features, external API integration, improved application logic, and enhanced user experience.

The website showcases personal information, projects, and includes interactive features such as filtering, theme management, and real-time data from GitHub.

---

## Live Demo

The project is deployed using GitHub Pages:  
[Live Website](https://sweetghala.github.io/202266180-ghalaabadr-assignment3/)

---

## Features

- About Me section
- Projects showcase with expand/collapse interaction
- Responsive design (mobile, tablet, desktop)
- Dark / Light mode toggle
- Theme preference saved using localStorage
- Automatic system theme detection
- Contact form with validation and user feedback
- GitHub API integration (dynamic project loading)
- Project filtering by technology
- Error handling for API requests
- Smooth scrolling navigation
- Hover effects and transition animations
- Interactive UI elements responding to user actions
- Dynamic rendering of API data using JavaScript

---

## Assignment Requirements Covered

### API Integration
The website connects to the GitHub API to fetch real-time project data and display it dynamically.  
Error handling is implemented to show a user-friendly message if the API request fails.

---

### Complex Logic
Projects can be filtered based on technology (HTML, CSS, JavaScript).  
This feature uses conditional logic to dynamically show or hide projects.

---

### State Management
The application stores the user’s theme preference using localStorage.  
The theme is restored automatically when the user revisits the website.

---

### Performance Optimization
- Efficient CSS and JavaScript structure
- Optimized layout and responsive design
- Minimal redundant code

---

### Error Handling and User Feedback
- Contact form validation prevents invalid input
- User-friendly success and error messages
- API failure displays a clear fallback message

---

## Progress Beyond Assignment 2

Compared to Assignment 2, this project includes:

- Integrated external API (GitHub)
- Added project filtering functionality
- Improved dynamic content rendering
- Enhanced interactivity and logic
- Better user feedback and error handling

---

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Media Queries, CSS Variables)
- JavaScript (DOM manipulation, localStorage, fetch API)
- GitHub REST API

---

## Technical Implementation

### Theme System

Dark mode is implemented by applying a class to the `<html>` element.  
Theme colors are controlled using CSS variables.

User preference is stored using localStorage.  
If no preference exists, the system detects the user's device setting using:

`window.matchMedia('(prefers-color-scheme: dark)')`

---

### GitHub API

Projects are fetched using the GitHub REST API:
`https://api.github.com/users/{username}/repos`

The data is dynamically rendered using JavaScript.  
Only selected repositories are displayed, and error handling ensures a fallback message is shown if the API fails.

---

### Project Filtering

Projects include a custom attribute (`data-tech`) that defines the technology used.  
JavaScript is used to filter projects based on user selection.

---

### Contact Form

- Validates required fields
- Checks email format
- Displays success/error messages
- Prevents invalid submission

---

## Accessibility

- Semantic HTML elements
- Skip-to-content link
- Visible focus styles
- ARIA attributes for accessibility
- Reduced motion support
- Live region updates for form feedback

---
## AI Usage Summary

AI tools were used during development to:

- Assist in implementing GitHub API integration
- Improve JavaScript logic (filtering and theme handling)
- Enhance accessibility and user interface behavior
- Support debugging and fixing errors

All AI-generated suggestions were carefully reviewed, tested, and modified before being included in the final project.

Detailed usage is documented in:  
`docs/ai-usage-report.md`

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


