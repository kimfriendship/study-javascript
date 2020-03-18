// 1. 선형 검색
function linearSearch(array, target) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) result = i;
  }
  return result;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // 5

// 2. 이진 검색
function binarySearch(array, target) {
  let result = -1;
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor(start + end / 2);
  while (!(start === end && array[mid] !== target)) {
    if (array[mid] === target) {
      result = mid;
      break;
    } else if (array[mid] > target) {
      end = mid - 1;
      mid = Math.floor(start + end / 2);
    } else if (array[mid] < target) {
      start = mid + 1;
      mid = Math.floor((end - start) / 2) + start;
    }
  }
  return result;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)); // 8

// 3. 버블 정렬
function bubbleSort(array) {
  let sortArray = [array[0]];
  let range = array.length;
  for (let j = 1; j < range - 1; j++) {
    for (let i = 1; i < range; i++) {
      if (sortArray[i - 1] < array[i]) {
        sortArray[i] = array[i];
      } else {
        sortArray[i] = sortArray[i - 1];
        sortArray[i - 1] = array[i];
      }
    }
    array = sortArray;
    sortArray = [array[0]];
  }
  return array;
}

console.log(bubbleSort([2, 4, 5, 1, 3])); // [ 1, 2, 3, 4, 5 ]
console.log(bubbleSort([5, 2, 1, 3, 4, 6])); // [ 1, 2, 3, 4, 5, 6 ]
console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [ -1, 0, 1, 2, 3, 4 ]