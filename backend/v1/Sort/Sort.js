module.exports = {
  BubbleSort: () => {
    const array = [0, 25, 9, 6, 8, 5, 7, 1, 16];
    var tempt;
    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          tempt = array[j];
          array[j] = array[i];
          array[i] = tempt;
        }
      }
    }
    return array;
  },
};
