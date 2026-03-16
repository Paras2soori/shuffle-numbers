
/**
 * Validate that array contains exactly values from 1..n with no duplicates.
 * @param {number[]} arr
 * @returns {{valid: boolean, message: string}}
 */
export function validateShuffledArray(arr) {
  if (!Array.isArray(arr)) {
    return { valid: false, message: 'Result is not an array' };
  }

  const n = arr.length;
  const seen = new Uint8Array(n + 1);

  for (const value of arr) {
    if (!Number.isInteger(value) || value < 1 || value > n) {
      return { valid: false, message: `Value out of range: ${value}` };
    }

    if (seen[value]) {
      return { valid: false, message: `Duplicate value found: ${value}` };
    }
    seen[value] = 1;
  }

  for (let i = 1; i <= n; i++) {
    if (!seen[i]) {
      return { valid: false, message: `Missing value: ${i}` };
    }
  }

  return { valid: true, message: 'Array has unique values from 1 to ' + n };
}
