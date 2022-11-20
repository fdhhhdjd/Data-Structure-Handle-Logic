module.exports = {
  CapitalizeWord: () => {
    let capitalizedWords = [];
    let arr = ["i", "am", "tien tai", "web"];
    if (arr.length === 0) return capitalizedWords;
    for (var i = 0; i < arr.length; i++) {
      capitalizedWords.push(arr[i].toUpperCase());
    }
    return capitalizedWords;
  },
};
