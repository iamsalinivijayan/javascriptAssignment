const prompt = require("prompt-sync")();
// Write a javascript function to take inputs from the user to make an array and to fetch the first element from that array. Check whether it is prime or not
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  // Function to take input from the user and create an array
  function createArray() {
    const array = [];
    const numElements = parseInt(prompt("Enter the number of elements you want to add to the array:"));
  
    for (let i = 0; i < numElements; i++) {
      const element = parseInt(prompt(`Enter element ${i + 1}:`));
      array.push(element);
    }
  
    return array;
  }
  
const userArray = createArray();
  
if (userArray.length === 0) {
    console.log("Array is empty.");
    return;
}
  
const firstElement = userArray[0];
console.log(`The first element of the array is: ${firstElement}`);
  
if (isPrime(firstElement)) {
    console.log(`${firstElement} is a prime number.`);
} else {
    console.log(`${firstElement} is not a prime number.`);
}







// write a javascript program to find the most frequent item of an array
// Function to find the most frequent element in an array
  function findMostFrequentItem(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return null; // Return null for an empty array or non-array input
    }
  
    // Create a map to store the count of each element in the array
    const frequencyMap = new Map();
    for (const item of arr) {
      frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }
  
    // Find the item with the maximum frequency
    let mostFrequentItem;
    let maxFrequency = 0;
    for (const [item, frequency] of frequencyMap) {
      if (frequency > maxFrequency) {
        mostFrequentItem = item;
        maxFrequency = frequency;
      }
    }
  
    return mostFrequentItem;
  }

  const mostFrequent = findMostFrequentItem(userArray);
  console.log(`The most frequent element in the array is: ${mostFrequent}`);

  




// JavaScript for loop that will iterate from 0 to 15 For each iteration, check if the current number is odd or even and display the message to the screen as odd or even
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even.`);
    } else {
      console.log(`${i} is odd.`);
    }
  }
  






// JavaScript program to find the sum of squares of the elements of an array
function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] ** 2;
    }
    return sum;
  }
  
  const result = sumOfSquares(userArray);
  console.log("Sum of squares:", result); 
  
