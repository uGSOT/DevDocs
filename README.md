# DevDocs

DevDocs Hub is an open-source collection of developer documentation and resources. It provides a searchable and filterable interface to quickly access documentation for various tools, languages, and frameworks.

## Features
- **Modern UI**: Clean design utilizing glassmorphism and responsive CSS Grid layout.
- **Dynamic Content**: Data is loaded asynchronously from a central JSON file.
- **Search & Filter**: Real-time filtering based on categories, titles, and tags.

## Tech Stack
- **Frontend**: HTML5, Vanilla CSS3, Vanilla JavaScript (ES6).
- **Data Storage**: JSON (`data.json`).

## Folder Structure
```text
DevDocs/
├── src/
│   ├── index.html      # Main HTML entry point
│   ├── style.css       # Global stylesheet
│   ├── script.js       # Core logic and DOM manipulation
│   └── data.json       # Content data store
├── .gitignore          # Git ignore rules
├── README.md           # Project documentation
├── CONTRIBUTING.md     # Contribution guidelines
└── ARCHITECTURE.md     # Architecture documentation
```

## How to Run Locally
The application uses the native `fetch` API, which requires it to be served over HTTP rather than opened directly via the file system.

1. Clone the repository.
2. Serve the directory using a local web server. For example:
   - Using Node.js: `npx serve .`
   - Using Python: `python -m http.server`
   - Using VS Code: Open with the "Live Server" extension.
3. Access the application in your browser (typically at `http://localhost:8000` or `http://localhost:3000`).

## Contributing
We welcome contributions to expand our documentation collection. Please read the [Contribution Guide](https://github.com/uGSOT/DevDocs/blob/main/CONTRIBUTING.md) to learn how to submit your additions.

For technical details on the implementation, refer to the [Architecture Guide](ARCHITECTURE.md).
