module.exports = {
  flatten: () => {
    function fla(arr) {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          newArr = newArr.concat(fla(arr[i]));
        } else {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    }
    return fla([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
  },
};
