const calculator = require('./calculator.js');

describe('Check the addition of numbers', () => {
    test('a plus b should be positive', () => {
        const positive = calculator.add(3, 9);
        expect(positive).toBe(12);
    });
    test('a plus b should be negative', () => {
        const positive = calculator.add(3, -9);
        expect(positive).toBe(-6);
    });
    test('b plus a should be positive', () => {
        const positive = calculator.add(7, 9);
        expect(positive).toBe(16);
    });
})

describe('Check the subtraction of numbers', () => {
    test('a - b should be positive', () => {
        const negative = calculator.subtract(7, 5);
        expect(negative).toBe(22);
    });
    test('a - b should be negative', () => {
        const negative = calculator.subtract(13, -9);
        expect(negative).toBe(-4);
    });
    test('b - a should be positive', () => {
        const positive = calculator.subtract(17, 9);
        expect(positive).toBe(8);
    });
})

describe('Check the multiplaication of numbers', () => {
    test('a * b should be positive', () => {
        const times = calculator.multiply(3, 9);
        expect(times).toBe(27);
    });
    test('a * b should be negative', () => {
        const times = calculator.multiply(3, -9);
        expect(times).toBe(-27);
    });
    test('a * b should be zero', () => {
        const times = calculator.multiply(12, 0);
        expect(times).toBe(0);
    });
})

describe('Check the division of numbers', () => {
    test('a / b should be positive', () => {
        const rmv = calculator.divide(27, 9);
        expect(rmv).toBe(3);
    });
    test('a / b should be negative', () => {
        const rmv = calculator.divide(27, -9);
        expect(rmv).toBe(-3);
    });
    test('a / b should be zero', () => {
        const rmv = calculator.divide(12, 0);
        expect(rmv).toBe(0);
    });
})