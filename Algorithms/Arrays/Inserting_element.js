// position > array.length
// length = 6, pos = 6
function insertElement(arr, element, position) {
  if (position > arr.length) {
    return -1;
  }
  for (let i = arr.length - 1; i >= position; i--) {
    arr[i + 1] = arr[i];
  }
  arr[position] = element;
}

const arr = [1, 2, 3, 4, 5, 6];
insertElement(arr, 15, 7);
console.log(arr);
