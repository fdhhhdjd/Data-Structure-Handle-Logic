const {
  isAlphaNumeric,
} = require("../services/charCount.service/charCount.service");

module.exports = {
  CharCount: () => {
    const full_name = "Nguyen Tien Tai";
    let result = {};
    for (let i = 0; i < full_name.length; i++) {
      var char = full_name[i].toLocaleLowerCase();
      if (isAlphaNumeric(char)) {
        result[char] = ++result[char] || 1;
      }
    }
    return result;
  },
};
