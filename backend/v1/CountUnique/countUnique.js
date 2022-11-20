module.exports = {
    countUnique: () => {
    function countUnique(arr) {
      if (arr.length === 0) return 0;
      var i = 0;
      for (var j = 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          i++;
          arr[i] = arr[j];
        }
      }

      return i + 1;
    }
    return countUnique([2, 2, 2, 2, 2, 3, 4]);
  },
};
