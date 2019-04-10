function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  const curObj = {};
  arr1.forEach((item, index) => curObj[item[1]] = index);

  let tmp;
  arr2.forEach(item => {
      tmp = curObj[item[1]];
      if (typeof tmp != 'undefined') {
          arr1[tmp][0] += item[0];
      }
      else
          arr1.push(item);
  })

  return arr1.sort((a, b) => a[1] > b[1] ? 1 : -1);
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);