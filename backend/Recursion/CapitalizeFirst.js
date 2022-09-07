module.exports = {
  CapitalizeFirst: () => {
    function capitalizeFirst(arr) {
      let newArr = [];
      if (arr.length === 0) return newArr;
      // ! CharAt()  là một phương thức dùng để lấy một ký tự bất kỳ trong chuỗi đã biết trước.
      newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
      newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
      return newArr;
    }
    return capitalizeFirst(["tai", "heo", "fa"]);
  },
};
