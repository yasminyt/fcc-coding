/**
 * 快速排序的思想是：取第一个数作为比较的基准，将大于第一个数的数放在一个数组里，将小于第一个数的数放在另一个数组里，
 * 然后通过递归来分别对这两个数组进行排序，再通过数组的concat()将结果整合
 * @param {array} arr 
 */

function quickSort(arr) {
  const len = arr.length
  if (len < 2)
    return arr

  const sortArr = [],
        left = [],
        right = [],
        basic = arr[0];

  for (let i = 1; i < len; i++) {
    basic > arr[i] ? left.push(arr[i]) : right.push(arr[i])
  }

  return sortArr.concat(quickSort(left), basic, quickSort(right))
}