/**
 * array has some duplicate elements
 * []
 *
 */

const biryanikhor = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kabul",
  "cabul",
];
const numbers = [1, 5, 5, 6, 7, 5, 7, 4, 3, 2, 1];

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);
