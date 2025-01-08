/**
 * Converts a string to kebab-case format
 * Example: "helloWorld" becomes "hello-world"
 * @param string - The input string to convert
 * @returns The kebab-cased string
 */
export const toKebabCase = (string: string): string =>
  string
    ?.replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
