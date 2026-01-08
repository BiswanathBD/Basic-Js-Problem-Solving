// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:
// Input: "hello world"
// Output: "Hello World"

function capitalizeFirstLetter(str) {
  const words = str.split(" ");
  let newWordArr = [];
  for (let i = 0; i < words.length; i++) {
    const newWord = words[i][0].toUpperCase() + words[i].slice(1);
    newWordArr.push(newWord);
  }
  return newWordArr.join(" ");
}

console.log(capitalizeFirstLetter("hello world"));
