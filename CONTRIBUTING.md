# Contributing to DevDocs Hub

Thank you for your interest in contributing to DevDocs Hub! Contributions typically involve adding new documentation resources to our central data file (`data.json`).

Follow this standard workflow to contribute to the project. It ensures your main branch stays clean and keeps your fork in sync with the upstream repository.

### 1. Fork, Clone, and Add Upstream
1. Fork the repo on GitHub, then clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/DevDocs.git
   cd DevDocs
   ```
2. Add the original repository as an upstream remote to keep your fork updated:
   ```bash
   git remote add upstream https://github.com/uGSOT/DevDocs.git
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
