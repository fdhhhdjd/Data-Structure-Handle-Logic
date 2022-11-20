module.exports = {
  productOfArray: () => {
    function productOfArray(arr) {
      if (arr.length === 0) return 1;

      return arr[0] * productOfArray(arr.slice(1));
    }

    return productOfArray([1, 3, 6, 4]);
  },
};
