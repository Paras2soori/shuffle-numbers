# Summary

This repository contains a Node.js implementation for generating 10,000 unique random numbers in range 1..10,000.

## Solution details:

- Main File: `shuffle.js`
- Algorithm: Fisher-Yates shuffle on a prefilled array of numbers 1..10,000
- Complexity: O(n) time, O(n) space
- Unit test has been added to test=> `shuffle.test.js`


## Usage

1. Run in terminal:
   node shuffle.js
   
2. Observe:
   - generated count
   - sample output (first 20 values)

## Project API

- `generateShuffledNumbers(n = 10000)` returns shuffled array.

## Unit tests

A simple unit test script is available in `test/shuffle.test.js`.
The helper method to check the uniqueness of the numbers in the result array, has been added to helper file and is being used in test file.

Run:
node test/shuffle.test.js


Or with npm if installed:
npm test



