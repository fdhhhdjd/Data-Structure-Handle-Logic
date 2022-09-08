module.exports = {
  //! tìm kiếm xem thử chữ đó lặp lại nhiêu lần
  NaiveStringSearch: () => {
    var long = "Hello Tai";
    var short = "l";

    let count = 0;

    for (let i = 0; i < long.length; i++) {
      for (let j = 0; j < short.length; j++) {
        // console.log(long[i + j], short[j]);
        if (long[i] !== short[j]) {
          // console.log("break");

          break;
        }
        if (j === short.length - 1) {
          // console.log("count");
          count++;
        }
      }
    }

    return count;
  },
};
