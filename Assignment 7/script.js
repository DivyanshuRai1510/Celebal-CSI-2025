// 1. Join All Elements of an Array into a String1. Join All Elements of an Array into a String

let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join());        // "Red,Green,White,Black"
console.log(myColor.join(','));     // "Red,Green,White,Black"
console.log(myColor.join('+'));     // "Red+Green+White+Black"


// 2. Find Most Frequent Element and Count in an Array

function mostFrequent(arr) {
  let freq = {};
  let maxCount = 0;
  let mostItem = null;

  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
    if (freq[item] > maxCount) {
      maxCount = freq[item];
      mostItem = item;
    }
  }

  return `${mostItem} ( ${maxCount} times )`;
}

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1));  // a ( 5 times )


// 3. Truncate a String to a Given Length

function truncateString(str, num) {
  return str.slice(0, num);
}

console.log(truncateString("Robin Singh", 4));  // "Robi"


// 4. Capitalize Each Word in a String

function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("js string exercises"));  // "Js String Exercises"


//5. Return Values Between Two Bounds from Array

function arrBetween(a, b, arr) {
  return arr.filter(x => x > a && x < b);
}

console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));     // [5, 4, 7]
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));  // [8, 6]
console.log(arrBetween(7, 32, [1, 2, 3, 78]));          // []


//6. Find Index of a Given Element in an Array

function findIndex(arr, val) {
  return arr.indexOf(val);
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));             // 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));         // 1
console.log(findIndex(["a", "g", "y", "d"], "d"));                         // 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));  // 0
