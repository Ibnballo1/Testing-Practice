const stringLength = require('./strcount.js');

test('Counting each character of a string', () => {
    const text = stringLength('JavaScript');
    expect(text).toBe(10);
});

test('Check if each character of a string is less than 0 or greater than 10', () => {
    const text2 = stringLength('');
    expect(text2).toBe('Error');
});

test('Check if each character of a string is less than 0 or greater than 10', () => {
    const text3 = stringLength('This is a boy. He is going to school');
    expect(text3).toBe('Error');
});
