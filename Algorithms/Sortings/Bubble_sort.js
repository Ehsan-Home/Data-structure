function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
}

function bubbleSortInOtherWay(arr) {
  let isSorted = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        isSorted = false;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (isSorted) {
      console.log("already sorted");
      return;
    }
  }
}

const arr = [1, 3, 6, -1, 90, 10, -2];
const arr2 = [-1, 1, 4, 5, 6, 90, 99, 100];

// bubbleSort(arr);

bubbleSortInOtherWay(arr2);

console.log(arr2);
