# Project Architecture

This document outlines the technical architecture and data flow of the DevDocs Hub application.

## Tech Stack
- **HTML5**: Defines the structural markup.
- **Vanilla CSS3**: Handles styling, responsive layout (CSS Grid), and micro-animations.
- **Vanilla JavaScript (ES6)**: Manages data fetching, DOM manipulation, and state filtering.
- **JSON**: Serves as the read-only data store.

## Data Flow

The following diagram illustrates the interaction between the data layer and the UI layer during initialization and user interaction.

```mermaid
flowchart TD
    A[data.json] -->|fetch() API|
    B(script.js)-->|Generate DOM Elements|
    C[index.html]
    D((User Input\-Search & Filter)) -.->|Triggers re-render| 
```

### Initialization Sequence
1. **Data Retrieval**: On page load, `script.js` executes an asynchronous `fetch()` request to `data.json`.
2. **Data Parsing**: The JSON response is parsed into a JavaScript array of objects.
3. **DOM Injection**: The application iterates over the array, constructing HTML template literals for each object, and injects them into the `#docsGrid` container.
4. **Filter Extraction**: Unique categories are extracted from the dataset to dynamically generate the filter buttons.

### Interactivity Sequence
1. **State Update**: User input in the search field or selection of a filter button updates the local filter state.
2. **Data Filtering**: The application filters the loaded dataset based on substring matches in the `title`, `description`, or `tags` fields, intersecting with the active `category`.
3. **Re-rendering**: The DOM container is cleared, and the filtered subset is re-injected into the view.
