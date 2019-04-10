/**
 * 插入排序的思想是：将初始数组划分为两个部分，以前一部分作为已排序的，后一部分作为未排序的，
 * 每次遍历从未排序中选取一个元素插入到已排序中，从后往前找插入的位置。
 * 在该排序中主要是要把大于（小于）比较元素的已排序中的元素往后移动，以腾出一个位置来给要插入的元素
 * @param {array} arr 
 */

function insertionSort(arr) {
  const len = arr.length;
  if (len < 2) return arr;

  let tmp;
  for (let i = 1; i < len; i++) {
    tmp = arr[i];
    let j = i - 1;
    for (; j > -1 && tmp < arr[j]; j--)
      arr[j + 1] = arr[j];

    arr[j + 1] = tmp
  }

  return arr
}