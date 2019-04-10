function pairwise(arr, arg) {
  const results = [],
        len = arr.length;
  let extra, extraIndex;

  for (let i = 0; i < len; i++) {
    if (arr[i] == null) continue;
    extra = arg - arr[i];
    extraIndex = arr.indexOf(extra);
    if (extraIndex != -1 && extraIndex != i) {
      results.push(i + extraIndex);
      arr.splice(i, 1, null)
      arr.splice(extraIndex, 1, null)
    }
  }

  return results.reduce((a, b) => a + b, 0);
}

// pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4)