function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^[A-Z]/, c => c.toLowerCase());
}

// Examples:
// toCamelCase('first name')      // 'firstName'
// toCamelCase('user_id')         // 'userId'
// toCamelCase('SCREEN_NAME')     // 'screenName'
// toCamelCase('mobile-number')   // 'mobileNumber'