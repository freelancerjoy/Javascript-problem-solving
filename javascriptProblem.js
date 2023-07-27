// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}
const inputStr = "hello world";
const outputStr = reverseString(inputStr);
console.log(outputStr);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const inputArr = [2, -5, 10, -3, 7];
const outputSum = sumOfPositiveNumbers(inputArr);
console.log(outputSum);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

function findMostFrequentElement(arr) {
  if (arr.length === 0) {
    throw new Error("The array must not be empty.");
  }
  const frequencyMap = {};
  for (const element of arr) {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  }
  // Find the most frequent element
  let mostFrequentElement;
  let maxFrequency = 0;

  for (const element in frequencyMap) {
    if (frequencyMap[element] > maxFrequency) {
      mostFrequentElement = element;
      maxFrequency = frequencyMap[element];
    }
  }
  return parseInt(mostFrequentElement);
}
const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(array);
console.log(mostFrequent);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

let findTwoNumbers = (nums, target) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(findTwoNumbers([1, 3, 6, 8, 11, 15], 9));

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return num1 / num2;
    default:
      throw new Error("Invalid operator");
  }
}
const num1 = 10;
const num2 = 5;
const operator = "*";
const result = calculate(num1, num2, operator);
console.log(result);

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generatesRandomPassword(passworLength) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const allChars =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";
  for (let i = 0; i < passworLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  return password;
}
const randomPassword = generatesRandomPassword(15);
console.log(randomPassword);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumeral) {
  const romanNumeralsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let prevValue = 0;
  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentValue = romanNumeralsMap[romanNumeral[i]];
    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }
    prevValue = currentValue;
  }

  return result;
}
console.log(romanToInt("XIX"));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    console.log("The array must contain at least two elements.");
  }
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}
const inputNumber = [5, 2, 8, 1, 9, 4];
const secondSmallestNum = findSecondSmallest(inputNumber);
console.log(secondSmallestNum);
