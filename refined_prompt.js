/**
 * Converts a given string to camelCase format.
 *
 * This function normalizes the input string by:
 * - Removing leading/trailing delimiters (spaces, underscores, hyphens).
 * - Splitting the string into words using spaces, underscores, hyphens, or any combination thereof as delimiters.
 * - Lowercasing the first word and capitalizing the first character of each subsequent word.
 * - Preserving numbers and Unicode letters.
 * - Ignoring empty segments and multiple consecutive delimiters.
 *
 * If the input is not a string:
 * - Returns an empty string by default.
 * - Throws a TypeError if `options.strict` is set to `true`.
 *
 * @param {string} input - The string to convert to camelCase.
 * @param {Object} [options] - Optional settings.
 * @param {boolean} [options.strict=false] - If true, throws on non-string input.
 * @returns {string} The camelCase version of the input string.
 * @throws {TypeError} If strict mode is enabled and input is not a string.
 *
 * @example
 * camelCase('___foo--bar baz'); // 'fooBarBaz'
 * camelCase('123abc_def'); // '123abcDef'
 * camelCase('FOO_BAR'); // 'fooBar'
 * camelCase('mañana-café'); // 'mañanaCafé'
 * camelCase('', { strict: true }); // ''
 * camelCase(null); // ''
 * camelCase(undefined); // ''
 * camelCase(null, { strict: true }); // throws TypeError
 */

/**
 * Converts a given string to dot.case format.
 *
 * This function normalizes the input string by:
 * - Removing leading/trailing delimiters (spaces, underscores, hyphens).
 * - Splitting the string into words using spaces, underscores, hyphens, or any combination thereof as delimiters.
 * - Lowercasing all words and joining them with dots.
 * - Preserving numbers and Unicode letters.
 * - Ignoring empty segments and multiple consecutive delimiters.
 *
 * If the input is not a string:
 * - Returns an empty string by default.
 * - Throws a TypeError if `options.strict` is set to `true`.
 *
 * @param {string} input - The string to convert to dot.case.
 * @param {Object} [options] - Optional settings.
 * @param {boolean} [options.strict=false] - If true, throws on non-string input.
 * @returns {string} The dot.case version of the input string.
 * @throws {TypeError} If strict mode is enabled and input is not a string.
 *
 * @example
 * dotCase('___foo--bar baz'); // 'foo.bar.baz'
 * dotCase('123abc_def'); // '123abc.def'
 * dotCase('FOO_BAR'); // 'foo.bar'
 * dotCase('mañana-café'); // 'mañana.café'
 * dotCase('', { strict: true }); // ''
 * dotCase(null); // ''
 * dotCase(undefined); // ''
 * dotCase(null, { strict: true }); // throws TypeError
 */
