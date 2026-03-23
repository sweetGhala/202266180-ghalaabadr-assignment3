const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement; // <html>

function getStoredTheme() {
    try {
        return localStorage.getItem("theme"); // "dark" | "light" | null
    } catch {
        return null;
    }
}

function storeTheme(theme) {
    try {
        localStorage.setItem("theme", theme);
    } catch {
        // Storage may be blocked (private mode / policy). Ignore safely.
    }
}

function applyTheme(theme) {
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);

    if (themeToggle) {
        themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
        themeToggle.setAttribute("aria-pressed", String(isDark));
        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );
    }
}

function getDefaultTheme() {
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    return prefersDark ? "dark" : "light";
}

// Init theme
const stored = getStoredTheme();
applyTheme(stored ?? getDefaultTheme());

// Toggle themes
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isDark = root.classList.contains("dark");
        const nextTheme = isDark ? "light" : "dark";
        applyTheme(nextTheme);
        storeTheme(nextTheme);
    });
}
const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach((button) => {
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", () => {
        const details = button.nextElementSibling;
        if (!details) return;

        const isHidden = details.hasAttribute("hidden");

        if (isHidden) {
            details.removeAttribute("hidden");
            button.textContent = "Hide Details";
            button.setAttribute("aria-expanded", "true");
        } else {
            details.setAttribute("hidden", "");
            button.textContent = "Show Details";
            button.setAttribute("aria-expanded", "false");
        }
    });
});

/* Contact form: front-end only, but with a good UX message */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = contactForm.elements["name"]?.value?.trim();
        const email = contactForm.elements["email"]?.value?.trim();
        const message = contactForm.elements["message"]?.value?.trim();

        if (!name || !email || !message) {
            formStatus.textContent = "Please fill in all fields.";
            formStatus.className = "form-status error";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formStatus.textContent = "Please enter a valid email address.";
            formStatus.className = "form-status error";
            return;
        }

        formStatus.textContent = "Message sent successfully!";
        formStatus.className = "form-status success";
        contactForm.reset();
    });
}
