/**
 * Converts a string to kebab-case.
 * Splits words by spaces, underscores, or hyphens, lowercases all letters,
 * joins with hyphens, ignores leading/trailing/multiple delimiters,
 * preserves numbers and Unicode letters.
 *
 * @param {string} input - The string to convert.
 * @param {Object} [options] - Optional settings.
 * @param {boolean} [options.strict=false] - If true, throws TypeError for non-string inputs.
 * @returns {string} The kebab-cased string, or empty string for empty/non-string input.
 * @throws {TypeError} If options.strict is true and input is not a string.
 *
 * @example
 * toKebabCase('Hello World'); // 'hello-world'
 * toKebabCase('foo_bar-baz'); // 'foo-bar-baz'
 * toKebabCase('  _foo__Bar--baz  '); // 'foo-bar-baz'
 * toKebabCase('déjà_vu 123'); // 'déjà-vu-123'
 * toKebabCase('', { strict: true }); // ''
 * toKebabCase(123, { strict: true }); // throws TypeError
 */
function toKebabCase(input, options = {}) {
    const { strict = false } = options;
    if (typeof input !== 'string') {
        if (strict) throw new TypeError('Input must be a string');
        return '';
    }
    // Match words: Unicode letters, numbers, ignore delimiters
    const words = input
        .split(/[\s_-]+/u)
        .filter(Boolean)
        .map(word => word.toLowerCase());
    return words.join('-');
}

// Usage examples
console.log(toKebabCase('Hello World')); // 'hello-world'
console.log(toKebabCase('foo_bar-baz')); // 'foo-bar-baz'
console.log(toKebabCase('  _foo__Bar--baz  ')); // 'foo-bar-baz'
console.log(toKebabCase('déjà_vu 123')); // 'déjà-vu-123'
console.log(toKebabCase('', { strict: true })); // ''
try {
    console.log(toKebabCase(123, { strict: true }));
} catch (e) {
    console.error(e); // TypeError
}

// Unit tests
function assertEqual(actual, expected, desc) {
    if (actual !== expected) {
        console.error(`❌ ${desc}: Expected "${expected}", got "${actual}"`);
    } else {
        console.log(`✅ ${desc}`);
    }
}

// Edge cases
assertEqual(toKebabCase(''), '', 'Empty string');
assertEqual(toKebabCase('___'), '', 'Only delimiters');
assertEqual(toKebabCase('foo__bar'), 'foo-bar', 'Multiple underscores');
assertEqual(toKebabCase('foo--bar'), 'foo-bar', 'Multiple hyphens');
assertEqual(toKebabCase('foo  bar'), 'foo-bar', 'Multiple spaces');
assertEqual(toKebabCase('foo_bar--baz'), 'foo-bar-baz', 'Mixed delimiters');
assertEqual(toKebabCase('  _foo__Bar--baz  '), 'foo-bar-baz', 'Leading/trailing delimiters');
assertEqual(toKebabCase('déjà_vu 123'), 'déjà-vu-123', 'Unicode and numbers');
assertEqual(toKebabCase(123), '', 'Non-string input');
try {
    toKebabCase(123, { strict: true });
    console.error('❌ Strict mode TypeError');
} catch (e) {
    console.log('✅ Strict mode TypeError');
}