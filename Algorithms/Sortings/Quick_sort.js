function quickSort(arr, start = 0, finish = arr.length - 1) {
  if (start >= finish) {
    return;
  }
  let pivot = arr[finish];
  const pivotIndex = finish;

  let leftPointer = start;
  let rightPointer = finish - 1;

  while (leftPointer <= rightPointer) {
    if (arr[leftPointer] > pivot && arr[rightPointer] < pivot) {
      const temp = arr[leftPointer];
      arr[leftPointer] = arr[rightPointer];
      arr[rightPointer] = temp;
    }
    if (arr[leftPointer] < pivot) {
      leftPointer++;
    }
    if (arr[rightPointer] >= pivot) {
      rightPointer--;
    }
  }

  const temp = arr[leftPointer];
  arr[leftPointer] = arr[pivotIndex];
  arr[pivotIndex] = temp;

  quickSort(arr, start, leftPointer - 1);
  quickSort(arr, leftPointer + 1, finish);
}

let arr = [17, 19, 20, 21, 15];
quickSort(arr);
console.log(arr);
