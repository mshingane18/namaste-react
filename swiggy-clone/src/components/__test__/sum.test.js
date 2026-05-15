import sum from '../sum';
test('sum adds two numbers', () => {
   const result = sum(1, 2);
  expect(result).toBe(3);
});