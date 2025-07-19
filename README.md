 # AI-Readme: A Standard for AI-Friendly Documentation

[![NPM version](https://img.shields.io/npm/v/@phillipbooth/ai-project-readme-structure.svg)](https://www.npmjs.com/package/@phillipbooth/ai-project-readme-structure)
[![License](https://img.shields.io/npm/l/@phillipbooth/ai-project-readme-structure.svg)](https://github.com/phillipbooth/ai-project-readme-structure/blob/main/LICENSE)

A standardized, machine-readable, and human-comprehensible structure for project documentation, designed to help AI tools understand your code.

## Overview

`@ai-readme/ai-project-readme-structure` is an NPM package that defines a standard for project documentation. Its primary goal is to enhance the ability of AI development tools (like large language models and code assistants) to understand the context, architecture, requirements, and conventions of a software project.

By adopting this standard, you provide AI with a structured "map" of your application, leading to more accurate suggestions, better code generation, and more relevant assistance.

This standard is built around two key files:

*   `.ai/ai-manifest.json`: A JSON file containing structured, machine-readable metadata about the project.
*   `.ai/README.md`: A Markdown file providing a human-readable overview that complements the JSON data.

### Why Use This Standard?

Modern AI tools excel with clear, structured input. Traditional `README.md` files, while great for humans, often lack the consistent, parseable format that AIs can leverage effectively. This standard bridges that gap, ensuring your AI assistant has the most precise and up-to-date understanding of your codebase.

## How to Use This Standard in Your Project

This NPM package provides templates and a JSON schema to help you adopt the standard.

1.  **Create the `.ai` Directory**

    In the root of your project, create a directory named `.ai`.

    ```bash
    mkdir .ai
    ```

2.  **Copy the Templates**

    The easiest way to start is by copying the template files from this package into your new `.ai` directory. You can find them in `node_modules/@phillipbooth/ai-project-readme-structure/templates/.ai/`.

    *   `templates/.ai/ai-manifest.json` -> `your-project/.ai/ai-manifest.json`
    *   `templates/.ai/README.md` -> `your-project/.ai/README.md`

3.  **Populate Your `ai-manifest.json`**

    Fill out the `ai-manifest.json` file with your project's specific details. The file is backed by a JSON Schema, so editors like VS Code will provide autocompletion and validation.

    **Example `ai-manifest.json` (truncated):**

    ```json
    {
      "$schema": "https://raw.githubusercontent.com/phillipbooth/ai-project-readme-structure/main/ai-manifest.schema.json",
      "readmeVersion": "1.0.0",
      "lastUpdated": "2025-07-19T09:30:00Z",
      "app": {
        "name": "My Finance Tracker",
        "version": "2.1.0",
        "repoUrl": "https://github.com/my-org/finance-tracker",
        "description": "A web application for managing personal finance...",
        "purpose": "To empower individuals to gain better control..."
      },
      "technologyStack": {
        "languages": ["TypeScript", "Python 3.10+"],
        "frameworks": ["React (with Next.js)", "FastAPI"],
        "databases": ["PostgreSQL", "Redis"]
      }
    }
    ```

4.  **Write Your `.ai/README.md`**

    Use the template as a guide to write a human-readable summary that complements the manifest. This is where you provide narrative context for the structured data.

5.  **Keep it Updated**

    Regularly update both files as your project evolves. This ensures any AI tool using this information has the most current context.

### Programmatic Usage

For tool authors or scripts that need to locate the template files, this package exports a helper function.

1.  Install the package as a dependency:
    ```bash
    npm install @phillipbooth/ai-project-readme-structure
    ```

2.  Use the `getTemplatePaths` function in your script:
    ```javascript
    const { getTemplatePaths } = require('@phillipbooth/ai-project-readme-structure');

    const paths = getTemplatePaths();
    console.log('Path to manifest template:', paths.json);
    console.log('Path to README template:', paths.markdown);
    ```

## What This Package Provides

*   **`templates/`**: A directory containing the `ai-manifest.json` and `README.md` templates.
*   **`ai-manifest.schema.json`**: A JSON Schema file to validate your manifest and provide editor autocompletion.
*   **`index.js`**: A simple module to programmatically get the paths to the template files.

## Contributing

This project is open-source and welcomes contributions! If you have ideas for improving this standard or want to contribute to its tooling, please refer to `CONTRIBUTING.md`.

### License

This project is licensed under the Apache-2.0 License. See the `LICENSE` file for more details.
