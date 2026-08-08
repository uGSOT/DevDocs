# Technical Reference (KT)

This document provides technical context for the core technologies utilized in the DevDocs Hub project.

## 1. JSON (JavaScript Object Notation)
The application uses JSON as a lightweight data-interchange format. `data.json` stores an array of objects representing the documentation links. The frontend relies on this strict schema to safely render the UI components.

## 2. DOM Manipulation
The Document Object Model (DOM) is dynamically manipulated by `script.js`. The application uses standard Web APIs like `document.getElementById` and `innerHTML` to update the user interface based on the state of the data. 

## 3. Fetch API
The application uses the modern `fetch()` API for asynchronous network requests. It requests `data.json` over HTTP, awaits the response, and processes the payload.

## 4. CSS Variables
The project implements a design system using CSS Custom Properties (Variables) defined in the `:root` pseudo-class. This ensures consistent theming and simplifies maintainability across the stylesheet.

## 5. CSS Grid
The layout system relies heavily on CSS Grid for responsive design. The `docs-grid` class utilizes `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));` to create a fluid, responsive card layout without media queries.
