const stringLength = require('./strcount.js');

test('Counting each character of a string', () => {
    const text = stringLength('JavaScript');
    expext(text).toBe(10);
})