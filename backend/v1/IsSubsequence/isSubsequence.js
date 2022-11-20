module.exports = {
  isSubsequence: () => {
    //! Cách 1
    function isSubsequence1(str1, str2) {
      if (str1.length === 0) return true;

      let i = 0;
      let j = 0;

      while (j < str2.length) {
        if (str2[j] === str1[i]) {
          i++;
        }
        j++;
      }

      return i === str1.length;
    }
    //!Cách2
    //! recursion (Đệ quy)
    function isSubsequence(str1, str2) {
      if (str1.length === 0) return true;
      if (str2.length === 0) return false;
      if (str2[0] === str1[0])
        return isSubsequence(str1.slice(1), str2.slice(1));
      return isSubsequence(str1, str2.slice(1));
    }
    return isSubsequence1("abc", "abracadabra");
  },
};
