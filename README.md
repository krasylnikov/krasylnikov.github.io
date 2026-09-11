# krasylnikov.github.io

This repository is a personal GitHub Pages project owned and maintained by krasylnikov.

## Overview

This project hosts a static API documentation site built with Swagger UI. It exposes the EMW API schema and serves generated documentation for the backend endpoints defined in the repository.

## Repository contents

- `index.html` — Swagger UI entry point
- `emw_api.json` — OpenAPI/Swagger API definition
- `definitions/` — API model and schema definitions
- `swagger-ui*.js` and `swagger-ui*.css` — bundled Swagger UI assets

## Local preview

You can view the site locally by opening `index.html` in a browser, or by serving the project with a simple static web server:

```bash
cd /Users/krasylnikov/Projects/krasylnikov.github.io
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Notes

- This repository is intended to be published as a static site via GitHub Pages.
- The API documentation references the schema available in `emw_api.json`.
- The project is maintained under the krasylnikov GitHub profile and is meant for documentation and API exploration.

## License

This project is shared as-is for personal and documentation purposes.
