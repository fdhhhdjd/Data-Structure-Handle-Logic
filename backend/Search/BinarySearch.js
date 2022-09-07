module.exports = {
  binarySearch: () => {
    var sortedArr = [1, 2, 3, 4, 5, 6, 15];
    var target = 6;

    let start = 0;
    let end = sortedArr.length - 1;
    while (start < end) {
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
