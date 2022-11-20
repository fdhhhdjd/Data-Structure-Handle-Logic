module.exports = {
  sameNaive: () => {
    function same1(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        return false;
      }

      for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
          return false;
        }

        arr2.splice(correctIndex, 1);
      }

      return true;
    }
 

    // same1(arr1, arr2);
  },
};
