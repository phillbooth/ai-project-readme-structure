// index.js
// This file serves as the main entry point for the @ai-readme/ai-project-readme-structure NPM package.
// For a package that primarily defines a standard and provides templates,
// this file might be minimal or serve to export paths to the templates.

/**
 * @typedef {Object} AiManifestTemplatePaths
 * @property {string} json - Path to the ai-manifest.json template.
 * @property {string} markdown - Path to the .ai/README.md template.
 */

/**
 * Provides paths to the AI README standard templates.
 * @returns {AiManifestTemplatePaths} An object containing paths to the templates.
 */
function getTemplatePaths() {
    const path = require('path');
    return {
        json: path.join(__dirname, 'templates', '.ai', 'ai-manifest.json'),
        markdown: path.join(__dirname, 'templates', '.ai', 'README.md')
    };
}

// Export the function to allow users to programmatically find the templates
module.exports = {
    getTemplatePaths
};

// You could also add a simple console log for when the package is required directly
// console.log("The @ai-readme/ai-project-readme-structure package has been loaded.");
