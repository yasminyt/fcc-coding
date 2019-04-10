/**
 * 归并排序的思想是：把长度为 n 的初始序列分成两个长度为 n/2 的子序列，然后对这两个子序列分别采用归并排序，
 * 将两个排序好的子序列合并成一个最终的排序序列
 * @param {array} arr 
 */

function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) return arr;

  let middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0])
      result.push(left.shift());
    else
      result.push(right.shift())
  }

  if (left.length) 
    result.push(...left)

  if (right.length)
    result.push(...right)

  return result
}