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
