function mergeSort(arr) {
  // Divide
  if (arr.length === 1) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);

  let left = arr.slice(0, middleIndex);
  let right = arr.slice(middleIndex, arr.length);

  left = mergeSort(left);
  right = mergeSort(right);

  // Conquer
  let leftIndex = 0;
  let rightIndex = 0;
  const mergedArray = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    mergedArray.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    mergedArray.push(right[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}

const arr = [1, 3, -1, 0, 2, 8, 7, 14, -10, 1.5];

console.log(mergeSort(arr));
