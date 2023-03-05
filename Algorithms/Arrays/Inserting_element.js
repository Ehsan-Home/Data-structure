// [1, 2, 3, 4, 5, 6]
// arr.length = 6
// i = 4
// a[6] = a[5]
function insertElement(arr, element, position) {
  for (let i = arr.length - 1; i >= position; i--) {
    arr[i + 1] = arr[i];
  }
  arr[position] = element;
}

const arr = [1, 2, 3, 4, 5, 6];
insertElement(arr, 15, 2);
console.log(arr);
