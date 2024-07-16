# Contributing to Facebook Marketplace CSV Generator Chrome Extension

We're glad you're interested in contributing to our project! This document provides guidelines for contributing and instructions on how to set up the project locally for development and testing.

## Table of Contents

1. [Setting Up the Development Environment](#setting-up-the-development-environment)
2. [Running the Extension Locally](#running-the-extension-locally)
3. [Testing](#testing)
4. [Coding Standards](#coding-standards)
5. [Submitting Changes](#submitting-changes)
6. [Reporting Bugs](#reporting-bugs)

## Setting Up the Development Environment

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine:
   ```
   git clone https://github.com/your-username/fb-marketplace-csv-generator.git
   ```
3. Navigate to the project directory:
   ```
   cd fb-marketplace-csv-generator
   ```
4. Install any necessary dependencies (if applicable):
   ```
   npm install
   ```

## Running the Extension Locally

1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" in the top right corner.
3. Click "Load unpacked" and select the directory containing the extension files.
4. The extension should now appear in your Chrome toolbar.

To see your changes after modifying the code:
1. Make your changes to the relevant files.
2. Go back to the `chrome://extensions/` page.
3. Find the extension and click the refresh icon.
4. If you've made changes to the background script, you may need to click on the "service worker" link to see console logs.

## Testing

### Manual Testing

1. Click on the extension icon to open the popup.
2. Try dragging and dropping different types of image files.
3. Test the "Generate CSV" functionality.
4. Check the generated CSV file for accuracy.

### Automated Testing

(Note: Implement automated tests as part of the TODO list)

Once implemented, run the tests using:

```
npm test
```

## Coding Standards

* Follow the existing coding style and conventions used in the project.
* Keep code organized, readable, and maintainable.
* Use meaningful variable names and comments to explain complex logic.

## Submitting Changes

1. Create a new branch for your changes:
   ```
   git checkout -b my-new-feature
   ```
2. Commit your changes with a descriptive commit message:
   ```
   git commit -m "Added new feature: [briefly describe the change]"
   ```
3. Push your branch to your forked repository:
   ```
   git push origin my-new-feature
   ```
4. Create a pull request to the main repository.

## Reporting Bugs

If you find any bugs or issues with the extension, please open an issue on the GitHub repository with the following information:

* A clear description of the bug or issue.
* Steps to reproduce the bug (if applicable).
* Any relevant error messages or console logs.

We appreciate your contributions and feedback!