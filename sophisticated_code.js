/* sophisticated_code.js */

// This code is a complex implementation of a sorting algorithm called "merge sort"
// It sorts an array of numbers in ascending order using a divide-and-conquer approach

// Merge Sort function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // base case
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right)); // recursive calls
}

// Merge function to combine and sort two arrays
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result
    .concat(left.slice(leftIndex)) // concatenate remaining elements
    .concat(right.slice(rightIndex));
}

// Example usage
const numbers = [5, 8, 2, 1, 3, 9, 4, 7, 6];
console.log("Original array:", numbers);

const sortedNumbers = mergeSort(numbers);
console.log("Sorted array:", sortedNumbers);
console.log("Length of array:", sortedNumbers.length);

// Output:
// Original array: [5, 8, 2, 1, 3, 9, 4, 7, 6]
// Sorted array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Length of array: 9

// Note: The mergeSort() and merge() functions can handle arrays of any length.