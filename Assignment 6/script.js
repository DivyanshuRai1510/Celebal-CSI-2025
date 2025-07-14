function first(arr, n) {
  if (!Array.isArray(arr)) return [];
  if (n === undefined) return arr[0];
  if (n < 0) return [];
  return arr.slice(0, n);
}

// Test Data
console.log(first([7, 9, 0, -2]));        // 7
console.log(first([], 3));               // []
console.log(first([7, 9, 0, -2], 3));     // [7, 9, 0]
console.log(first([7, 9, 0, -2], 6));     // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3));    // []
