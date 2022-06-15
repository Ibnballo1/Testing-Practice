const reverseString = require('./rvsStr.js');

test('Check the reverse of a string', () => {
    const result = reverseString('Boy');
    expect(result).toBe('yoB');
})