// complex solution
function complexSym(...args) {
  if (args.length < 2)  return args

  let result = [],
      x = args[0].sort((a, b) => a - b),
      y;
  const len = args.length

  for (let n = 1; n < len; n++) {
    y = args[n].sort((a,b) => a - b);
    if (x[0] > y[0]) 
      [x, y] = [y, x]
    let lenX = x.length, lenY = y.length;
    let i = 0, j = 0;
    for (; i < lenX && j < lenY; ) {
      // 对于重复元素，将指针移动到最后一个重复元素的位置上
      while (x[i] == x[i + 1])
          i++;
      while (y[j] == y[j + 1])
          j++;

      // 比较两个元素的大小
      if (x[i] < y[j]) {
        result.push(x[i]);
        i++;
        continue;
      }
      else if (x[i] > y[j]) {
        result.push(y[j]);
        j++;
        continue;
      }
      else {
        i++;
        j++;
      }
    }

    if (i < lenX) {
      result.push(...removeRepeat(x.slice(i)))
    }
    if (j < lenY) {
      result.push(...removeRepeat(y.slice(j)))
    }
    if (n == len - 1) {
      break
    } 
    else {
      x = [...result];
      result = [];
    }
  }

  return result;
}

function removeRepeat(arr) {
  return arr.filter((item, index, self) => self.indexOf(item) == index)
}

// simple solution: it is so simple!!
function simpleSym(...args) {
  // 使用 reduce() 可以利用上一次操作得到的结果与下一个数组进行操作，非常适合本题的求解
  const results = args.reduce((arr1, arr2) => {
    return arr1.filter(item => !arr2.includes(item)).concat(
      arr2.filter(item => !arr1.includes(item))
    )
  });
  return results.filter((item, index, self) => self.indexOf(item) === index)
}