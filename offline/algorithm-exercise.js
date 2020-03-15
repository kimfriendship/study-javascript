// 1. 선형 검색
function linearSearch(array, target) {
  let result = target;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) result = i;
  }
  return result;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 1));

// 2. 이진 검색
function binarySearch(array, target) {
  let result = -1;
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor(start + end / 2);
  while (true) {
    if (start === end && array[mid] !== target) {
      break;
    } else if (array[mid] > target) {
      end = mid - 1;
      mid = Math.floor(start + end / 2);
    } else if (array[mid] < target) {
      start = mid + 1;
      mid = Math.floor((end - start) / 2) + start;
    } else if (array[mid] === target) {
      result = mid;
      break;
    }
  }
  return result;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));

// 3. 버블 정렬
function bubbleSort(array) {
  let newArray = [array[0]];
  for (let i = 1; i < array.length - 1; i++) {
    for (let i = 1; i < array.length; i++) {
      if (newArray[i - 1] < array[i]) {
        newArray[i] = array[i];
      } else {
        newArray[i] = newArray[i - 1];
        newArray[i - 1] = array[i];
      }
    }
    array = newArray;
    newArray = [array[0]];
  }
  return array;
}

console.log(bubbleSort([2, 4, 5, 1, 3]));
console.log(bubbleSort([5, 2, 1, 3, 4, 6]));
console.log(bubbleSort([3, 1, 0, -1, 4, 2]));