module.exports = {
  maxSubarraySums: () => {
    function maxSubarraySum(arr, n) {
      if (n > arr.length) {
        return null;
      }
      let max = -Infinity;
      for (let i = 0; i < arr.length - n + 1; i++) {
        var max_sub = 0;
        for (let j = 0; j < n; j++) {
          max_sub += arr[i + j];
        }

        if (max < max_sub) {
          max = max_sub;
        }
      }

      return max;
    }
    maxSubarraySum([100, 200, 300, 900, 5000, 2000], 1);
  },
};
//Cach 2
const DemoCode = (arr, n) => {
  var mid = 0;
  if (arr.length === 0) return mid;
  for (var i = 0; i < arr.length; i++) {
    if (arr[mid] < arr[i]) {
      mid = i;
    }
  }
  return arr[mid];
};
DemoCode([100, 200, 300, 900, 5000, 2000]);

//Min

const DemoCodeMin = (arr, n) => {
  var mid = 0;
  if (arr.length === 0) return mid;
  for (var i = 0; i < arr.length; i++) {
    if (arr[mid] > arr[i]) {
      mid = i;
    }
  }
  return arr[mid];
};

DemoCodeMin([100, 20, 300, 5, 10, 2000]);
