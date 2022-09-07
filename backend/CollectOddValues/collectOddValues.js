module.exports = {
  collectOddValues: () => {
    //!Cách 1
    function collectOddValues(arr) {
      let result = [];
      function helper(helperInput) {
        if (helperInput.length === 0) return;
        if (helperInput[0] % 2 !== 0) {
          result.push(helperInput[0]);
        }
        return helper(helperInput.slice(1));
      }
      helper(arr);
      return result;
    }
    return collectOddValues([1, 2, 3, 4, 5]);

    //! Cách 2
    function collectOddValues2(arr) {
      let result = [];
      if (arr.length === 0) return result;

      if (arr[0] % 2 !== 0) {
        result.push(arr[0]);
      }
      return result.concat(collectOddValues2(arr.slice(1)));
    }

    return collectOddValues2([1, 2, 3, 4, 5]);
  },
};
