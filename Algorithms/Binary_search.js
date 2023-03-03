function BinarySearch(arr, searchItem, start = 0, finish = arr.length - 1) {
  if (start > finish) {
    return false;
  }
  const middleIndex = Math.floor((start + finish) / 2);

  if (arr[middleIndex] === searchItem) {
    return true;
  } else if (arr[middleIndex] > searchItem) {
    return BinarySearch(arr, searchItem, start, middleIndex - 1);
  } else {
    return BinarySearch(arr, searchItem, middleIndex + 1, finish);
  }
}

// Not recursive
var doSearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;
  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (array[guess] === targetValue) {
      return guess;
    } else if (targetValue > array[guess]) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};

console.log(BinarySearch([1, 3, 4, 6, 9], 1));
console.log(BinarySearch([1, 3, 4, 6, 9], 3));
console.log(BinarySearch([1, 3, 4, 6, 9], 4));
console.log(BinarySearch([1, 3, 4, 6, 9], 6));
console.log(BinarySearch([1, 3, 4, 6, 9], 9));
console.log(BinarySearch([1, 3, 4, 6, 9], 2));
