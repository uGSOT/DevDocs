# Contributing to DevDocs Hub

Thank you for your interest in contributing to DevDocs Hub! Contributions typically involve adding new documentation resources to our central data file (`data.json`).

Below you will find two methods to contribute: **The Simple Way** (perfect for beginners making their first PR) and **The Industry Standard Way** (for those who want to practice standard open-source workflows).

---

## Method 1: The Simple Way (For Beginners)

If this is your first time contributing to Open Source, follow these simple steps!

### 1. Fork and Clone
1. Fork the repository on GitHub by clicking the "Fork" button in the top right.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/DevDocs-Hub.git
   ```
3. Navigate to the project directory:
   ```bash
   cd DevDocs-Hub
   ```

### 2. Update the Data
1. Open the `data.json` file in your editor.
2. Append a new JSON object to the bottom of the list. Don't forget the comma `,` after the previous item!

**Example:**
```json
  {
    "id": 5, 
    "title": "Documentation Title",
    "description": "A brief description of the resource.",
    "url": "https://docs.example.com",
    "category": "Frontend",
    "tags": ["html", "css"]
  }
```

### 3. Commit and Push
1. Save your file and stage your changes:
   ```bash
   git add data.json
   ```
2. Commit your changes:
   ```bash
   git commit -m "Add documentation for [Resource Name]"
   ```
3. Push directly to your main branch:
   ```bash
   git push origin main
   ```

### 4. Submit a Pull Request
Go back to the original DevDocs Hub repository on GitHub, click **Compare & pull request**, and submit!

---

## Method 2: The Industry Standard Way (Advanced)

For contributors who want to practice the standard workflow used in professional teams, follow this method instead. It ensures your main branch stays clean and keeps your fork in sync with the upstream repository.

### 1. Fork, Clone, and Add Upstream
1. Fork the repo and clone it locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/DevDocs-Hub.git
   cd DevDocs-Hub
   ```
2. Add the original repository as an upstream remote to keep your fork updated:
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/DevDocs-Hub.git
   ```

### 2. Create a Feature Branch
Always create a new, isolated branch for your changes instead of working on `main`.
```bash
git checkout -b feature/add-resource-name
```

### 3. Update and Verify
1. Update `data.json` with your new entry.
2. Run the application locally (e.g. via `npx serve .`) to ensure the syntax is valid and the card renders correctly.

### 4. Commit and Push
1. Stage your changes:
   ```bash
   git add data.json
   ```
2. Write a descriptive commit message following Conventional Commits format (e.g. `feat: add react documentation`):
   ```bash
   git commit -m "feat: add [Resource Name] documentation"
   ```
3. Push your feature branch to your fork:
   ```bash
   git push origin feature/add-resource-name
   ```

### 5. Submit a Pull Request
1. Navigate to the original repository on GitHub.
2. Click the "Compare & pull request" button.
3. Ensure the base branch is the original repository's `main` and the compare branch is your new `feature/add-resource-name` branch.
4. Fill out the PR template/description and submit!
