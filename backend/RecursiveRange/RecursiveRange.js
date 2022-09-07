module.exports = {
  recursiveRanges: () => {
    function recursiveRange(numbers) {
      if (numbers === 0) return 0;
      return numbers + recursiveRange(numbers - 1);
    }
    return recursiveRange(6);
  },
};
