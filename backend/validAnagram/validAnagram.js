module.exports = {
  validAnagram: () => {
    //! Cách 1
    function validAnagram1(str1, str2) {
      if (str1.length !== str2.length) return false;
      let frequencyCounter1 = {};
      let frequencyCounter2 = {};
      for (let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
      }
      for (let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
      }
      for (const key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
      }
      return true;
    }
    validAnagram1("taideptrai", "taideptrai");

    //! Cách 2
    function validAnagram2(str1, str2) {
      if (str1.length !== str2.length) return false;
      const lookup = {};

      for (let letter of str1) {
        lookup[letter] ? ++lookup[letter] : (lookup[letter] = 1);
      }
      for (let letter1 of str2) {
        if (!lookup[letter1]) {
          return false;
        } else {
          --lookup[letter1];
        }
      }
      return true;
    }
    validAnagram2("taideptrai", "taideptrai");
  },
};
