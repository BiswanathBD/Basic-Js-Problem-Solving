// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function findEven(arr) {
  let evenNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenNum.push(arr[i]);
  }
  return evenNum;
}

console.log(findEven([1, 2, 3, 4, 5, 6]));
