/**
 * 选择排序的思想是：在每一轮遍历中，先找到该轮遍历中最小值所在的位置，
 * 找到后则将该最小值与该轮遍历的元素进行交换
 * @param {array} arr 
 */

function selectionSort(arr) {
  const len = arr.length
  if (len < 2) return arr;

  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex])
        minIndex = j
    }
    if (minIndex != i) 
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  return arr
}