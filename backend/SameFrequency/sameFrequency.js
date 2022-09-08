module.exports = {
  sameFrequency: () => {
    function sameFrequency(num1, num2) {
      const frequencyCounter1 = {};
      const frequencyCourter2 = {};
      for (let digit of num1.toString()) {
        frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
      }

      for (let digit of num2.toString()) {
        frequencyCourter2[digit] = (frequencyCourter2[digit] || 0) + 1;
      }

      for (let key in frequencyCounter1) {
        if (frequencyCourter2[key] !== frequencyCounter1[key]) {
          return false;
        }
      }

      return true;
    }
    sameFrequency(14, 14);
  },
};
