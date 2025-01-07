/**
 * Checks if the current environment has access to the DOM (Document Object Model).
 * This is useful for determining if the code is running in a browser environment
 * versus a server-side environment like Node.js.
 * 
 * @returns {boolean} Returns true if running in a browser environment with DOM access,
 *                    false otherwise.
 */
export default !!(typeof window !== 'undefined' && window.document && window.document.createElement)
