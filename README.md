# Dmytro Krasylnikov — Portfolio

A lightweight, single-page portfolio for software engineer Dmytro Krasylnikov. The site presents professional experience, technical expertise, and education.

## Overview

The portfolio is a static website built with semantic HTML and embedded CSS. It has no JavaScript, package manager, build step, or third-party runtime dependencies.

Highlights include:

- Responsive layouts for desktop and mobile screens
- Accessible navigation, landmarks, labels, and keyboard focus styles
- Reduced-motion support
- Print-specific styling

## Repository structure

```text
.
├── index.html   # Portfolio content and styles
└── README.md    # Project documentation
```

## Run locally

Because the site uses only static files, you can open `index.html` directly in a browser. To serve it over HTTP instead, run:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Make changes

- Update page content and styling in `index.html`.
- Check both desktop and mobile layouts after making visual changes.
- Verify the print preview when changing content or print styles.

## Deployment

The repository is ready to be hosted as a static site with GitHub Pages. Configure Pages to deploy from the branch and root directory containing `index.html`; subsequent pushes to that source will publish the updated site.
