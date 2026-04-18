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
const githubContainer = document.getElementById("github-container");

async function loadGitHubRepos() {
    if (!githubContainer) return;

    try {
        const response = await fetch("https://api.github.com/users/sweetGhala/repos");

        if (!response.ok) {
            throw new Error("Error fetching repos");
        }

        const repos = await response.json();

        githubContainer.innerHTML = "";

        repos.slice(0, 5).forEach(repo => {
            const card = document.createElement("div");
            card.className = "project";

            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "This is one of my GitHub projects."}</p>
                <a href="${repo.html_url}" target="_blank">View Project</a>
            `;

            githubContainer.appendChild(card);
        });

    } catch (error) {
        githubContainer.innerHTML = "<p>Failed to load GitHub projects.</p>";
    }
}

loadGitHubRepos();

const filter = document.getElementById("filter");
const projects = document.querySelectorAll(".project");

if (filter) {
    filter.addEventListener("change", () => {
        const selected = filter.value;

        projects.forEach(project => {
            const tech = project.getAttribute("data-tech");

            if (selected === "all" || tech === selected) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
}