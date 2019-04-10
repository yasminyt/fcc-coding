/**
 * 冒泡排序的思想是：在每一轮遍历中，比较元素与其后一项谁大谁小，
 * 然后互相交换位置，从而在一轮遍历中得到该轮遍历的最大值（最小值）
 * @param {array} arr 
 */

function bubbleSort(arr) {
  const len = arr.length;
  if (len < 2)
    return arr;

  let done;
  for (let i = 0; i < len - 1; i++) {
    done = true;  // 为了减少不必要的遍历，引入标识符，如果内部遍历已经不再发生变化，则外部遍历不再需要
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        done = false
      }
    }
    if (done)
      break
  }

  return arr
}