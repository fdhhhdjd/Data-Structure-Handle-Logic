module.exports = {
  factorial: () => {
    function factorial(num) {
      if (num === 0) return 1;
      return num * factorial(num - 1);
    }
    return factorial(5);
  },
};
