# Project AI Readme: [Your Application Name]

This document provides a human-readable overview of the project's key characteristics, designed to complement the structured data found in `ai-manifest.json`. It aims to offer quick context for developers and serve as a narrative guide for AI models interacting with the codebase.

## 1. Application Overview

* **What it is:** A brief, high-level description of what this application does.

  * *Example:* "This is a web application designed to help small businesses manage their customer relationships (CRM), track sales leads, and automate marketing campaigns."

* **Purpose/Problem Solved:** Why was this application built? What core problem does it address?

  * *Example:* "It addresses the challenge faced by small businesses in centralizing customer data and streamlining sales processes without relying on expensive, complex enterprise solutions."

## 2. Technology Stack

A summary of the primary technologies used in this project. For a detailed, machine-readable list, refer to `ai-manifest.json`.

* **Languages:** [e.g., TypeScript, Python 3.10+, HTML5, CSS3]

* **Key Frameworks:** [e.g., React (with Next.js), FastAPI, Material-UI]

* **Databases:** [e.g., PostgreSQL, Redis]

* **Cloud/Deployment:** [e.g., Google Cloud Platform (Cloud Run, Cloud SQL)]

## 3. Architectural Design

A narrative explanation of the application's overall structure and how its main parts interact.

* **Architecture Type:** [e.g., Monolith, Microservices, Serverless, Event-Driven]

  * *Example:* "This application is currently built as a **monolithic** web application, with a single codebase handling both frontend rendering and backend API logic. Future plans include transitioning to a microservices architecture."

* **Main Components & Responsibilities:** Describe the major logical or physical components and their primary roles.

  * *Example:*

    * **Frontend UI:** Handles user interactions, displays data, and manages client-side routing. Built with React.

    * **API Layer:** Provides RESTful endpoints for data creation, retrieval, update, and deletion. Implemented with FastAPI.

    * **Data Access Layer:** Manages all interactions with the PostgreSQL database, ensuring data integrity and efficient queries.

* **Data Flow (Simplified):** How information typically moves through the system.

  * *Example:* "User actions on the Frontend trigger API calls to the Backend. The Backend processes these requests, interacts with the PostgreSQL database, and returns data to the Frontend for display."

## 4. Development & Operations

High-level guidance on setting up the development environment and the approach to testing.

* **Local Setup:** Essential steps to get the project running locally.

  * *Example:* "To run this project locally, ensure Node.js (v20+) and Python (v3.10+) are installed. Clone the repository, install npm dependencies in the `frontend/` directory, and Python dependencies in the `backend/` directory. Use Docker Compose for local database setup."

* **Testing Philosophy:** What types of tests are used and why.

  * *Example:* "We employ a layered testing strategy including unit tests for individual functions, integration tests for API endpoints, and end-to-end tests for critical user flows to ensure reliability and prevent regressions."

## 5. Standards and Conventions

Key guidelines and practices that developers should adhere to.

* **Coding Standards:** [e.g., "All JavaScript/TypeScript code must adhere to ESLint rules based on the Airbnb style guide."]

* **Naming Conventions:** [e.g., "Use `camelCase` for JavaScript variables and functions, `snake_case` for Python, and `PascalCase` for React components."]

* **Security Practices:** [e.g., "All API endpoints must perform input validation. Sensitive configurations are managed via environment variables."]

## 6. Explicit Requirements and Exclusions

Critical features that *must* be present, and specific technologies or patterns that are *expressly forbidden*.

* **Mandatory Requirements:**

  * *Example:* "All data persistence operations must use the SQLAlchemy ORM; direct raw SQL queries are not permitted."

  * *Example:* "User authentication must be handled via OAuth2 with Google Sign-In."

* **Explicit Exclusions / Anti-Patterns:**

  * *Example:* "jQuery is explicitly excluded from the frontend codebase."

  * *Example:* "No global state management outside of the Redux store."

## 7. Current TODOs

A list of immediate, actionable tasks or known issues. These are typically short-term items that require attention.

* **[TODO-ID]: [Description]** ([Priority], [Assigned To], Due: [Date])

  * *Example:* "TODO-001: Refactor the user profile update API endpoint to handle partial updates more efficiently. (High, Backend Team, Due: 2025-08-01)"

## 8. Future Work / Roadmap

Longer-term goals, potential enhancements, or planned features that are not immediate priorities.

* *Example:* "Implement real-time notifications using WebSockets for critical events."

* *Example:* "Explore integrating AI-driven insights for financial forecasting."

*(This `README.md` is intended to be placed in the `.ai/` directory alongside `ai-manifest.json` in your project's root.)*
