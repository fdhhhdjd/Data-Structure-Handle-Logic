module.exports = {
  binarySearch: () => {
    var sortedArr = [1, 2, 3, 4, 5, 6, 15];
    var target = 6;

    let start = 0;
    let end = sortedArr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (sortedArr[mid] > target) {
        end = mid - 1;
      } else if (sortedArr[mid] < target) {
        start = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
  },
};
/// search
var sortedArr = [1, 6, 4, 3, 2, 6, 15];
var target = 15;
const DemoCode = (sortedArr, target) => {
  var sortedArrs = new Set(sortedArr);
  var result = [...sortedArrs].sort((a, b) => a - b);
  var start = 0;
  var end = result.length - 1;
  while (start <= end) {
    let calculation = Math.floor((start + end) / 2);
    if (result[calculation] < target) {
      start = calculation + 1;
    } else if (result[calculation] > target) {
      end = calculation - 1;
    } else {
      return calculation;
    }
  }
  return -1;
};

DemoCode(sortedArr, target);
