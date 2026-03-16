/**
 * 1. Generate an array of integers from 1 to n.
 * 2. Shuffle the array using Fisher-Yates algorithm.
 * 3. Return the shuffled array.
 */
function generateShuffledNumbers(n = 10000) {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('n must be a positive integer');
  }

  const array = Array.from({ length: n }, (_, i) => i + 1);

  // Fisher-Yates shuffle
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

if (require.main === module) {
  const n = 10000;
  const numbers = generateShuffledNumbers(n);

  console.log('Generated', numbers.length, numbers, 'numbers.');
}

module.exports = {
  generateShuffledNumbers,
};
