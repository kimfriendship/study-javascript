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
  let i = Math.floor(array.length / 2);
  while (array[i] !== target) {
    array[i] > target ? i-- : i++;
    if (array[i] === target) result = i;
    if (!(i >= 0 && i < array.length)) break;
  }
  return result;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 0));

// 3. 버블 정렬
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {}
  return;
}

console.log(bubbleSort([2, 4, 5, 1, 3]));
