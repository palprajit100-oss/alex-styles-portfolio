# Alex Styles — Graphic Designer Portfolio

## Disclaimer

This project is entirely fictional and was created for educational purposes as part of Coursera's UI/UX Design Principles course. Alex Styles is a fictional persona, and all website components—including the biography, portfolio projects, descriptions, contact details, visual elements, and interactive features—have been created for demonstration purposes to meet the requirements of the course activities.

This website does not represent a real designer, business, or actual client work. The project is intended solely for learning, practice, and course assessment.

A static, responsive portfolio website concept built with HTML, CSS, and vanilla JavaScript. It includes an About section, a CSS-art portfolio grid, modal project descriptions, navigation tooltips, a contact form that opens the visitor's email application, and viewport reveal effects.

## Files

- `index.html` — Semantic page structure and content.
- `styles.css` — Design tokens, typography, layouts, UI states, animations, and responsive breakpoints.
- `script.js` — Project detail dialogs, email form behavior, reveal animations, and footer year.
- `README.md` — Project documentation, setup instructions, and deployment guidance.

## Run Locally

Open `index.html` in a browser, or run a local server using an extension such as VS Code Live Server. No build step or package installation is required.

## Before Publishing

1. Keep the fictional identity and sample projects consistent with the Coursera assignment.
2. Use a clearly identified placeholder email address for the demo, or provide a real email address only if you intend to receive inquiries.
3. Test the contact form in a browser with an email application configured. The form does not use a backend or store form submissions.
4. Check keyboard navigation, browser developer tools at mobile, tablet, and desktop widths, and the reduced-motion setting.
5. Review all content and functionality before submitting the project for peer review.

## Deploy with GitHub Pages

1. Create a new GitHub repository, for example, `alex-styles-portfolio`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository's root folder and commit the changes.
3. Open the repository's **Settings → Pages**.
4. Under the build and deployment settings, select **Deploy from a branch**, choose the `main` branch and `/(root)` folder, and click **Save**.
5. Wait for GitHub Pages to publish the site, then open the URL displayed in the Pages settings. It will typically follow this format: `https://YOUR-USERNAME.github.io/alex-styles-portfolio/`.

## Responsive Breakpoints

- Desktop: `min-width: 1025px`
- Tablet: `769px–1024px`
- Mobile: `max-width: 768px`
- Small mobile refinements: `max-width: 540px`

## Microsoft Copilot Workflow and Reflection

Microsoft Copilot can assist with reviewing CSS, suggesting responsive layouts, identifying redundant declarations, and improving the usability and accessibility of interactive elements.

Suggested prompts for the three activities:

**Activity 1 — CSS Foundation**

"Review `styles.css` and help me organize reusable design tokens, responsive typography, a cohesive color palette, a grid-based portfolio layout, hover transitions, and accessible focus states. Identify redundant declarations and explain your recommendations."

**Activity 2 — Responsive Design**

"Review this portfolio at 375px, 768px, 900px, and 1280px viewport widths. Suggest media-query changes so the navigation, hero section, project grid, and contact form remain readable without horizontal overflow."

**Activity 3 — UI/UX Enhancements**

"Review the project modals, navigation tooltips, reveal animations, and contact form for keyboard accessibility, reduced-motion preferences, clear feedback, and consistent visual hierarchy. Suggest improvements and explain why they help."

### Reflection Template

I used Microsoft Copilot to assist with reviewing and improving the CSS foundation, including typography, color variables, spacing, and the portfolio layout. I explored responsive media queries and flexible grid layouts for mobile, tablet, and desktop screens. For the final UI/UX enhancements, I used Copilot to review hover effects, project-detail modals, navigation tooltips, and accessibility considerations. I also reviewed the project structure and tested the website to identify areas for improvement.

This reflection should be personalized to accurately describe the Copilot prompts, suggestions, changes, and tests actually completed during the project.