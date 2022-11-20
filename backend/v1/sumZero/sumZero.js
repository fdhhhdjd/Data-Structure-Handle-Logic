module.exports = {
  sumZero: () => {
    function sumZero1(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === 0) {
            return [arr[i], arr[j]];
          }
        }
      }
    }
    function sumZero2(arr) {
      let left = 0;
      let right = arr.length - 1;

      while (left < right) {
        var sum = arr[left] + arr[right];
        if (sum === 0) {
          return [arr[left], arr[right]];
        } else if (sum > 0) {
          right--;
        } else {
          left++;
        }
      }

      return undefined;
    }
    sumZero1([-3, -2, -4, 0, 1, 4, 5]);
  },
};
