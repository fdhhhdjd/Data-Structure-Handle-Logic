module.exports = {
  someRecursive: () => {
    function someRecursive(arr, callback) {
      if (arr.length === 0) return false;
      if (callback(arr[0]) === true) return true;
      return someRecursive(arr.slice(1), callback);
    }
    return someRecursive([4, 8, 6], (val) => val > 6);
  },
};
